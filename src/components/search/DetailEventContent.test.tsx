import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import DetailEventContent from "./DetailEventContent";
import type VoteView from "./VoteView";
import { getUniqueMasterData } from "@/utils/supabase/masterDataAction";
import type { MasterData } from "@/utils/models/MasterData";

vi.mock("@/utils/supabase/masterDataAction", () => ({
    getUniqueMasterData: vi.fn(),
}));

// VoteView の中身は VoteView.test.tsx で確認するので、ここでは表示されたかと渡された部門だけを見る
vi.mock("./VoteView", () => ({
    default: ({ category }: ComponentProps<typeof VoteView>) => (
        <div data-testid="vote-view">{category ?? "投票対象外"}</div>
    ),
}));

vi.mock("next/image", () => ({
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    default: (props: ComponentProps<"img">) => <img {...props} />,
}));

vi.mock("next/link", () => ({
    default: ({ href, children, ...rest }: ComponentProps<"a">) => <a href={href} {...rest}>{children}</a>,
}));

const mockedGetData = vi.mocked(getUniqueMasterData);

function masterData(overrides: Partial<MasterData> = {}): MasterData {
    return {
        id: 1,
        groupId: "group-1",
        projectId: 1,
        imageUrl: "",
        eventName: "たこ焼き屋",
        groupName: "明治サークル",
        catchphrase: "おいしい",
        eventContent: "たこ焼きを販売します",
        genre: "模擬店",
        icons: [],
        location: "第一校舎",
        eventDate: "全日",
        xAccount: "",
        instagramAccount: "",
        tiktokAccount: "",
        youtubeAccount: "",
        homepageUrl: "",
        searchKeywords: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        type: "模擬店",
        enableShooting: false,
        ticket: "",
        foodIcons: [],
        otherIcons: [],
        menuItems: [],
        qrcode: "",
        championshipJoin: true,
        ...overrides,
    };
}

// 企画データの読み込みが終わるまで待つ
async function renderDetail(data: MasterData) {
    mockedGetData.mockResolvedValue(data);
    render(<DetailEventContent id={String(data.id)} />);
    await screen.findByText(data.eventName);
}

beforeEach(() => {
    mockedGetData.mockReset();
});

// 明大祭実行委員会の企画は Meidaisai Championship の投票対象にしない
describe("明大祭実行委員会の企画", () => {
    it.each([
        "明大祭実行委員会",
        "第142回明大祭実行委員会",
        "第142回明大祭実行委員会 広報局",
    ])("団体名が「%s」の企画には投票欄を出さない", async (groupName) => {
        await renderDetail(masterData({ groupName, genre: "展示", championshipJoin: true }));
        expect(screen.queryByTestId("vote-view")).not.toBeInTheDocument();
    });
});

describe("参加団体の企画", () => {
    it("Championship に参加している企画には、ジャンルに応じた部門で投票欄を出す", async () => {
        await renderDetail(masterData({ genre: "模擬店", championshipJoin: true }));
        expect(screen.getByTestId("vote-view")).toHaveTextContent("飲食");
    });

    it.each([
        ["Championship に参加していない", { championshipJoin: false }],
        ["参加の有無が未設定の", { championshipJoin: undefined }],
        ["どの部門にも当てはまらないジャンルの", { genre: "その他" }],
    ])("%s企画は投票対象外として投票欄を出す", async (_, overrides) => {
        await renderDetail(masterData(overrides));
        expect(screen.getByTestId("vote-view")).toHaveTextContent("投票対象外");
    });
});
