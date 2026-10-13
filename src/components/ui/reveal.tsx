"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion } from "motion/react";

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function Reveal({
  as = "div",
  delay = 0,
  className,
  children,
}: {
  as?: "div" | "li";
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
    >
      {children}
    </Component>
  );
}
