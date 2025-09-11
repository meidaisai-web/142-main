export const googleTagManagerId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || '';

// バナーのクリック時にデータを送信
export const sendClickBanner = (
    id: string,
): void => {
    window.dataLayer?.push({
        event: 'click_banner',
        click_banner: id,
    });
};