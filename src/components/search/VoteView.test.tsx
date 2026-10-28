import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ComponentProps } from "react";
import VoteView from "./VoteView";
import { voteMeicham } from "@/utils/supabase/meichamAction";
import { detectIncognito } from "detectincognitojs";
import { saveVotedId } from "@/utils/managers/meichamManager";

vi.mock("@/utils/supabase/meichamAction", () => ({
    voteMeicham: vi.fn(),
}));

vi.mock("detectincognitojs", () => ({
    detectIncognito: vi.fn(),
}));

vi.mock("next/image", () => ({
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    default: (props: ComponentProps<"img">) => <img {...props} />,
}));

vi.mock("next/link", () => ({
    default: ({ href, children, ...rest }: ComponentProps<"a">) => <a href={href} {...rest}>{children}</a>,
}));

const mockedVote = vi.mocked(voteMeicham);
const mockedIncognito = vi.mocked(detectIncognito);

const baseProps: ComponentProps<typeof VoteView> = {
    id: "event-1",
    groupId: "group-1",
    type: "模擬店",
    eventName: "たこ焼き屋",
    groupName: "明治サークル",
    eventDate: "全日",
    category: "飲食",
};

// 日本時間で現在時刻を固定する
function setJapanNow(iso: string) {
    vi.setSystemTime(new Date(`${iso}+09:00`));
}

function getVotedData() {
    return JSON.parse(localStorage.getItem("142MeichamVoted") || "[]");
}

// 初期化 (useEffect 内の非同期処理) が終わるまで待ってから返す
async function renderVoteView(props: Partial<ComponentProps<typeof VoteView>> = {}) {
    const user = userEvent.setup();
    const result = render(<VoteView {...baseProps} {...props} />);
    const category = "category" in props ? props.category : baseProps.category;
    if (category !== null) {
        await waitFor(() => expect(mockedIncognito).toHaveBeenCalled());
    }
    return { user, ...result };
}

function mainButton(name: string | RegExp = "投票する") {
    return screen.getByRole("button", { name });
}

// 「投票する」→ 確認モーダルの「投票する ＞」まで進める
async function voteThroughModal(user: ReturnType<typeof userEvent.setup>) {
    await user.click(mainButton());
    await user.click(screen.getByRole("button", { name: "投票する ＞" }));
}

beforeEach(() => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.stubEnv("NEXT_PUBLIC_TEST_NOW", "");
    setJapanNow("2026-10-30T12:00:00");
    mockedVote.mockReset().mockResolvedValue(true);
    mockedIncognito.mockReset().mockResolvedValue({ isPrivate: false, browserName: "Chrome" });
    vi.spyOn(console, "log").mockImplementation(() => {});
});

afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
});

// 要項 (2) 投票対象
describe("投票対象", () => {
    it("Meidaisai Championship に参加していない企画（category が null）には投票ボタンを出さない", async () => {
        await renderVoteView({ category: null });
        expect(screen.queryByRole("button", { name: /投票/ })).not.toBeInTheDocument();
        expect(screen.getByText("この企画は Meidaisai Championship の投票対象ではありません。")).toBeInTheDocument();
    });

    it("参加している企画には「投票する」ボタンを出す", async () => {
        await renderVoteView();
        expect(mainButton()).toBeEnabled();
    });
});

