"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Coffee, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";
import { premiumEase } from "@/lib/motion";

const navLinks = [
  { label: "About", href: "#about", num: "01" },
  { label: "Menu", href: "#menu", num: "02" },
  { label: "Gallery", href: "#gallery", num: "03" },
  { label: "Reviews", href: "#reviews", num: "04" },
  { label: "Visit", href: "#location", num: "05" },
  { label: "Contact", href: "#contact", num: "06" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: premiumEase }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700",
          scrolled
            ? "glass py-0 shadow-[0_4px_30px_-10px_rgba(26,17,8,0.1)] dark:shadow-[0_4px_30px_-10px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 md:px-12 md:py-5">
          <Magnetic strength={0.25}>
            <a href="#" className="group flex items-center gap-2.5">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Coffee
                  className={cn(
                    "h-5 w-5 transition-colors duration-500",
                    scrolled
                      ? "text-espresso-700 dark:text-accent-gold"
                      : "text-cream-50"
                  )}
                  strokeWidth={1.5}
                />
              </motion.div>
              <span
                className={cn(
                  "font-display text-xl font-light tracking-wide transition-colors duration-500",
                  scrolled
                    ? "text-espresso-800 dark:text-cream-100"
                    : "text-cream-50"
                )}
              >
                Artisan
              </span>
            </a>
          </Magnetic>

          <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "group relative py-2 text-[10px] font-medium uppercase tracking-[0.22em] transition-colors duration-500 xl:text-xs",
                    scrolled
                      ? "text-espresso-500 hover:text-espresso-900 dark:text-cream-400 dark:hover:text-cream-50"
                      : "text-cream-100/70 hover:text-cream-50"
                  )}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent-gold transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500",
                  scrolled
                    ? "text-espresso-600 hover:bg-espresso-100/80 dark:text-cream-300 dark:hover:bg-espresso-800/80"
                    : "text-cream-100/80 hover:bg-white/10 hover:text-cream-50"
                )}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {theme === "dark" ? (
                      <Sun className="h-4 w-4" strokeWidth={1.5} />
                    ) : (
                      <Moon className="h-4 w-4" strokeWidth={1.5} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            )}

            <Magnetic strength={0.2} className="hidden md:block">
              <motion.a
                href="#menu"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-500 xl:text-xs",
                  scrolled
                    ? "bg-espresso-800 text-cream-50 hover:bg-espresso-700 dark:bg-cream-100 dark:text-espresso-900 dark:hover:bg-cream-200"
                    : "border border-cream-100/25 bg-white/10 text-cream-50 backdrop-blur-md hover:border-cream-100/50 hover:bg-white/20"
                )}
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Order Now
                <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
            </Magnetic>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-500 lg:hidden",
                scrolled
                  ? "text-espresso-700 dark:text-cream-200"
                  : "text-cream-50"
              )}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </motion.button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[55] bg-espresso-950/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: premiumEase }}
              className="fixed inset-y-0 right-0 z-[60] flex w-full max-w-sm flex-col bg-espresso-950 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-cream-100/5 px-6 py-5">
                <span className="font-display text-2xl font-light text-cream-100">
                  Artisan
                </span>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-cream-100 transition-colors hover:bg-cream-100/5"
                >
                  <X className="h-5 w-5" strokeWidth={1.5} />
                </motion.button>
              </div>

              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
                }}
                className="flex flex-1 flex-col justify-center gap-1 px-6"
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: 40 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, ease: premiumEase },
                      },
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center gap-4 border-b border-cream-100/5 py-5 transition-colors hover:border-accent-gold/30"
                    >
                      <span className="text-[10px] tracking-widest text-accent-gold/60">
                        {link.num}
                      </span>
                      <span className="font-display text-3xl font-light text-cream-100 transition-colors group-hover:text-accent-gold">
                        {link.label}
                      </span>
                      <ArrowUpRight className="ml-auto h-4 w-4 text-cream-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="border-t border-cream-100/5 p-6">
                <a
                  href="#menu"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent-gold py-4 text-xs font-medium uppercase tracking-[0.2em] text-espresso-900 transition-all active:scale-[0.98]"
                >
                  Order Now
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
