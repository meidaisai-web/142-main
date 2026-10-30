import { beforeEach, describe, expect, it, vi } from "vitest";
import { addVoteData } from "./fightVoteAction";
import { createClient } from "./client";

vi.mock("./client", () => ({
    createClient: vi.fn(),
}));

const mockedCreateClient = vi.mocked(createClient);
const insert = vi.fn();
const from = vi.fn(() => ({ insert }));

beforeEach(() => {
    insert.mockReset().mockResolvedValue({ error: null });
    from.mockClear();
    mockedCreateClient.mockReset().mockReturnValue({ from } as unknown as ReturnType<typeof createClient>);
});

describe("addVoteData", () => {
    it("FightVote テーブルに 3部門の投票を first / second / last として保存する", async () => {
        await addVoteData(1, 0, 1);

        expect(from).toHaveBeenCalledWith("FightVote");
        expect(insert).toHaveBeenCalledTimes(1);
        expect(insert).toHaveBeenCalledWith({ first: 1, second: 0, last: 1 });
    });

    it("保存に成功したら true を返す", async () => {
        await expect(addVoteData(0, 0, 0)).resolves.toBe(true);
    });

    it("保存に失敗したら false を返し、エラーをログに出す", async () => {
        const error = { message: "permission denied" };
        insert.mockResolvedValue({ error });
        const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

        await expect(addVoteData(1, 1, 1)).resolves.toBe(false);
        expect(consoleError).toHaveBeenCalledWith("Failed to add fight vote data:", error);

        consoleError.mockRestore();
    });
});
