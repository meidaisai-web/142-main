import Image from "next/image";
type RainbowProps = {
    className?: string;
}

export default function Rainbow({ className }: RainbowProps) {
    return (
        <div className={`${className}`}>
            <Image src={"/images/svg/Rainbow-small.svg"} alt={""} width={180} height={180} className="w-full sm:hidden" />
            <Image src={"/images/svg/Rainbow.svg"} alt={""} width={500} height={500} className="w-full hidden sm:block" />
        </div>
        )
    }
    