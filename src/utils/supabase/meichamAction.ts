import { MeichamCategory } from "../models/MeichamGenre";
import { createClient } from "./client";

export async function voteMeicham(id: string, groupId: string, type: string, category: MeichamCategory, ip: string): Promise<boolean> {
    const supabase = createClient();
    const { error } = await supabase.from('MeidaisaiChampionship142').insert({ eventId: id, groupId, type, category, ip });

    if (error) {
        console.log("Error voting for Meicham:", error.message);
        return false;
    }
    return true;
}
