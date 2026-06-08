"use client";

import { motion } from "framer-motion";


export function AnimatedBackground() {
  const particles = Array.from({ length: 26 }, (_, i) => ({
    id: i,
    x: `${(i * 13) % 100}%`,
    y: `${(i * 19) % 100}%`,
    scale: 0.5 + ((i % 5) * 0.15),
    opacity: 0.2 + ((i % 4) * 0.12),
    drift: `${-12 - (i % 7) * 6}%`,
    duration: 7 + (i % 6),
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-20" />
      {particles.map((item) => (
        <motion.span
          key={item.id}
          className="absolute h-2 w-2 rounded-full bg-indigo-300/35"
          initial={{
            x: item.x,
            y: item.y,
            scale: item.scale,
            opacity: item.opacity,
          }}
          animate={{
            y: ["0%", item.drift],
            opacity: [0.12, 0.45, 0.12],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
