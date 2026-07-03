"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { heroStagger, heroItem } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0 scale-110" style={{ y: imageY }}>
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80"
          alt="Premium craft coffee being poured"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/80 via-espresso-950/45 to-espresso-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(13,8,4,0.4)_100%)]" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-accent-gold/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -right-10 bottom-1/4 h-96 w-96 rounded-full bg-accent-copper/10 blur-3xl"
        />
      </div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-5 pt-24 text-center sm:px-8 md:px-12 md:pt-0"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          <motion.p
            variants={heroItem}
            className="mb-5 text-[10px] font-medium uppercase tracking-[0.4em] text-accent-gold sm:mb-6 sm:text-xs sm:tracking-[0.35em]"
          >
            Est. 2018 · Istanbul
          </motion.p>

          <motion.h1
            variants={heroItem}
            className="font-display text-[2.75rem] font-light leading-[1.02] tracking-tight text-cream-50 sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[1.05]"
          >
            Craft Coffee.
            <br />
            <span className="bg-gradient-to-r from-cream-100 via-cream-200/90 to-accent-gold/80 bg-clip-text italic text-transparent">
              Made with Passion.
            </span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-cream-200/65 sm:mt-8 sm:max-w-lg sm:text-base md:text-lg"
          >
            Single-origin beans, meticulously roasted. Every cup tells a story of
            craftsmanship and care.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-10 flex w-full flex-col items-stretch gap-3 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <Magnetic className="w-full sm:w-auto">
              <Button
                href="#menu"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Menu
              </Button>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <Button
                href="#about"
                variant="outline"
                size="lg"
                className="w-full border-cream-100/25 text-cream-50 backdrop-blur-sm hover:border-cream-50 hover:bg-cream-50 hover:text-espresso-900 sm:w-auto"
              >
                Our Story
              </Button>
            </Magnetic>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream-100/50 transition-colors hover:text-cream-50 sm:bottom-10"
        aria-label="Scroll to about section"
      >
        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-cream-100/20 pt-2"
        >
          <ArrowDown className="h-3 w-3" strokeWidth={1.5} />
        </motion.div>
      </motion.a>
    </section>
  );
}
