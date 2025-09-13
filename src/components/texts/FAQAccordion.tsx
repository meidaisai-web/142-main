"use client"

import {ReactNode, useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import HamburgerTitle from "@/components/base/Hamburger/HamburgerTitle";
import Image from "next/image";
import { div } from "framer-motion/client";


interface AccordionProps {
    children: ReactNode;
    question: ReactNode;
}

export function FAQAccordion({ children, question }: AccordionProps) {
    const [isOpen, setOpen] = useState<boolean>(false);
    return (
        <div className="flex flex-col items-center font-body pt-5">
            <div role="grounp">
                <button
                    type="button"
                    aria-controls="contents"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(!isOpen)}
                    className="px-5 flex justify-between items-center gap-3 rounded-lg shadow-[4px_3px_#64BDEA] bg-white"
                >
                    <div className="flex justify-start items-center text-left">
                        <div className="text-2xl font-bold text-accent">Q.</div>
                        <div className="text-base p-5 sm:pr-0 lg:pr-10">{question}</div>
                    </div>

                    <AnimatePresence>
                        {isOpen ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                <div className="text-2xl font-mediium text-accent">-</div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                <div className="text-2xl font-mediium text-accent">+</div>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </button>
                <div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                <div className="flex justify-start items-center text-left bg-white rounded-xl border-secondary border-4 mt-6 sm:w-[80vw] lg:w-[60vw]">
                                    <div className="text-2xl font-bold text-secondary pl-5">A.</div>
                                    <div className="w-full text-base p-5">{children}</div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}