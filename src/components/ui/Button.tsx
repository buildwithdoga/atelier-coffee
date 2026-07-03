"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const variants = {
  primary:
    "bg-espresso-800 text-cream-50 shadow-[0_4px_24px_-4px_rgba(26,17,8,0.4)] hover:bg-espresso-700 hover:shadow-[0_8px_32px_-4px_rgba(26,17,8,0.5)] dark:bg-cream-100 dark:text-espresso-900 dark:hover:bg-cream-200 dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)]",
  secondary:
    "bg-accent-gold text-espresso-900 shadow-[0_4px_24px_-4px_rgba(196,165,116,0.5)] hover:bg-accent-copper hover:text-cream-50 hover:shadow-[0_8px_32px_-4px_rgba(184,115,51,0.4)]",
  outline:
    "border border-espresso-300/80 bg-transparent text-espresso-800 hover:border-espresso-800 hover:bg-espresso-800 hover:text-cream-50 dark:border-cream-300/30 dark:text-cream-100 dark:hover:border-cream-100 dark:hover:bg-cream-100 dark:hover:text-espresso-900",
  ghost:
    "bg-transparent text-espresso-700 hover:bg-espresso-100/80 dark:text-cream-200 dark:hover:bg-espresso-800/80",
};

const sizes = {
  sm: "px-5 py-2.5 text-[10px] tracking-[0.25em] sm:text-xs",
  md: "px-8 py-3.5 text-xs tracking-[0.2em] sm:text-sm",
  lg: "px-10 py-4 text-xs tracking-[0.25em] sm:text-sm sm:tracking-[0.2em]",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium uppercase transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  const shine = (
    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03, y: -3 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={classes}
      >
        {shine}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={classes}
      {...props}
    >
      {shine}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
