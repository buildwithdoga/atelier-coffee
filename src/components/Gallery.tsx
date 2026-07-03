"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { staggerContainer, scaleIn } from "@/lib/motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
    alt: "Latte art in ceramic cup",
    caption: "Latte Art",
    span: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80",
    alt: "Cozy coffee shop interior",
    caption: "Our Space",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1453614512568-c4028d13c247?w=600&q=80",
    alt: "Coffee beans close-up",
    caption: "Single Origin",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58220f6b?w=600&q=80",
    alt: "Minimalist cafe seating",
    caption: "Interior",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&q=80",
    alt: "Pour-over coffee preparation",
    caption: "Pour Over",
    span: "col-span-1 row-span-1",
  },
];

export function Gallery() {
  return (
    <Section id="gallery" className="bg-cream-50 dark:bg-espresso-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label">Gallery</p>
            <h2 className="section-title text-espresso-900 dark:text-cream-50">
              A glimpse into
              <br />
              <span className="bg-gradient-to-r from-accent-gold to-accent-copper bg-clip-text italic text-transparent">
                our world
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="max-w-sm text-sm leading-relaxed text-espresso-500 dark:text-cream-400"
          >
            Every detail curated. From the first pour to the last sip, experience
            the atmosphere that makes Artisan unique.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 auto-rows-[140px] gap-2 sm:auto-rows-[180px] sm:gap-3 md:grid-cols-4 md:auto-rows-[200px] md:gap-4"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.src}
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className={`premium-card group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl ${image.span}`}
            >
              <div className="relative h-full min-h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-espresso-950/0 transition-all duration-500 group-hover:bg-espresso-950/30" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-espresso-950/80 to-transparent p-4 transition-transform duration-500 group-hover:translate-y-0 sm:p-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cream-100 sm:text-xs">
                    {image.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