// 要項 (4) ②「投票する」をタップすることで投票できる
describe("投票の流れ", () => {
    it("「投票する」をタップすると、企画名・団体名・投票部門を載せた確認モーダルが開く", async () => {
        const { user } = await renderVoteView();
        await user.click(mainButton());

        expect(screen.getByText("本当にこの企画に投票しますか？")).toBeInTheDocument();
        expect(screen.getByText("たこ焼き屋")).toBeInTheDocument();
        expect(screen.getByText("明治サークル")).toBeInTheDocument();
        expect(screen.getByText("飲食部門")).toBeInTheDocument();
        // 要項 (6) 投票の強制は禁止
        expect(screen.getByText("※参加団体が投票を誘導・強制することはできません。")).toBeInTheDocument();
        // 確認しただけではまだ投票しない
        expect(mockedVote).not.toHaveBeenCalled();
    });

    it("確認モーダルで投票すると、部門つきで投票が送信され、完了画面になる", async () => {
        const { user } = await renderVoteView();
        await voteThroughModal(user);

        await screen.findByText("投票完了！");
        expect(mockedVote).toHaveBeenCalledTimes(1);
        expect(mockedVote).toHaveBeenCalledWith("event-1", "group-1", "模擬店", "飲食", expect.any(String));
        expect(mainButton("投票済み")).toBeDisabled();
        expect(getVotedData()).toEqual([
            expect.objectContaining({ id: "event-1", groupId: "group-1", type: "模擬店", category: "飲食" }),
        ]);
    });

    it("確認モーダルを閉じたときは投票しない", async () => {
        const { user } = await renderVoteView();
        await user.click(mainButton());
        await user.click(screen.getByRole("button", { name: "閉じる" }));

        expect(screen.queryByText("本当にこの企画に投票しますか？")).not.toBeInTheDocument();
        expect(mockedVote).not.toHaveBeenCalled();
        expect(mainButton()).toBeEnabled();
    });

    it("投票ボタンを連打しても1票しか送信しない", async () => {
        let resolveVote!: (value: boolean) => void;
        mockedVote.mockReturnValue(new Promise(resolve => { resolveVote = resolve; }));
        const { user } = await renderVoteView();
        await user.click(mainButton());
        const modalButton = screen.getByRole("button", { name: "投票する ＞" });
        fireEvent.click(modalButton);
        fireEvent.click(modalButton);
        fireEvent.click(modalButton);
        expect(modalButton).toBeDisabled();

        resolveVote(true);
        await screen.findByText("投票完了！");
        expect(mockedVote).toHaveBeenCalledTimes(1);
    });

    it("同じ端末からの投票は同じ投票者IDで送信する", async () => {
        const first = await renderVoteView();
        await voteThroughModal(first.user);
        await screen.findByText("投票完了！");
        first.unmount();

        mockedIncognito.mockClear();
        const second = await renderVoteView({ id: "event-2", groupId: "group-2", category: "エンタメ" });
        await voteThroughModal(second.user);
        await screen.findByText("投票完了！");

        const voterIds = mockedVote.mock.calls.map(call => call[4]);
        expect(voterIds[0]).toBeTruthy();
        expect(voterIds[1]).toBe(voterIds[0]);
    });

    it("投票の送信に失敗したら、エラーを表示して再度投票できるようにする", async () => {
        mockedVote.mockResolvedValue(false);
        const { user } = await renderVoteView();
        await voteThroughModal(user);

        expect(await screen.findByText("投票に失敗しました。もう一度お試しください。")).toBeInTheDocument();
        expect(mainButton()).toBeEnabled();
        expect(screen.queryByText("投票完了！")).not.toBeInTheDocument();
        // 失敗した投票は投票済みとして保存しない
        expect(getVotedData()).toEqual([]);
    });
});

describe("投票できない場合", () => {
    it("すでに投票した企画には投票できない", async () => {
        saveVotedId("event-1", "group-1", "模擬店", "飲食");
        await renderVoteView();
        await waitFor(() => expect(mainButton("投票済み")).toBeDisabled());
    });

    it("前日に投票した企画にも投票できない", async () => {
        setJapanNow("2026-10-30T12:00:00");
        saveVotedId("event-1", "group-1", "模擬店", "飲食");
        setJapanNow("2026-10-31T12:00:00");
        await renderVoteView();
        await waitFor(() => expect(mainButton("投票済み")).toBeDisabled());
    });

    it("投票時間外は投票できない", async () => {
        setJapanNow("2026-10-30T10:00:00");
        render(<VoteView {...baseProps} />);
        await waitFor(() => expect(mainButton("投票時間外です")).toBeDisabled());
        expect(screen.getByText("現在は投票時間外です。投票は明大祭の開催時間中にお願いいたします。")).toBeInTheDocument();
    });

    it("明大祭の開催日以外は投票できない", async () => {
        setJapanNow("2026-10-29T12:00:00");
        render(<VoteView {...baseProps} />);
        await waitFor(() => expect(mainButton("投票時間外です")).toBeDisabled());
    });

    it("企画の実施日でなければ投票できない", async () => {
        render(<VoteView {...baseProps} eventDate="10月31日" />);
        await waitFor(() => expect(mainButton("企画実施日ではありません")).toBeDisabled());
        expect(screen.getByText("本日はこの企画の実施日ではありません。投票は企画の実施日にお願いいたします。")).toBeInTheDocument();
    });

    it("プライベートモードでは投票できない", async () => {
        mockedIncognito.mockResolvedValue({ isPrivate: true, browserName: "Safari" });
        await renderVoteView();
        await waitFor(() => expect(mainButton("投票できません")).toBeDisabled());
        expect(screen.getByText("プライベートモードでは投票できません。通常モードでアクセスしてください。")).toBeInTheDocument();
    });

    it("ページを開いたあとに受付時間が終わったら、確認モーダルから投票しても送信しない", async () => {
        setJapanNow("2026-10-30T18:59:00");
        const { user } = await renderVoteView();
        await user.click(mainButton());
        setJapanNow("2026-10-30T19:00:00");
        await user.click(screen.getByRole("button", { name: "投票する ＞" }));

        await waitFor(() => expect(mainButton("投票時間外です")).toBeDisabled());
        expect(mockedVote).not.toHaveBeenCalled();
    });
});

