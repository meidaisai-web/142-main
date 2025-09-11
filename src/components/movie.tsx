import { div } from "framer-motion/client";

type MovieProps = {
    href: string;
}

export default function Movie ({
    href
}: MovieProps) { 
    return (
        <div className="flex justify-center ml-5 mr-5">
            <iframe 
                width="560" height="315" 
                src={href} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-[80vw] h-[30vh] sm:w-[70vh] sm:h-[50vh]"
            >
            </iframe>
        </div>
    )
}
