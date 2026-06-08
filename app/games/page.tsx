import type { Metadata } from "next";
import { GamesGrid } from "@/components/games-grid";
import { SectionHeading } from "@/components/section-heading";
import { games } from "@/data/games";

export const metadata: Metadata = {
  title: "Games",
  description: "Play all published Ashoka Games titles from our HTML5 portfolio.",
};

export default function GamesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        title="Games Showcase"
        subtitle="Explore all Ashoka Games releases with quick play access."
      />
      <div className="mt-8">
        <GamesGrid items={games} />
      </div>
    </section>
  );
}
