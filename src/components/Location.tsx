"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { slideInLeft, slideInRight, fadeInUp } from "@/lib/motion";

const contactItems = [
  {
    icon: MapPin,
    title: "Address",
    content: (
      <>
        Caferağa Mah. Moda Cad. No: 42
        <br />
        Kadıköy, Istanbul 34710
      </>
    ),
    href: "https://maps.google.com/?q=Moda+Kadikoy+Istanbul",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+90 (216) 555 0142",
    href: "tel:+902165550142",
  },
  {
    icon: Mail,
    title: "Email",
    content: "hello@artisancoffee.co",
    href: "mailto:hello@artisancoffee.co",
  },
];

export function Location() {
  return (
    <Section id="location" className="bg-cream-50 dark:bg-espresso-950">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Location"
          title={
            <>
              Find us in the
              <br />
              <span className="bg-gradient-to-r from-accent-gold to-accent-copper bg-clip-text italic text-transparent">
                heart of the city
              </span>
            </>
          }
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideInLeft}
            className="flex flex-col justify-center lg:col-span-2"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="space-y-3 sm:space-y-4"
            >
              {contactItems.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  variants={fadeInUp}
                  whileHover={{ x: 6 }}
                  className="group flex gap-4 rounded-xl p-3 transition-all duration-500 hover:bg-espresso-100/50 dark:hover:bg-espresso-800/30 sm:p-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-gold/10 transition-all duration-500 group-hover:bg-accent-gold/20 group-hover:scale-110">
                    <item.icon
                      className="h-4 w-4 text-accent-gold"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-medium uppercase tracking-widest text-espresso-700 dark:text-cream-200 sm:text-xs">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-espresso-500 transition-colors duration-500 group-hover:text-espresso-700 dark:text-cream-400 dark:group-hover:text-cream-200">
                      {item.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <div className="mt-8 sm:mt-10">
              <Magnetic>
                <Button
                  href="https://maps.google.com/?q=Moda+Kadikoy+Istanbul"
                  variant="primary"
                  size="md"
                  className="w-full gap-2 sm:w-auto"
                >
                  <Navigation className="h-4 w-4" strokeWidth={1.5} />
                  Get Directions
                </Button>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideInRight}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
            className="group overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(26,17,8,0.15)] dark:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)] lg:col-span-3"
          >
            <iframe
              title="Artisan Coffee location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.650489688!2d29.0255!3d40.9876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b8c8b8b8b8!2sModa%2C%20Kad%C4%B1k%C3%B6y!5e0!3m2!1sen!2str!4v1700000000000!5m2!1sen!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[280px] w-full grayscale-[40%] transition-all duration-700 group-hover:grayscale-0 sm:h-[350px] md:h-[450px]"
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
