import { createClient } from "./client";

export async function addVoteData(selectedVote1: number, selectedVote2: number, selectedVote3: number): Promise<boolean> {
    const supabase = createClient();
    const { error } = await supabase.from('FightVote').insert({ first: selectedVote1, second: selectedVote2, last: selectedVote3 });
    if (error) {
        console.error('Failed to add fight vote data:', error);
        return false;
    }
    return true;
}