"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const reviews = [
  {
    name: "Elif Yılmaz",
    role: "Regular Customer",
    rating: 5,
    text: "The flat white here is unmatched. You can taste the care in every cup. The space itself feels like a warm embrace — minimalist, elegant, and inviting.",
  },
  {
    name: "James Morrison",
    role: "Coffee Enthusiast",
    rating: 5,
    text: "I've traveled the world for coffee, and Artisan ranks among the best. Their single-origin espresso is a revelation. The baristas truly know their craft.",
  },
  {
    name: "Ayşe Demir",
    role: "Food Blogger",
    rating: 5,
    text: "From the croissants to the matcha latte, everything is exceptional. The attention to detail in both taste and presentation is what sets this place apart.",
  },
];

export function Reviews() {
  return (
    <Section
      id="reviews"
      className="relative overflow-hidden bg-espresso-900 dark:bg-espresso-900/50"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-accent-gold/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-accent-copper/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Customer Reviews"
          dark
          title={
            <>
              Loved by our
              <br />
              <span className="bg-gradient-to-r from-accent-gold to-cream-200 bg-clip-text italic text-transparent">
                community
              </span>
            </>
          }
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mobile-scroll md:grid md:grid-cols-3"
        >
          {reviews.map((review, index) => (
            <motion.blockquote
              key={review.name}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mobile-scroll-item group relative overflow-hidden rounded-2xl border border-cream-100/10 bg-espresso-800/40 p-6 backdrop-blur-md transition-all duration-500 hover:border-accent-gold/30 hover:bg-espresso-800/60 hover:shadow-[0_20px_60px_-20px_rgba(196,165,116,0.15)] sm:p-8"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent-gold/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-accent-gold/10" />
              <Quote
                className="relative mb-4 h-7 w-7 text-accent-gold/30 transition-colors duration-500 group-hover:text-accent-gold/50 sm:h-8 sm:w-8"
                strokeWidth={1}
              />
              <p className="relative mb-6 text-xs leading-relaxed text-cream-200/75 transition-colors duration-500 group-hover:text-cream-100/90 sm:text-sm">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="relative mb-4 flex items-center gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 + index * 0.1 }}
                  >
                    <Star
                      className="h-3 w-3 fill-accent-gold text-accent-gold transition-transform duration-300 group-hover:scale-110 sm:h-3.5 sm:w-3.5"
                      strokeWidth={0}
                    />
                  </motion.div>
                ))}
              </div>
              <footer className="relative">
                <p className="text-sm font-medium text-cream-100">{review.name}</p>
                <p className="text-xs text-cream-400">{review.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-[10px] uppercase tracking-widest text-cream-500/60 sm:hidden">
          Swipe for more →
        </p>
      </div>
    </Section>
  );
}
