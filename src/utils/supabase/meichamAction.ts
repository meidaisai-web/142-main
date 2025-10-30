import { createClient } from "./client";

export async function voteMeicham(id: string, groupId: string, type: string): Promise<boolean> {
    const supabase = createClient();
    const { error } = await supabase.from('MeidaisaiChampionship').insert({ eventId: id, groupId, type, ip: '' });

    if (error) {
        console.log("Error voting for Meicham:", error.message);
        return false;
    }
    return true;
}