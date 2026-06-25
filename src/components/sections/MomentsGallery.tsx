"use client";

import { motion } from "framer-motion";
import { moments } from "@/data/content";

export default function MomentsGallery() {
  return (
    <section className="bg-void px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-gold"
        >
          04 — Moments
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 font-display text-5xl font-light md:text-6xl"
        >
          Fragments of us
        </motion.h2>

        <div className="masonry-grid">
          {moments.map((item, i) => (
            <motion.div
              key={`${item.caption}-${i}`}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="masonry-item group relative overflow-hidden rounded-sm"
            >
              {item.type === "photo" ? (
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = item.fallback;
                  }}
                />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full object-cover"
                >
                  <source src={item.src} type="video/mp4" />
                  <source src={item.fallback} type="video/mp4" />
                </video>
              )}

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gold/0 opacity-0 transition-all duration-500 group-hover:bg-gold/20 group-hover:opacity-100">
                <p className="font-display text-2xl text-cream">{item.caption}</p>
                <p className="mt-1 font-body text-xs uppercase tracking-[0.3em] text-cream/80">
                  {item.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
