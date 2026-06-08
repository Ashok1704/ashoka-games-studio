"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="mt-2 text-muted">{subtitle}</p>
    </motion.div>
  );
}
