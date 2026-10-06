type MovieProps = {
    href: string;
}

export default function Movie({
    href
}: MovieProps) {
    return (
        <div className="flex justify-center">
            <div className="relative w-full max-w-2xl mt-5 aspect-video">
                <iframe
                    src={href}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="absolute top-0 left-0 w-full h-full"
                >
                </iframe>
            </div>
        </div>
    )
}
