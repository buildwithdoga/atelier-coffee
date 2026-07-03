"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const menuItems = [
  {
    name: "Espresso",
    description: "Double shot of our house blend. Bold, rich, and perfectly balanced.",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80",
    tag: "Classic",
  },
  {
    name: "Cappuccino",
    description: "Silky microfoam over a double espresso. A timeless Italian classic.",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80",
    tag: "Popular",
  },
  {
    name: "Flat White",
    description: "Velvety steamed milk with a double ristretto. Smooth and intense.",
    price: "$4.75",
    image: "https://images.unsplash.com/photo-1561882468-9110e03be5cf?w=600&q=80",
    tag: "Signature",
  },
  {
    name: "Matcha Latte",
    description: "Ceremonial grade matcha whisked with oat milk. Earthy and vibrant.",
    price: "$5.25",
    image: "https://images.unsplash.com/photo-1515823064-d6e0ca046a31?w=600&q=80",
    tag: "Seasonal",
  },
  {
    name: "Croissant",
    description: "Buttery, flaky, baked fresh every morning. The perfect companion.",
    price: "$3.75",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    tag: "Pastry",
  },
];

export function Menu() {
  return (
    <Section id="menu" className="bg-cream-100/50 dark:bg-espresso-900/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Featured Menu"
          title={
            <>
              Curated for the
              <br />
              <span className="bg-gradient-to-r from-accent-gold to-accent-copper bg-clip-text italic text-transparent">
                discerning palate
              </span>
            </>
          }
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mobile-scroll sm:grid sm:grid-cols-2 lg:grid-cols-3"
        >
          {menuItems.map((item) => (
            <motion.article
              key={item.name}
              variants={fadeInUp}
              className="mobile-scroll-item premium-card glass-card group cursor-pointer"
            >
              <div className="transition-transform duration-500 group-hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-espresso-950/10 to-transparent transition-opacity duration-500 group-hover:from-espresso-950/70" />
                  <span className="absolute left-4 top-4 rounded-full bg-cream-50/90 px-3 py-1 text-[9px] font-medium uppercase tracking-widest text-espresso-700 backdrop-blur-md transition-all duration-500 group-hover:bg-accent-gold group-hover:text-espresso-900 sm:text-[10px]">
                    {item.tag}
                  </span>
                  <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-cream-50/90 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4 text-espresso-800" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl text-espresso-800 transition-colors duration-500 group-hover:text-accent-gold dark:text-cream-100 sm:text-2xl">
                      {item.name}
                    </h3>
                    <span className="shrink-0 font-medium text-accent-gold transition-transform duration-500 group-hover:scale-110">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-espresso-500 transition-colors duration-500 group-hover:text-espresso-600 dark:text-cream-400 dark:group-hover:text-cream-300 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-[10px] uppercase tracking-widest text-espresso-400 sm:hidden">
          Swipe to explore →
        </p>
      </div>
    </Section>
  );
}
