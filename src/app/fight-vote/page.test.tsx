import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ComponentProps } from "react";
import FightVote from "./page";
import { addVoteData } from "@/utils/supabase/fightVoteAction";
import detectIncognito from "detectincognitojs";

vi.mock("@/utils/supabase/fightVoteAction", () => ({
    addVoteData: vi.fn(),
}));

vi.mock("detectincognitojs", () => ({
    default: vi.fn(),
}));

vi.mock("next/image", () => ({
    // img に渡せない priority / unoptimized は取り除く
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text, @typescript-eslint/no-unused-vars
    default: ({ priority: _priority, unoptimized: _unoptimized, ...props }: ComponentProps<"img"> & { priority?: boolean; unoptimized?: boolean }) => <img {...props} />,
}));

vi.mock("next/link", () => ({
    default: ({ href, children, ...rest }: ComponentProps<"a">) => <a href={href} {...rest}>{children}</a>,
}));

const mockedVote = vi.mocked(addVoteData);
const mockedIncognito = vi.mocked(detectIncognito);

const STORAGE_KEY = "142-fight-vote-submitted";
const PRIVATE_MESSAGE = "プライベートモード（シークレットモード）では投票できません。お使いのブラウザの通常モードで開き直してください。";
const CHECK_FAILED_MESSAGE = "ブラウザの投票状態を確認できませんでした。通常モードでページを再読み込みしてください。";
const THANKS_MESSAGE = "投票ありがとうございました！";
const SEND_FAILED_MESSAGE = "投票の送信に失敗しました。通信環境とブラウザの保存設定を確認して、もう一度お試しください。";

// 各部門の [左, 右] の団体。左 = 1、右 = 0 で保存される
const GROUPS = {
    amour: "アカペラサークル amour",
    musical: "ミュージカル研究会",
    soundArts: "アカペラサークル Sound Arts",
    copia: "Copia",
    mercie: "K-POPカバーダンスサークル Mercie",
    sign: "中野ダンスサークル SIGN",
};

// jsdom の dialog には showModal / close が無いため、open 属性の切り替えだけ行う。
// ブラウザと同じく close イベントは後のタスクで発火する (内容の切り替えで閉じて開き直す動きを再現するため)
beforeAll(() => {
    const proto = HTMLDialogElement.prototype;
    if (typeof proto.showModal !== "function") {
        proto.showModal = function (this: HTMLDialogElement) { this.setAttribute("open", ""); };
    }
    if (typeof proto.close !== "function") {
        proto.close = function (this: HTMLDialogElement) {
            if (!this.open) return;
            this.removeAttribute("open");
            setTimeout(() => this.dispatchEvent(new Event("close")));
        };
    }
});

function groupButton(name: string) {
    return screen.getByRole("button", { name: `${name}に投票` });
}

function submitButton() {
    return screen.getByRole("button", { name: /投票を送信/ });
}

function dialogMessage() {
    return document.getElementById("vote-message");
}

// 初回の投票状態・プライベートモード確認が終わるまで待ってから返す
async function renderPage() {
    const user = userEvent.setup();
    const result = render(<FightVote />);
    await waitFor(() => expect(mockedIncognito).toHaveBeenCalled());
    return { user, ...result };
}

async function waitReady() {
    await screen.findByText("0/3部門を選択済み");
}

async function selectAll(user: ReturnType<typeof userEvent.setup>, names = [GROUPS.amour, GROUPS.copia, GROUPS.sign]) {
    for (const name of names) await user.click(groupButton(name));
}

beforeEach(() => {
    mockedVote.mockReset().mockResolvedValue(true);
    mockedIncognito.mockReset().mockResolvedValue({ isPrivate: false, browserName: "Chrome" });
    vi.spyOn(window, "scrollTo").mockImplementation(() => {});
});

afterEach(() => {
    vi.restoreAllMocks();
});

