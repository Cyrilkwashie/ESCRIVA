"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { timeline } from "@/data/content";

export default function OurStory() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="bg-surface px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 font-body text-xs uppercase tracking-[0.4em] text-gold"
        >
          03 — Our Story
        </motion.p>

        <h2 className="mb-20 font-display text-5xl font-light md:text-6xl">
          Our
          <br />
          <span className="text-gold">journey</span>
        </h2>

        <div className="relative">
          <div className="absolute left-[7px] top-0 h-full w-px bg-cream/10" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[7px] top-0 w-px origin-top bg-gold"
          />

          <div className="space-y-16">
            {timeline.map((item, i) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-2 h-4 w-4 rounded-full border border-gold bg-void" />

                <p className="font-body text-xs uppercase tracking-[0.3em] text-gold">
                  {item.date}
                </p>
                <p className="mt-2 font-display text-2xl font-light text-cream">
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
