"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { pullQuote, traits } from "@/data/content";

export default function HerUniverse() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-void px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 font-body text-xs uppercase tracking-[0.4em] text-gold"
        >
          02 — Her Universe
        </motion.p>

        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <blockquote className="font-display text-4xl font-light leading-tight text-cream sm:text-5xl md:text-6xl">
              {pullQuote}
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:col-start-8"
          >
            <ul className="space-y-6">
              {traits.map((trait, i) => (
                <motion.li
                  key={trait}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  className="flex items-baseline gap-4 border-b border-cream/10 pb-6"
                >
                  <span className="font-display text-2xl text-gold/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-lg font-light text-cream/90">
                    {trait}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          style={{ y: imageY }}
          className="relative mt-20"
        >
          <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-sm bg-surface">
            <img
              src="/media/videos/no1.jpeg"
              alt="Escriva"
              className="h-auto w-full object-contain"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1600&q=80";
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
