import { motion } from "framer-motion";
import Link from "next/link";
import HamburgerTitle from "./HamburgerTitle";
import HamburgerLink from "./HamburgerLink";
import { HamburgerAccordion } from "./HamburgerAccordion";
import { useState } from "react";

interface HamburgerProps {
    isOpen: boolean;
}

export default function Hamburger({ isOpen }: HamburgerProps) {
    return (
        <motion.div
            className="absolute z-40 whitespace-nowrap m-0 bg-secondary-50 pt-18 top-0 right-0 origin-top-right overflow-scroll"
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
        title: "ご来場のみなさまへ",
        content: [
            { href: "/about", label: "明大祭とは" },
            { href: "/announce", label: "ご来場のみなさまへのお願い" },
            { href: "/access", label: "アクセス" }
        ]
    },
]

const forOutside = [
    {
        title: "関係者のみなさまへ",
        content: [
            { href: "/company", label: "企業のみなさまへ" },
            { href: "/area", label: "界隈地域のみなさまへ" },
            { href: "/alumni", label: "校友・父母のみなさまへ" },
            { href: "/media", label: "メディアのみなさまへ" },

        ]
    },

     {
        title: "コラボ企画",
        content: [
            { href: "/matsubara", label: "松原小学校×明大祭" }
        ]
    },

     {
        title: "実行委員会企画",
        content: [
            { href: "/ippan", label: "一般明大生向け本祭前企画" }
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
                {hamburgerContents.map((section, index) => (
                    <HamburgerAccordion
                        key={section.title}
                        isOpen={openId === index}
                        onClick={() => toggleAccordion(index)}
                        title={section.title}
                        hamburgerContent={section.content.map(item => ({ title: item.label, href: item.href }))}
                    />
                ))}
                <div className="flex flex-col gap-10">
                    {forOutside.map((section, index) => (
                        <HamburgerAccordion
                            key={section.title}
                            isOpen={openId === hamburgerContents.length + index}
                            onClick={() => toggleAccordion(hamburgerContents.length + index)}
                            title={section.title}
                            hamburgerContent={section.content.map(item => ({ title: item.label, href: item.href }))}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

function HamburgerPC() {
    return (
        <div className="hidden sm:block px-16 pt-5">
            <HamburgerTopButton />
            <div className="flex flex-wrap gap-x-20">
                {hamburgerContents.map((section) => (
                    <HamburgerSection key={section.title} {...section} />
                ))}
                <div className="flex gap-x-20">
                    {forOutside.map((section) => (
                        <HamburgerSection key={section.title} {...section} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function HamburgerTopButton() {
    return (
        <Link href="/" className="text-4xl font-medium hover:border-b-2 border-accent-700">TOP</Link>
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