describe("初期表示", () => {
    it("確認中は選択・送信ができず、確認後に 3部門 6団体の選択肢が使えるようになる", async () => {
        let resolve: (value: { isPrivate: boolean; browserName: string }) => void = () => {};
        mockedIncognito.mockReturnValue(new Promise((r) => { resolve = r; }));
        render(<FightVote />);

        expect(screen.getByText("投票状態を確認しています。")).toBeInTheDocument();
        for (const name of Object.values(GROUPS)) expect(groupButton(name)).toBeDisabled();
        expect(submitButton()).toBeDisabled();

        await act(async () => resolve({ isPrivate: false, browserName: "Chrome" }));

        expect(screen.getByText("0/3部門を選択済み")).toBeInTheDocument();
        for (const name of Object.values(GROUPS)) expect(groupButton(name)).toBeEnabled();
        expect(screen.getByRole("region", { name: "Amazing dream" })).toBeInTheDocument();
        expect(screen.getByRole("region", { name: "Sweet dream" })).toBeInTheDocument();
        expect(screen.getByRole("region", { name: "Star dream" })).toBeInTheDocument();
    });

    it("企画ページ (/fight) へのリンクを新しいタブで開く", async () => {
        await renderPage();

        const link = screen.getByRole("link", { name: "こちら" });
        expect(link).toHaveAttribute("href", "/fight");
        expect(link).toHaveAttribute("target", "_blank");
    });

    it("このブラウザで投票済みなら、選択肢を出さず完了画面を表示する", async () => {
        localStorage.setItem(STORAGE_KEY, "true");
        await renderPage();

        expect(screen.getByText(THANKS_MESSAGE)).toBeInTheDocument();
        expect(screen.queryByRole("button", { name: /に投票$/ })).not.toBeInTheDocument();
        expect(screen.queryByRole("button", { name: /投票を送信/ })).not.toBeInTheDocument();
    });

    it("プライベートモードでは投票できず、エラーダイアログと案内を表示する", async () => {
        mockedIncognito.mockResolvedValue({ isPrivate: true, browserName: "Chrome" });
        await renderPage();

        await waitFor(() => expect(dialogMessage()).toHaveTextContent(PRIVATE_MESSAGE));
        expect(screen.getAllByText(PRIVATE_MESSAGE)).toHaveLength(2);
        for (const name of Object.values(GROUPS)) expect(groupButton(name)).toBeDisabled();
        expect(submitButton()).toBeDisabled();
    });

    it("ブラウザの確認に失敗したら投票できず、確認失敗の案内を表示する", async () => {
        mockedIncognito.mockRejectedValue(new Error("detect failed"));
        await renderPage();

        await waitFor(() => expect(dialogMessage()).toHaveTextContent(CHECK_FAILED_MESSAGE));
        expect(screen.getAllByText(CHECK_FAILED_MESSAGE)).toHaveLength(2);
        for (const name of Object.values(GROUPS)) expect(groupButton(name)).toBeDisabled();
        expect(submitButton()).toBeDisabled();
    });
});

describe("団体の選択", () => {
    it("選んだ団体が選択中になり、同じ部門の相手は非選択のままになる", async () => {
        const { user } = await renderPage();
        await waitReady();

        await user.click(groupButton(GROUPS.amour));

        expect(groupButton(GROUPS.amour)).toHaveAttribute("aria-pressed", "true");
        expect(groupButton(GROUPS.musical)).toHaveAttribute("aria-pressed", "false");
        expect(screen.getByText("1/3部門を選択済み")).toBeInTheDocument();
    });

    it("同じ部門で相手を選び直すと選択が切り替わり、選択数は増えない", async () => {
        const { user } = await renderPage();
        await waitReady();

        await user.click(groupButton(GROUPS.amour));
        await user.click(groupButton(GROUPS.musical));

        expect(groupButton(GROUPS.amour)).toHaveAttribute("aria-pressed", "false");
        expect(groupButton(GROUPS.musical)).toHaveAttribute("aria-pressed", "true");
        expect(screen.getByText("1/3部門を選択済み")).toBeInTheDocument();
    });

    it("別の部門を選んでも、ほかの部門の選択は維持される", async () => {
        const { user } = await renderPage();
        await waitReady();

        await user.click(groupButton(GROUPS.amour));
        await user.click(groupButton(GROUPS.copia));

        expect(groupButton(GROUPS.amour)).toHaveAttribute("aria-pressed", "true");
        expect(groupButton(GROUPS.copia)).toHaveAttribute("aria-pressed", "true");
        expect(screen.getByText("2/3部門を選択済み")).toBeInTheDocument();
    });

    it("3部門すべて選ぶまで送信ボタンは押せない", async () => {
        const { user } = await renderPage();
        await waitReady();

        await user.click(groupButton(GROUPS.amour));
        await user.click(groupButton(GROUPS.copia));
        expect(submitButton()).toBeDisabled();

        await user.click(groupButton(GROUPS.sign));
        expect(screen.getByText("3/3部門を選択済み")).toBeInTheDocument();
        expect(submitButton()).toBeEnabled();
    });
});

