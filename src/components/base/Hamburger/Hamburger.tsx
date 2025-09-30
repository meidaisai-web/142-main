import { motion } from "framer-motion";
import Link from "next/link";
import HamburgerTitle from "./HamburgerTitle";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import HamburgerLink from "./HamburgerLink";
import { HamburgerAccordion } from "./HamburgerAccordion";
import { useState } from "react";

interface HamburgerProps {
    isOpen: boolean;
}

export default function Hamburger({ isOpen }: HamburgerProps) {
    return (
        <motion.div
            className="absolute z-40 whitespace-nowrap m-0 bg-primary pt-18 top-0 right-0 origin-top-right"
            initial="closed"
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

const hamburgerContents: HamburgerSectionProps[] = [
    {
        title: "特集",
        content: [
            { href: "/lottery", label: "明大祭大抽選会" },
            { href: "/matsubara", label: "松原小学校×明大祭" },
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
    const [openId, setOpenId] = useState<number | null>(null); // 開いているアコーディオンのIDを管理

    const toggleAccordion = (id: number) => {
        setOpenId(prev => (prev === id ? null : id)); // 開閉のトグル
    };
    return (
        <div className="sm:hidden px-10 pt-5">
            <HamburgerTopButton />
            <div className="flex flex-col gap-10 py-15">
                {hamburgerContents.map((section) => (
                    <HamburgerAccordion
                        key={section.title}
                        isOpen={openId === hamburgerContents.indexOf(section)}
                        onClick={() => toggleAccordion(hamburgerContents.indexOf(section))}
                        title={section.title}
                        hamburgerContent={section.content.map(item => ({ title: item.label, href: item.href }))}
                    />
                ))}
            </div>
            <SecondaryButton href="/about" className="mb-10">明大祭とは</SecondaryButton>
        </div>
    )
}

function HamburgerPC() {
    return (
        <div className="hidden sm:block px-16 pt-5">
            <HamburgerTopButton />
            <div className="flex flex-wrap justify-center gap-20 pt-5">
                {hamburgerContents.map((section) => (
                    <HamburgerSection key={section.title} {...section} />
                ))}
            </div>
            <SecondaryButton href="/about" className="mt-20">明大祭とは</SecondaryButton>
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
                    <HamburgerLink key={item.href} href={item.href}>{item.label}</HamburgerLink>
                ))}
            </div>
        </div>
    )
}