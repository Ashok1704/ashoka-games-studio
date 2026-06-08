import Link from "next/link";
import { AnimatedBackground } from "@/components/animated-background";
import { GameCard } from "@/components/game-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { games } from "@/data/games";
import { services } from "@/data/services";

export default function Home() {
  const featuredGames = games.slice(0, 4);
  const latestGames = games.slice(4, 8);
  return (
    <div className="relative">
      <AnimatedBackground />
      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pt-24 lg:px-8">
        <div className="glass-card neon-ring rounded-3xl p-8 sm:p-10 md:p-14">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-indigo-300">
            Ashoka Games Studio
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            We Build Addictive HTML5 & Mobile Games
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Game development, reskinning, SDK integrations and freelance game
            solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/games"
              className="rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400"
            >
              Play Games
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-indigo-400/60 px-6 py-3 font-semibold text-indigo-200 transition hover:border-indigo-300 hover:bg-indigo-500/10"
            >
              Hire Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Games"
          subtitle="Handpicked browser games published by Ashoka Games."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredGames.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          title="Latest Games"
          subtitle="Fresh launches with addictive gameplay loops."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestGames.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          title="Services"
          subtitle="End-to-end game studio support for teams and publishers."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Ashoka Games"
          subtitle="Independent studio building lightweight, high-retention web and mobile experiences."
        />
        <div className="glass-card rounded-2xl p-7 text-muted">
          Ashoka Games is an independent game development studio specializing in
          HTML5 and mobile games. We create engaging browser games, reskin
          existing games, integrate monetization SDKs and develop custom game
          solutions for clients worldwide.
          <div className="mt-5">
            <Link className="text-indigo-300 hover:text-indigo-200" href="/about">
              Read full story →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 text-center sm:p-12">
          <h2 className="text-3xl font-semibold">Ready to launch your next game?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Let’s collaborate on game development, monetization, and publishing
            growth.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400"
          >
            Contact CTA
          </Link>
        </div>
      </section>
    </div>
  );
}
