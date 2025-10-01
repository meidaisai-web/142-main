import Image from "next/image"

type ProjectProps = {
    title: string;
    description: string;
    image: string;
    alt : string;
    tags: string[];
}

export default function Project({ title, description, image, alt, tags }: ProjectProps) {
    return (
            <div className="bg-white rounded-2xl p-4 flex flex-row md:flex-col items-center gap-6 border-7 border-accent shadow-[10px_10px_0px_0px_#3571B8] w-full md:w-[380px]">
                <div className="w-1/2 md:w-full flex justify-center">
                    <Image src={image} alt={alt} width={200} height={200} className="rounded-lg object-cover" />
                </div>
                <div className="flex-1 md:flex-none md:w-full flex flex-col gap-4">
                    <h2 className="text-xl text-black font-bold">{title}</h2>
                    <p className="text-base text-black">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span key={tag} className="bg-secondary rounded-full px-3 py-1 text-sm font-semibold">
                                {`#${tag}`}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
    );
}
