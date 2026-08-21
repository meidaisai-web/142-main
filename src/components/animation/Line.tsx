"use client";

import { motion } from "framer-motion";

type LineProps = {
  path: string;
  className?: string;
  duration?: number;
  delay?: number;
};

export default function Line({
  path,
  className = "",
  duration = 2,
  delay = 0,
}: LineProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1000 300"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d={path}
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        pathLength={1}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{
          duration,
          delay,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}