describe("投票の送信", () => {
    it.each([
        { names: [GROUPS.amour, GROUPS.soundArts, GROUPS.mercie], expected: [1, 1, 1] },
        { names: [GROUPS.musical, GROUPS.copia, GROUPS.sign], expected: [0, 0, 0] },
        { names: [GROUPS.amour, GROUPS.copia, GROUPS.mercie], expected: [1, 0, 1] },
    ])("左の団体 = 1、右の団体 = 0 として部門順に送信する ($expected)", async ({ names, expected }) => {
        const { user } = await renderPage();
        await waitReady();

        await selectAll(user, names);
        await user.click(submitButton());

        await waitFor(() => expect(mockedVote).toHaveBeenCalledTimes(1));
        expect(mockedVote).toHaveBeenCalledWith(...expected);
    });

    it("送信に成功したら完了画面と成功ダイアログを表示し、投票済みをブラウザに保存する", async () => {
        const { user } = await renderPage();
        await waitReady();

        await selectAll(user);
        await user.click(submitButton());

        await waitFor(() => expect(dialogMessage()).toHaveTextContent(THANKS_MESSAGE));
        expect(localStorage.getItem(STORAGE_KEY)).toBe("true");
        expect(screen.queryByRole("button", { name: /に投票$/ })).not.toBeInTheDocument();
        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "auto" });
    });

    it("送信中は送信中ダイアログを出し、閉じるボタン・選択・再送信を無効にする", async () => {
        let resolve: (value: boolean) => void = () => {};
        mockedVote.mockReturnValue(new Promise((r) => { resolve = r; }));
        const { user } = await renderPage();
        await waitReady();

        await selectAll(user);
        await user.click(submitButton());

        await waitFor(() => expect(dialogMessage()).toHaveTextContent("投票を送信中です。"));
        expect(screen.queryByRole("button", { name: "閉じる" })).not.toBeInTheDocument();
        expect(screen.getByRole("button", { name: "投票を送信中" })).toBeDisabled();
        expect(groupButton(GROUPS.musical)).toBeDisabled();

        await act(async () => resolve(true));
        await waitFor(() => expect(dialogMessage()).toHaveTextContent(THANKS_MESSAGE));
    });

    it("送信ボタンを連打しても 1回しか送信しない", async () => {
        let resolve: (value: boolean) => void = () => {};
        mockedVote.mockReturnValue(new Promise((r) => { resolve = r; }));
        const { user } = await renderPage();
        await waitReady();
        await selectAll(user);

        const button = submitButton();
        // 再描画で disabled になる前の連続クリックを再現する
        await act(async () => {
            fireEvent.click(button);
            fireEvent.click(button);
            fireEvent.click(button);
        });

        await waitFor(() => expect(mockedVote).toHaveBeenCalledTimes(1));
        await act(async () => resolve(true));
        expect(mockedVote).toHaveBeenCalledTimes(1);
    });

    it("サーバーへの保存に失敗したらエラーを表示し、投票済みにせず再送できる", async () => {
        mockedVote.mockResolvedValueOnce(false);
        const { user } = await renderPage();
        await waitReady();

        await selectAll(user);
        await user.click(submitButton());

        await waitFor(() => expect(dialogMessage()).toHaveTextContent(SEND_FAILED_MESSAGE));
        expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
        expect(groupButton(GROUPS.amour)).toHaveAttribute("aria-pressed", "true");

        await user.click(screen.getByRole("button", { name: "閉じる" }));
        await user.click(submitButton());

        await waitFor(() => expect(dialogMessage()).toHaveTextContent(THANKS_MESSAGE));
        expect(mockedVote).toHaveBeenCalledTimes(2);
    });

    it("送信処理で例外が起きてもエラーを表示し、投票済みにしない", async () => {
        mockedVote.mockRejectedValue(new Error("network"));
        const { user } = await renderPage();
        await waitReady();

        await selectAll(user);
        await user.click(submitButton());

        await waitFor(() => expect(dialogMessage()).toHaveTextContent(SEND_FAILED_MESSAGE));
        expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
        expect(submitButton()).toBeEnabled();
    });

    it("送信直前に別タブで投票済みになっていたら、送信せず完了画面にする", async () => {
        const { user } = await renderPage();
        await waitReady();

        await selectAll(user);
        localStorage.setItem(STORAGE_KEY, "true");
        await user.click(submitButton());

        await waitFor(() => expect(dialogMessage()).toHaveTextContent(THANKS_MESSAGE));
        expect(mockedVote).not.toHaveBeenCalled();
        expect(screen.queryByRole("button", { name: /に投票$/ })).not.toBeInTheDocument();
    });

    it("送信直前にプライベートモードと判定されたら送信しない", async () => {
        const { user } = await renderPage();
        await waitReady();

        await selectAll(user);
        mockedIncognito.mockResolvedValue({ isPrivate: true, browserName: "Chrome" });
        await user.click(submitButton());

        await waitFor(() => expect(dialogMessage()).toHaveTextContent(PRIVATE_MESSAGE));
        expect(mockedVote).not.toHaveBeenCalled();
        expect(submitButton()).toBeDisabled();
    });

    it("ブラウザに保存できない環境では、投票済みを記録できないため送信しない", async () => {
        const { user } = await renderPage();
        await waitReady();

        await selectAll(user);
        vi.spyOn(localStorage, "setItem").mockImplementation(() => { throw new Error("QuotaExceededError"); });
        await user.click(submitButton());

        await waitFor(() => expect(dialogMessage()).toHaveTextContent(SEND_FAILED_MESSAGE));
        expect(mockedVote).not.toHaveBeenCalled();
    });

    it("サーバーへの保存後にブラウザへの記録だけ失敗しても、完了画面のままにする", async () => {
        const { user } = await renderPage();
        await waitReady();

        await selectAll(user);
        const originalSetItem = localStorage.setItem.bind(localStorage);
        vi.spyOn(localStorage, "setItem").mockImplementation((key, value) => {
            if (key === STORAGE_KEY) throw new Error("QuotaExceededError");
            originalSetItem(key, value);
        });
        await user.click(submitButton());

        await waitFor(() => expect(dialogMessage()).toHaveTextContent(THANKS_MESSAGE));
        expect(mockedVote).toHaveBeenCalledTimes(1);
        expect(screen.queryByRole("button", { name: /に投票$/ })).not.toBeInTheDocument();
    });
});

