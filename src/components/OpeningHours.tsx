"use client";

import { motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/motion";

const hours = [
  { day: "Monday – Friday", time: "7:00 AM – 8:00 PM" },
  { day: "Saturday", time: "8:00 AM – 9:00 PM" },
  { day: "Sunday", time: "8:00 AM – 6:00 PM" },
];

export function OpeningHours() {
  return (
    <Section id="hours" className="bg-cream-100/50 dark:bg-espresso-900/30">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:gap-16 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={slideInLeft}
        >
          <p className="section-label">Opening Hours</p>
          <h2 className="section-title text-espresso-900 dark:text-cream-50">
            We&apos;re here when
            <br />
            <span className="bg-gradient-to-r from-accent-gold to-accent-copper bg-clip-text italic text-transparent">
              you need us
            </span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-espresso-500 dark:text-cream-400 sm:mt-6">
            Start your morning with us or unwind after a long day. Our doors are
            open seven days a week, serving freshly roasted coffee from dawn
            till dusk.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={slideInRight}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-6 sm:p-8 md:p-10"
        >
          <div className="mb-8 flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-gold/10 transition-colors duration-500 hover:bg-accent-gold/20"
            >
              <Clock className="h-4 w-4 text-accent-gold" strokeWidth={1.5} />
            </motion.div>
            <h3 className="font-display text-xl text-espresso-800 dark:text-cream-100 sm:text-2xl">
              Weekly Schedule
            </h3>
          </div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="space-y-1"
          >
            {hours.map((item) => (
              <motion.li
                key={item.day}
                variants={fadeInUp}
                className="group flex items-center justify-between rounded-xl px-3 py-4 transition-all duration-500 hover:bg-espresso-100/60 dark:hover:bg-espresso-800/40"
              >
                <span className="text-sm font-medium text-espresso-700 transition-colors duration-500 group-hover:text-espresso-900 dark:text-cream-200 dark:group-hover:text-cream-50">
                  {item.day}
                </span>
                <span className="text-sm text-espresso-500 transition-colors duration-500 group-hover:text-accent-gold dark:text-cream-400">
                  {item.time}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group mt-8 cursor-default rounded-xl border border-accent-sage/20 bg-accent-sage/5 px-5 py-4 transition-all duration-500 hover:border-accent-sage/40 hover:bg-accent-sage/10"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-accent-sage transition-transform duration-500 group-hover:rotate-12" />
              <p className="text-[10px] uppercase tracking-widest text-accent-sage sm:text-xs">
                Happy Hour
              </p>
            </div>
            <p className="mt-1.5 text-sm text-espresso-600 dark:text-cream-300">
              20% off all espresso drinks, 3:00 – 5:00 PM weekdays
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