// 要項 (5) 3部門すべてに投票すると抽選券に引き換えられる
describe("投票完了画面と抽選券", () => {
    it("まだ投票していない部門があれば、その部門の企画検索へのリンクを出す", async () => {
        const { user } = await renderVoteView();
        await voteThroughModal(user);
        await screen.findByText("投票完了！");

        expect(screen.getByText("あなたがまだ投票していない部門")).toBeInTheDocument();
        // 企画検索は ?genre=A&genre=B の形で絞り込むので、部門に含まれるジャンルをすべて付けたURLになる
        const searchUrl = (genres: string[]) => `/search?${new URLSearchParams(genres.map((genre) => ["genre", genre])).toString()}`;
        expect(screen.getByRole("link", { name: /エンタメ部門/ })).toHaveAttribute("href", searchUrl(["参加体験", "ゲスト", "展示"]));
        expect(screen.getByRole("link", { name: /パフォーマンス部門/ })).toHaveAttribute("href", searchUrl(["音楽", "ダンス", "パフォーマンス"]));
        expect(screen.queryByRole("link", { name: /抽選券をGET/ })).not.toBeInTheDocument();
    });

    it("3部門目の投票で、抽選券の引換画面へのリンクを出す", async () => {
        saveVotedId("event-a", "group-a", "展示", "エンタメ");
        saveVotedId("event-b", "group-b", "ダンス", "パフォーマンス");
        const { user } = await renderVoteView();
        await voteThroughModal(user);
        await screen.findByText("投票完了！");

        expect(screen.getByText(/すべての部門に投票しました！/)).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /抽選券をGET/ })).toHaveAttribute("href", "/voucher");
        expect(screen.queryByText("あなたがまだ投票していない部門")).not.toBeInTheDocument();
    });

    it("前日に投票した部門は、当日の抽選券の条件に数えない", async () => {
        setJapanNow("2026-10-30T12:00:00");
        saveVotedId("event-a", "group-a", "展示", "エンタメ");
        saveVotedId("event-b", "group-b", "ダンス", "パフォーマンス");
        setJapanNow("2026-10-31T12:00:00");
        const { user } = await renderVoteView();
        await voteThroughModal(user);
        await screen.findByText("投票完了！");

        expect(screen.queryByRole("link", { name: /抽選券をGET/ })).not.toBeInTheDocument();
        const modal = screen.getByText("あなたがまだ投票していない部門").parentElement!;
        expect(within(modal).getByRole("link", { name: /エンタメ部門/ })).toBeInTheDocument();
    });

    it("3部門すべてに投票したあとでも、他の企画には投票できる", async () => {
        saveVotedId("event-a", "group-a", "模擬店", "飲食");
        saveVotedId("event-b", "group-b", "展示", "エンタメ");
        saveVotedId("event-c", "group-c", "ダンス", "パフォーマンス");
        const { user } = await renderVoteView({ id: "event-d", groupId: "group-d" });
        expect(mainButton()).toBeEnabled();
        await voteThroughModal(user);
        await screen.findByText("投票完了！");
        expect(mockedVote).toHaveBeenCalledTimes(1);
    });

    it("どの企画ページからも Meidaisai Championship の説明と抽選券引換画面へ移動できる", async () => {
        await renderVoteView();
        expect(screen.getByRole("link", { name: "Meidaisai Championshipとは" })).toHaveAttribute("href", "/champ");
        expect(screen.getByRole("link", { name: "抽選券引き換え画面" })).toHaveAttribute("href", "/voucher");
    });
});
