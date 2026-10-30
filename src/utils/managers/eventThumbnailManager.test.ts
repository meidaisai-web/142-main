import { describe, expect, it } from "vitest";
import { getEventThumbnailPath } from "./eventThumbnailManager";

describe("企画画像の縮小版の場所", () => {
    const imageUrl = "https://example.supabase.co/storage/v1/object/public/master-data-142/133.webp?t=1786628810397";

    it("一覧用と詳細用で、幅の違うファイルを指す", () => {
        expect(getEventThumbnailPath(imageUrl, "small")).toBe("/images/events/133-1786628810397-240.webp");
        expect(getEventThumbnailPath(imageUrl, "large")).toBe("/images/events/133-1786628810397-600.webp");
    });

    it("画像を差し替えて ?t= が変わると、別のファイルを指す（古い縮小版を出さない）", () => {
        const replaced = imageUrl.replace("1786628810397", "1790000000000");
        expect(getEventThumbnailPath(replaced, "small")).toBe("/images/events/133-1790000000000-240.webp");
    });

    it("Supabase Storage 以外の画像や、画像がない企画は縮小版を使わない", () => {
        expect(getEventThumbnailPath("/images/svg/no-image.svg", "small")).toBeNull();
        expect(getEventThumbnailPath("https://example.com/foo.png", "small")).toBeNull();
        expect(getEventThumbnailPath("", "small")).toBeNull();
        expect(getEventThumbnailPath(null, "small")).toBeNull();
    });
});
