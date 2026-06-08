import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GamePlayer } from "@/components/game-player";
import { getGameBySlug, games } from "@/data/games";

type GameDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({
  params,
}: GameDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {
      title: "Game Not Found",
    };
  }

  return {
    title: game.title,
    description: game.description,
  };
}

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const relatedGames = games
    .filter((item) => item.slug !== game.slug)
    .slice(0, 3);
  const recommendedGames = games
    .filter((item) => item.slug !== game.slug)
    .slice(3, 7);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-wide text-indigo-300">
            {game.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{game.title}</h1>
        </div>
        <Link
          href="/games"
          className="rounded-lg border border-indigo-400/50 px-4 py-2 text-sm text-indigo-200 transition hover:bg-indigo-500/15"
        >
          ← Back to Games
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <GamePlayer title={game.title} playUrl={game.playUrl} />
          <div className="glass-card rounded-2xl p-5">
            <h2 className="text-xl font-semibold">Game Description</h2>
            <p className="mt-3 text-muted">{game.description}</p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold">Related Games</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedGames.map((item) => (
                <Link
                  key={item.slug}
                  href={`/games/${item.slug}`}
                  className="glass-card overflow-hidden rounded-2xl transition hover:-translate-y-1"
                >
                  <div className="relative h-40">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs uppercase tracking-wide text-indigo-300">
                      {item.category}
                    </p>
                    <p className="mt-2 text-base font-semibold text-indigo-100">
                      {item.title}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm text-muted">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <aside className="glass-card h-fit rounded-2xl p-4">
          <h3 className="mb-4 text-lg font-semibold">Recommended Games</h3>
          <div className="space-y-3">
            {recommendedGames.map((item) => (
              <Link
                key={item.slug}
                href={`/games/${item.slug}`}
                className="block rounded-lg border border-indigo-400/30 bg-black/25 p-3 transition hover:border-indigo-300"
              >
                <p className="text-sm font-medium text-indigo-200">{item.title}</p>
                <p className="mt-1 text-xs text-muted">{item.category}</p>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
