import { createClient } from "./client";

export async function logEvent(eventName: string, eventData: string) {
    const supabase = createClient();
    const { data, error } = await supabase.from('Analytics').insert({
        eventName: eventName,
        eventData: eventData
    })
    if (error) {
        console.error('Error logging event:', error);
    } else {
        console.log('Event logged successfully:', data);
    }
}