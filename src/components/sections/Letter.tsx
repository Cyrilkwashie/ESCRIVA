"use client";

import { motion } from "framer-motion";
import { letter } from "@/data/content";

export default function Letter() {
  return (
    <section className="bg-void px-6 py-28 md:py-36">
      <div className="mx-auto max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 font-body text-xs uppercase tracking-[0.4em] text-gold"
        >
          07 — A Letter
        </motion.p>

        <div className="space-y-2">
          {letter.map((line, i) => (
            <motion.p
              key={`${i}-${line.slice(0, 12)}`}
              initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className={`font-display leading-relaxed ${
                line === ""
                  ? "h-6"
                  : i === 0 || line.startsWith("Forever") || line.startsWith("Happy")
                    ? "text-3xl font-light text-gold md:text-4xl"
                    : "text-xl font-light text-cream/90 md:text-2xl"
              }`}
            >
              {line || "\u00A0"}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
