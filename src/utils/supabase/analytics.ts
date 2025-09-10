import { createClient } from "./client";

type logEventProps = {
    eventName: 'click_banner'
    eventData: string,
    option?: string
}

export async function logEvent({ eventName, eventData, option }: logEventProps) {
    const supabase = createClient();
    const { error } = await supabase.from('Analytics').insert({
        eventName,
        eventData,
        option
    })

    if (error) {
        console.error('Error logging event:', error.message);
        return false;
    } else {
        console.log('Event logged successfully:', { eventName, eventData, option });
        return true;
    }
}