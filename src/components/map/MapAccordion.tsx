import { MapDataType } from "@/utils/models/MapDataType";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useId } from "react";

interface MapAccordionProps {
    isOpen: boolean;
    onClick: () => void;
    title: string;
    className?: string;
    children?: React.ReactNode;
}

export function MapAccordion({
    isOpen,
    onClick,
    title,
    children,
    className = ""
}: MapAccordionProps) {
    const contentId = useId();
    return (
        <div className={className}>
            <div role="group">
                <button
                    type="button"
                    aria-controls={contentId}
                    aria-expanded={isOpen}
                    onClick={onClick}
                    className="w-full flex justify-between items-center gap-3 text-left border-b-2 border-white"
                >
                    <h3 className="font-semibold text-xl">{title}</h3>
                    <motion.div
                        animate={isOpen ? "open" : "closed"}
                        variants={{
                            open: { rotate: 180 },
                            closed: { rotate: 0 },
                        }}
                        transition={{ duration: 0.2, ease: "linear" }}
                        className="flex-shrink-0"
                    >
                        <Image
                            src="/images/svg/triangle-white.svg"
                            alt={isOpen ? "折りたたむ" : "展開する"}
                            width={13}
                            height={13}
                            className="h-3 w-3"
                        />
                    </motion.div>
                </button>
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            id={contentId}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                                duration: 0.25,
                                ease: "easeInOut",
                                opacity: { duration: 0.15 }
                            }}
                            style={{ overflow: "hidden" }}
                        >
                            <div className="pt-4">
                                {children}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}