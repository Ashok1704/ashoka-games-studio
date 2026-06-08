import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Ashoka Games and our independent game studio vision.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        title="About Us"
        subtitle="Independent studio focused on creative game experiences."
      />
      <div className="glass-card mt-8 rounded-2xl p-7 leading-relaxed text-muted">
        Ashoka Games is an independent game development studio specializing in
        HTML5 and mobile games. Hum kisi bhi type ki HTML5 game build kar sakte
        hain — hypercasual, arcade, puzzle, action, racing, adventure aur
        custom concept-based games. Humein 7+ years ka practical development
        experience hai, jisme client project work, end-to-end production,
        reskinning, SDK integration aur performance optimization included hai.
        Team project basis par bhi kaam karti hai aur freelance engagement model
        me bhi full support deti hai.
      </div>
    </section>
  );
}
