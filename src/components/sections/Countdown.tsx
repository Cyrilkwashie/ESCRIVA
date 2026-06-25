"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/content";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function FlipDigit({ value, label }: { value: number; label: string }) {
  const formatted = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-20 w-20 overflow-hidden rounded-sm bg-surface sm:h-28 sm:w-28">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={formatted}
            initial={{ y: -40, opacity: 0, rotateX: -90 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: 40, opacity: 0, rotateX: 90 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 flex items-center justify-center font-display text-4xl text-cream sm:text-6xl"
          >
            {formatted}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-3 font-body text-[10px] uppercase tracking-[0.3em] text-cream/50">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(siteConfig.nextEvent.date)
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(siteConfig.nextEvent.date));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isBirthday =
    mounted &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-28">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/media/videos/countdown.mp4" type="video/mp4" />
        <source
          src="https://videos.pexels.com/video-files/4763824/4763824-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-void/75" />

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-gold"
        >
          08 — What&apos;s Next
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 font-display text-5xl font-light md:text-7xl"
        >
          {isBirthday ? "Happy Birthday" : siteConfig.nextEvent.label}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 font-body text-lg text-cream/70"
        >
          {isBirthday
            ? `${siteConfig.name}, you are nineteen and extraordinary.`
            : `Counting down to ${siteConfig.name}'s special day`}
        </motion.p>

        {!isBirthday && mounted && (
          <div className="flex justify-center gap-4 sm:gap-8">
            <FlipDigit value={timeLeft.days} label="Days" />
            <FlipDigit value={timeLeft.hours} label="Hours" />
            <FlipDigit value={timeLeft.minutes} label="Minutes" />
            <FlipDigit value={timeLeft.seconds} label="Seconds" />
          </div>
        )}

        {isBirthday && (
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display text-3xl text-gold md:text-5xl"
          >
            I love you, {siteConfig.name} ♥
          </motion.p>
        )}

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 font-body text-xs uppercase tracking-[0.3em] text-cream/30"
        >
          I LOVE YOU
        </motion.footer>
      </div>
    </section>
  );
}
