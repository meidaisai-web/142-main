import { createClient } from "./client";

export async function voteMeicham(id: string, groupId: string, type: string, ip: string): Promise<boolean> {
    const duplicate = await duplicateMeichamVote(id, ip);
    if (duplicate) {
        return false;
    }
    const supabase = createClient();
    const { error } = await supabase.from('MeidaisaiChampionship').insert({ eventId: id, groupId, type, ip });

    if (error) {
        console.log("Error voting for Meicham:", error.message);
        return false;
    }
    return true;
}

export async function duplicateMeichamVote(eventId: string, ip: string): Promise<boolean> {
    const supabase = createClient();
    const { data } = await supabase.from('MeidaisaiChampionship').select('*').eq('eventId', eventId).eq('ip', ip);
    if (data && data.length > 0) {
        // 最も最新のcreatedAtを持つレコードを取得
        const latestRecord = data.reduce((latest, current) => {
            return new Date(current.createdAt) > new Date(latest.createdAt) ? current : latest;
        });
        const createdAt = new Date(latestRecord.createdAt);
        const toJST = (d: Date) => new Date(d.getTime() + 9 * 60 * 60 * 1000);
        const createdJST = toJST(createdAt);
        const nowJST = toJST(new Date());

        if (
            createdJST.getUTCFullYear() === nowJST.getUTCFullYear() &&
            createdJST.getUTCMonth() === nowJST.getUTCMonth() &&
            createdJST.getUTCDate() === nowJST.getUTCDate()
        ) {
            return true;
        }
    }
    return false;
}