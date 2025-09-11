type MovieProps = {
    href: string;
}

export default function Movie ({href}: MovieProps) { 
    return (
        <iframe width="560" height="315" src={href} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    )
}
