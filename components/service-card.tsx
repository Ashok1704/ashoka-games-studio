"use client";

import { motion } from "framer-motion";

type Service = {
  title: string;
  description: string;
};

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35 }}
      className="glass-card rounded-2xl p-5"
    >
      <h3 className="text-lg font-semibold text-indigo-200">{service.title}</h3>
      <p className="mt-2 text-sm text-muted">{service.description}</p>
    </motion.article>
  );
}
