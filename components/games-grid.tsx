"use client";

import { useMemo, useState } from "react";
import { GameCard } from "@/components/game-card";
import type { Game } from "@/data/games";
import { gameCategories } from "@/data/games";

type GamesGridProps = {
  items: Game[];
};

const PAGE_SIZE = 6;

export function GamesGrid({ items }: GamesGridProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return items.filter((game) => {
      const matchesQuery = game.title.toLowerCase().includes(query.toLowerCase());
      const gameCategoryList = game.category
        .split(",")
        .map((category) => category.trim().toLowerCase());
      const matchesCategory =
        activeCategory === "All" ||
        gameCategoryList.includes(activeCategory.toLowerCase());
      return matchesQuery && matchesCategory;
    });
  }, [items, query, activeCategory]);

  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;

  return (
    <div>
      <div className="glass-card mb-6 rounded-2xl p-4">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Search games..."
          className="mb-3 w-full rounded-lg border border-indigo-400/30 bg-black/25 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-300"
        />
        <div className="flex flex-wrap gap-2">
          {gameCategories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setPage(1);
              }}
              className={`rounded-full px-3 py-1.5 text-xs transition ${
                activeCategory === category
                  ? "bg-indigo-500 text-white"
                  : "border border-indigo-400/40 text-indigo-200 hover:bg-indigo-500/15"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="rounded-xl bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
