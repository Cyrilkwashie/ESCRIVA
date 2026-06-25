"use client";

import { motion } from "framer-motion";
import { songs } from "@/data/content";

export default function OurSongs() {
  return (
    <section className="relative overflow-hidden bg-surface px-6 py-28 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#C9A96E08_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-gold"
        >
          06 — Our Songs
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 font-display text-5xl font-light md:text-6xl"
        >
          The soundtrack of us
        </motion.h2>

        <div className="space-y-12">
          {songs.map((song, i) => (
            <motion.div
              key={song.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="rounded-sm border border-cream/10 bg-void/50 p-6 backdrop-blur-sm md:p-8"
            >
              <div className="mb-4">
                <h3 className="font-display text-2xl text-gold">{song.title}</h3>
                <p className="mt-1 font-body text-sm font-light text-cream/70">
                  {song.story}
                </p>
              </div>
              {song.embedUrl && (
                <iframe
                  src={song.embedUrl}
                  width="100%"
                  height={song.embedHeight ?? 152}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-md"
                  title={song.title}
                />
              )}
              {song.image && (
                <div className="overflow-hidden rounded-md">
                  <img
                    src={song.image}
                    alt="Hwang Hyunjin"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
