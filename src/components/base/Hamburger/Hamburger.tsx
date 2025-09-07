import { motion } from "framer-motion";
import Link from "next/link";
import HamburgerTitle from "./HamburgerTitle";
import SecondaryButton from "@/components/buttons/SecondaryButton";

interface HamburgerProps {
    isOpen: boolean;
}

export default function Hamburger({ isOpen }: HamburgerProps) {
    return (
        <motion.div
            className="absolute z-40 whitespace-nowrap m-0 bg-primary pt-18 top-0 right-0 origin-top-right"
            animate={isOpen ? "open" : "closed"}
            transition={{
                ease: "linear",
                duration: 0.2
            }}
            variants={{
                open: {
                    width: "100vw",
                    height: "100vh",
                    borderRadius: 0,
                    scale: 1,
                    opacity: 1,
                },
                closed: {
                    width: 0,
                    height: 0,
                    borderRadius: "50%",
                    scale: 0,
                    opacity: 0,
                }
            }}
        >
            <HamburgerSP />
            <HamburgerPC />
        </motion.div>
    )
}

const HamburgerContents: HamburgerSectionProps[] = [
    {
        title: "特集",
        content: [
            { href: "/lottely", label: "明大祭大抽選会" },
            { href: "/matsubara", label: "松原小×明大祭" },
        ]
    },
    {
        title: "明大祭に関わってくださるみなさまへ",
        content: [
            { href: "/company", label: "企業のみなさまへ" },
            { href: "/area", label: "界隈地域のみなさまへ" },
            { href: "/alumni", label: "校友のみなさまへ" },
            { href: "/media", label: "メディアのみなさまへ" },
        ]
    }
]

function HamburgerSP() {
    return (
        <div className="sm:hidden px-10 pt-5">
            <HamburgerTopButton />
        </div>
    )
}

function HamburgerPC() {
    return (
        <div className="hidden sm:block px-16 pt-5">
            <HamburgerTopButton />
            <div className="flex flex-wrap justify-center gap-20 pt-5">
                {HamburgerContents.map((section) => (
                    <HamburgerSection key={section.title} {...section} />
                ))}
            </div>
            <SecondaryButton href="/about" className="mt-20">明大祭について</SecondaryButton>
        </div>
    )
}

function HamburgerTopButton() {
    return (
        <Link href="/" className="text-4xl font-medium hover:border-b-2 border-white">TOP</Link>
    )
}

interface HamburgerSectionProps {
    title: string;
    content: { href: string; label: string; }[];
}

function HamburgerSection({ title, content }: HamburgerSectionProps) {
    return (
        <div>
            <HamburgerTitle>{title}</HamburgerTitle>
            <div className="flex flex-col gap-4 pt-4">
                {content.map((item) => (
                    <Link key={item.href} href={item.href} className="border-b border-transparent hover:border-white w-fit">
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}