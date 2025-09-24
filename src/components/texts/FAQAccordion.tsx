"use client"

import {ReactNode, useState} from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AccordionProps {
    children: ReactNode;
    question: ReactNode;
}

export function FAQAccordion({ children, question }: AccordionProps) {
    const [isOpen, setOpen] = useState<boolean>(false);
    return (
        <div className="flex flex-col items-center justify-center font-body pt-5">
            <div role="group">
                <button
                    type="button"
                    aria-controls="contents"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(!isOpen)}
                    className="flex justify-center items-center rounded-xl"
                >
                    <div className="flex pl-5 items-center text-left bg-white rounded-xl border-secondary border-4 w-[80vw] lg:w-[60vw] gap-3">
                        <div className="text-2xl font-bold text-secondary">Q.</div>
                        <div className="text-base text-black font-bold p-5 sm:pr-0 lg:pr-10 flex-1">{question}</div>
                        <div className="pr-5">
                            <AnimatePresence>
                                {isOpen ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <div className="text-5xl text-accent">-</div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <div className="text-4xl text-accent">+</div>
                                    </motion.div>
                                )}

                            </AnimatePresence>
                        </div>
                    </div>
                </button>
                <div className="flex items-center justify-center">
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, y: -10}}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -10 }}
                                transition={{
                                    duration: 0.25,
                                    ease: "easeInOut"
                                }}
                                style={{ overflow: "hidden" }}
                            >
                                <div className="flex justify-center items-center text-left bg-white rounded-xl border-accent border-4 mt-6 w-[80vw] lg:w-[60vw]">
                                    <div className="text-2xl font-bold text-accent pl-5">A.</div>
                                    <div className="w-full text-base text-black font-semibold p-5">{children}</div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}