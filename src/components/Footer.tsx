"use client";

import { Coffee, Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const footerLinks = {
  explore: [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
  ],
  visit: [
    { label: "Location", href: "#location" },
    { label: "Hours", href: "#hours" },
    { label: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-espresso-200/30 bg-espresso-950 dark:border-espresso-800">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-accent-gold/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 md:px-12 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              className="group inline-flex items-center gap-2.5"
            >
              <Coffee
                className="h-5 w-5 text-accent-gold transition-transform duration-500 group-hover:rotate-12"
                strokeWidth={1.5}
              />
              <span className="font-display text-2xl font-light tracking-wide text-cream-100">
                Artisan
              </span>
            </motion.a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-400">
              Craft coffee, made with passion. Single-origin beans, small-batch
              roasting, and a space designed for moments that matter.
            </p>

            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-cream-100/10 text-cream-300 transition-all duration-500 hover:border-accent-gold/50 hover:bg-accent-gold/10 hover:text-accent-gold hover:shadow-[0_8px_24px_-8px_rgba(196,165,116,0.4)]"
                >
                  <social.icon className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([key, links]) => (
            <motion.div key={key} variants={fadeInUp}>
              <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.25em] text-cream-300 sm:text-xs">
                {key === "explore" ? "Explore" : "Visit"}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="link-hover group inline-flex items-center gap-1 text-sm text-cream-400 transition-colors duration-500 hover:text-accent-gold"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream-100/10 pt-8 sm:mt-16 md:flex-row"
        >
          <p className="text-[10px] text-cream-500 sm:text-xs">
            &copy; {new Date().getFullYear()} Artisan Coffee. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="link-hover text-[10px] text-cream-500 transition-colors duration-500 hover:text-cream-300 sm:text-xs"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
