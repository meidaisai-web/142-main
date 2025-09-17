import { MasterData } from "../models/MasterData";
import { createClient } from "./client";

export async function getAllMasterDatas(key: { page: number, limit: number }): Promise<MasterData[]> {
    const supabase = createClient();
    const start = key.limit * key.page;
    const end = start + key.limit - 1;
    const { data, error } = await supabase.from('MasterData').select('*').range(start, end);
    if (error) {
        throw new Error(`Error fetching master data: ${error.message}`);
    }
    return data as MasterData[];
}

export async function getUniqueMasterData(id: string): Promise<MasterData> {
    const supabase = createClient();
    const { data, error } = await supabase.from('MasterData').select('*').eq('id', id).single();
    if (error) {
        throw new Error(`Error fetching unique master data: ${error.message}`);
    }
    return data as MasterData;
}