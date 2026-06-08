import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
const contactEmail = "ashokgadhavi1704@gmail.com";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ashoka Games for game development and freelance projects.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        title="Contact"
        subtitle="Share your game idea, project brief, or collaboration request."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-[2fr_1fr]">
        <form
          action={`mailto:${contactEmail}`}
          method="post"
          encType="text/plain"
          className="glass-card space-y-4 rounded-2xl p-6"
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-indigo-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-lg border border-indigo-400/30 bg-black/25 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-300"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-indigo-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-lg border border-indigo-400/30 bg-black/25 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-300"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm text-indigo-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full rounded-lg border border-indigo-400/30 bg-black/25 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-300"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            className="rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            Send Message
          </button>
        </form>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-semibold">Email Contact</h3>
          <div className="mt-4">
            <a
              href={`mailto:${contactEmail}`}
              className="block rounded-lg border border-indigo-400/30 bg-black/25 px-4 py-2 text-sm text-indigo-200 transition hover:border-indigo-300"
            >
              {contactEmail}
            </a>
            <p className="mt-3 text-xs text-muted">
              Form submit karne par aapki query isi Gmail address par bhejne ke
              liye mail compose open hoga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
