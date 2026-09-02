import { AnimatePresence, motion } from "framer-motion";
import HamburgerTitle from "./HamburgerTitle";
import Image from "next/image";
import { List, ListItem } from "@/components/texts/List";
import HamburgerLink from "./HamburgerLink";
import { useId } from "react";

interface HamburgerContent {
    title: string;
    href: string;
}

interface HamburgerAccordionProps {
    isOpen: boolean;
    onClick: () => void;
    title: string;
    hamburgerContent: HamburgerContent[];
    className?: string;
}

export function HamburgerAccordion({ 
    isOpen, 
    onClick, 
    title, 
    hamburgerContent, 
    className = "" 
}: HamburgerAccordionProps) {
    const contentId = useId();
    
    return (
        <div className={className}>
            <div role="group">
                <button
                    type="button"
                    aria-controls={contentId}
                    aria-expanded={isOpen}
                    onClick={onClick}
                    className="w-full flex justify-between items-center gap-3 text-left rounded-sm"
                >
                    <HamburgerTitle>{title}</HamburgerTitle>
                    <motion.div
                        animate={isOpen ? "open" : "closed"}
                        variants={{
                            open: { rotate: 180 },
                            closed: { rotate: 0 },
                        }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="flex-shrink-0"
                    >
                        <Image
                            src="/images/svg/triangle-accent.svg"
                            alt={isOpen ? "折りたたむ" : "展開する"}
                            width={30}
                            height={30}
                            className="h-4 w-4"
                        />
                    </motion.div>
                </button>
                <AnimatePresence mode="wait">
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
                                <List>
                                    {hamburgerContent.map((item: HamburgerContent, index: number) => (
                                        <ListItem key={`${item.href}-${index}`}>
                                            <HamburgerLink href={item.href}>
                                                {item.title}
                                            </HamburgerLink>
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}