describe("ダイアログ・別タブ連携", () => {
    it("閉じるボタンでダイアログを閉じられる", async () => {
        mockedIncognito.mockResolvedValue({ isPrivate: true, browserName: "Chrome" });
        const { user } = await renderPage();
        await waitFor(() => expect(dialogMessage()).toHaveTextContent(PRIVATE_MESSAGE));

        await user.click(screen.getByRole("button", { name: "閉じる" }));

        expect(dialogMessage()).toBeNull();
        // ダイアログを閉じても、画面上の案内は残る
        expect(screen.getByText(PRIVATE_MESSAGE)).toBeInTheDocument();
    });

    it("ダイアログ表示中は背面のスクロールを止め、閉じると元に戻す", async () => {
        mockedIncognito.mockResolvedValue({ isPrivate: true, browserName: "Chrome" });
        const { user } = await renderPage();
        await waitFor(() => expect(dialogMessage()).not.toBeNull());

        expect(document.body.style.overflow).toBe("hidden");
        await user.click(screen.getByRole("button", { name: "閉じる" }));
        expect(document.body.style.overflow).toBe("");
    });

    it("別タブで投票されたら、このタブも完了画面に切り替わる", async () => {
        await renderPage();
        await waitReady();

        act(() => {
            window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY, newValue: "true" }));
        });

        expect(screen.getByText(THANKS_MESSAGE)).toBeInTheDocument();
        expect(screen.queryByRole("button", { name: /に投票$/ })).not.toBeInTheDocument();
    });

    it("関係ないキーの storage イベントでは切り替わらない", async () => {
        await renderPage();
        await waitReady();

        act(() => {
            window.dispatchEvent(new StorageEvent("storage", { key: "other-key", newValue: "true" }));
        });

        expect(screen.getByText("0/3部門を選択済み")).toBeInTheDocument();
    });
});
