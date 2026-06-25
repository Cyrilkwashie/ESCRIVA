"use client";

import { motion } from "framer-motion";
import { reasons } from "@/data/content";

export default function TheList() {
  return (
    <section className="bg-void px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-gold"
        >
          05 — The List
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 font-display text-4xl font-light md:text-5xl"
        >
          {reasons.length} reasons I love you
        </motion.h2>

        <div>
          {reasons.map((reason, i) => (
            <ReasonItem
              key={i}
              index={i}
              reason={reason}
              align={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonItem({
  index,
  reason,
  align,
}: {
  index: number;
  reason: string;
  align: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-baseline gap-5 border-t border-cream/5 py-8 md:gap-8 md:py-10 ${
        align === "right" ? "flex-row-reverse text-right" : ""
      }`}
    >
      <span className="shrink-0 font-display text-5xl font-light text-gold/25 md:text-7xl">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="max-w-xl font-display text-xl font-light leading-snug text-cream md:text-3xl">
        {reason}
      </p>
    </motion.div>
  );
}
