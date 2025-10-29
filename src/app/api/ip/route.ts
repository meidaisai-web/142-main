// app/api/ip/route.ts
export const runtime = 'edge' // Cloudflare対応

export async function GET(request: Request) {
    const ip =
        request.headers.get('cf-connecting-ip') ||
        request.headers.get('x-forwarded-for') ||
        '不明'

    return new Response(JSON.stringify({ ip }), {
        headers: { 'Content-Type': 'application/json' },
    })
}