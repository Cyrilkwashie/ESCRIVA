"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { heroVideoFallbacks, heroVideos, siteConfig } from "@/data/content";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const contentTimer = setTimeout(() => setShowContent(true), 1500);
    return () => clearTimeout(contentTimer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const restart = () => {
      video.currentTime = 0;
      void video.play().catch(() => {});
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible" && video.paused) {
        void video.play().catch(() => {});
      }
    };

    video.addEventListener("ended", restart);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      video.removeEventListener("ended", restart);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideos[0]} type="video/mp4" />
        <source src={heroVideoFallbacks[0]} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/40 to-void" />

      <div className="relative z-10 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-display text-7xl font-light leading-none tracking-tight sm:text-8xl md:text-9xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="mx-auto mt-6 max-w-xl font-body text-base font-light tracking-wide text-cream/80 sm:text-lg"
        >
          {siteConfig.tagline}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={showContent ? { opacity: 1 } : {}}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gold/70"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
