"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/ui/Section";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/motion";

export function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <Section id="about" className="overflow-hidden bg-cream-50 dark:bg-espresso-950">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={slideInLeft}
        >
          <p className="section-label">About Us</p>
          <h2 className="section-title text-espresso-900 dark:text-cream-50">
            Where tradition
            <br />
            meets{" "}
            <span className="bg-gradient-to-r from-accent-gold to-accent-copper bg-clip-text italic text-transparent">
              innovation
            </span>
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-espresso-600 dark:text-cream-300/70 sm:mt-8 sm:space-y-5 sm:text-base">
            <p>
              At Artisan, we believe coffee is more than a beverage — it&apos;s an
              experience. Founded in the heart of Istanbul, our roastery sources
              the finest single-origin beans from Ethiopia, Colombia, and
              Guatemala.
            </p>
            <p>
              Every batch is roasted in small quantities to preserve the unique
              character of each origin. Our baristas are craftsmen, trained to
              extract the perfect cup with precision and passion.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="mt-10 grid grid-cols-3 gap-4 sm:mt-12 sm:gap-8"
          >
            {[
              { value: "12+", label: "Origin Farms" },
              { value: "50K", label: "Cups Served" },
              { value: "4.9", label: "Rating" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="group cursor-default rounded-xl p-3 transition-colors duration-500 hover:bg-espresso-100/50 dark:hover:bg-espresso-800/30 sm:p-4"
              >
                <p className="font-display text-2xl font-light text-espresso-800 transition-colors duration-500 group-hover:text-accent-gold dark:text-cream-100 sm:text-3xl md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-widest text-espresso-400 dark:text-cream-400 sm:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          ref={imageRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={slideInRight}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.6 }}
            className="premium-card relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(26,17,8,0.25)] dark:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]"
          >
            <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
              <Image
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80"
                alt="Barista crafting pour-over coffee"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ y: -6, rotate: -2 }}
            className="absolute -bottom-4 -left-2 aspect-square w-28 overflow-hidden rounded-xl border-4 border-cream-50 shadow-2xl dark:border-espresso-950 sm:-bottom-6 sm:-left-4 sm:w-36 md:w-44 lg:-left-6 lg:w-48"
          >
            <Image
              src="https://images.unsplash.com/photo-1514432324607-09f969784a92?w=400&q=80"
              alt="Freshly roasted coffee beans"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              sizes="192px"
            />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
