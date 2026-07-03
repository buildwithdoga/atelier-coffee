"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { slideInLeft, slideInRight } from "@/lib/motion";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const fields = [
    { id: "name", label: "Name", type: "text", placeholder: "Your name", half: true },
    { id: "email", label: "Email", type: "email", placeholder: "you@email.com", half: true },
    { id: "subject", label: "Subject", type: "text", placeholder: "How can we help?", half: false },
  ];

  return (
    <Section id="contact" className="bg-cream-100/50 dark:bg-espresso-900/30">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={slideInLeft}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title text-espresso-900 dark:text-cream-50">
            Let&apos;s start a
            <br />
            <span className="bg-gradient-to-r from-accent-gold to-accent-copper bg-clip-text italic text-transparent">
              conversation
            </span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-espresso-500 dark:text-cream-400 sm:mt-6">
            Whether you&apos;re planning an event, interested in wholesale, or
            just want to say hello — we&apos;d love to hear from you.
          </p>

          <div className="mt-10 hidden space-y-4 lg:block">
            {["Events & Private Bookings", "Wholesale Inquiries", "General Questions"].map(
              (item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 8 }}
                  className="group flex items-center gap-3 text-sm text-espresso-500 transition-colors duration-500 hover:text-accent-gold dark:text-cream-400"
                >
                  <span className="h-1 w-1 rounded-full bg-accent-gold/60 transition-all duration-500 group-hover:w-4" />
                  {item}
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={slideInRight}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center rounded-2xl border border-accent-sage/20 bg-cream-50 px-6 py-14 text-center dark:bg-espresso-900/80 sm:px-8 sm:py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle
                  className="mb-4 h-12 w-12 text-accent-sage"
                  strokeWidth={1.5}
                />
              </motion.div>
              <h3 className="font-display text-2xl text-espresso-800 dark:text-cream-100">
                Message Sent
              </h3>
              <p className="mt-2 text-sm text-espresso-500 dark:text-cream-400">
                Thank you for reaching out. We&apos;ll get back to you within 24
                hours.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.4 }}
              className="glass-card space-y-5 rounded-2xl p-6 sm:space-y-6 sm:p-8 md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                {fields.map((field) => (
                  <div
                    key={field.id}
                    className={field.half ? "" : "sm:col-span-2"}
                  >
                    <label
                      htmlFor={field.id}
                      className={`mb-2 block text-[10px] font-medium uppercase tracking-widest transition-colors duration-300 sm:text-xs ${
                        focused === field.id
                          ? "text-accent-gold"
                          : "text-espresso-600 dark:text-cream-300"
                      }`}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required
                      onFocus={() => setFocused(field.id)}
                      onBlur={() => setFocused(null)}
                      className="input-premium"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`mb-2 block text-[10px] font-medium uppercase tracking-widest transition-colors duration-300 sm:text-xs ${
                    focused === "message"
                      ? "text-accent-gold"
                      : "text-espresso-600 dark:text-cream-300"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="input-premium resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <Magnetic className="w-full sm:w-auto">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full gap-2 sm:w-auto"
                >
                  <Send className="h-4 w-4" strokeWidth={1.5} />
                  Send Message
                </Button>
              </Magnetic>
            </motion.form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
