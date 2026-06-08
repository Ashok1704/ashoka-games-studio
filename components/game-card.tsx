"use client";

import type { Game } from "@/data/games";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className="glass-card group overflow-hidden rounded-2xl"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={game.thumbnail}
          alt={game.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="text-xs uppercase tracking-wide text-indigo-300">{game.category}</p>
        <h3 className="mt-2 text-lg font-semibold">{game.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{game.description}</p>
        <Link
          href={`/games/${game.slug}`}
          className="mt-4 inline-flex rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400"
        >
          Play
        </Link>
      </div>
    </motion.article>
  );
}
