"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-14 md:mb-20",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      <p className={cn("section-label", align === "center" && "justify-center")}>
        {label}
      </p>
      <h2
        className={cn(
          "section-title",
          dark ? "text-cream-50" : "text-espresso-900 dark:text-cream-50"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-5 max-w-lg text-sm leading-relaxed md:text-base",
            align === "left" && "mx-0",
            dark ? "text-cream-300/70" : "text-espresso-500 dark:text-cream-400"
          )}
        >
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "mt-8 h-px w-16 bg-gradient-to-r from-accent-gold to-transparent",
          align === "center" && "mx-auto"
        )}
      />
    </motion.div>
  );
}
