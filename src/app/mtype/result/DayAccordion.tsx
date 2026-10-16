"use client"

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export interface Project {
    id: string;
    name: string;
    group: string;
}

interface DayAccordionProps {
    date: string;
    // 開催日（YYYY-MM-DD）。当日ならデフォルトで開く
    isoDate: string;
    projects: Project[];
}

export default function DayAccordion({ date, isoDate, projects }: DayAccordionProps) {
    const [isOpen, setOpen] = useState<boolean>(false);

    // ハイドレーションのずれを避けるため、マウント後に日本時間の今日と比較する
    useEffect(() => {
        const today = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" }).format(new Date());
        if (today === isoDate) setOpen(true);
    }, [isoDate]);

    return (
        <div className="w-[80vw] lg:w-[60vw] font-body">
            <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(!isOpen)}
                className="flex w-full items-center justify-between rounded-full bg-primary px-6 py-3 text-white shadow-md"
            >
                <span className="text-lg font-bold tracking-wider">{date}</span>
                <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                >
                    <path d="M6 9l6 6 6-6" />
                </motion.svg>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                        className="flex flex-col gap-3"
                    >
                        {projects.length === 0 && <li className="pt-3 text-center text-sm text-gray-500">準備中</li>}
                        {projects.map((project, i) => (
                            <li key={project.id} className={i === 0 ? "mt-3" : ""}>
                                <Link
                                    href={`/search/${project.id}`}
                                    className="flex items-center gap-3 rounded-full border-2 border-primary bg-white px-5 py-2 transition-colors active:bg-gray-100 hover:bg-gray-50"
                                >
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">{i + 1}</span>
                                    <div className="flex flex-1 flex-col">
                                        <span className="text-sm font-bold text-black">{project.name}</span>
                                        <span className="text-xs text-gray-600">{project.group}</span>
                                    </div>
                                    <span className="h-2.5 w-2.5 shrink-0 rotate-[-135deg] border-b-2 border-l-2 border-primary mr-3" aria-hidden />
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    )
}
