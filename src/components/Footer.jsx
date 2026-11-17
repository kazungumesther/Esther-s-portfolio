import { PROFILE } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer id="contact" className="pt-16 pb-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="retro-title text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
  LET’S CONNECT
</h2>

          <p className="text-ink/70 mt-3 text-sm">
            Have an idea or an opportunity? I'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-semibold mb-16">
          <a
            href={`mailto:${PROFILE.email}`}
            className="bg-ink text-white px-6 py-3 rounded-full border-2 border-ink shadow-hard hover:-translate-y-0.5 transition-transform"
          >
            {PROFILE.email}
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-ink px-6 py-3 rounded-full border-2 border-ink shadow-hard hover:-translate-y-0.5 transition-transform"
          >
            LinkedIn ↗
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-ink px-6 py-3 rounded-full border-2 border-ink shadow-hard hover:-translate-y-0.5 transition-transform"
          >
            GitHub ↗
          </a>
          <a
            href={PROFILE.cvUrl}
            download
            className="bg-sun text-ink px-6 py-3 rounded-full border-2 border-ink shadow-hard hover:-translate-y-0.5 transition-transform"
          >
            Download CV ↓
          </a>
        </div>
      </div>

      <div className="border-t border-ink/20 pt-6 text-center text-xs text-ink/60">
        © 2026 {PROFILE.name}. Built with curiosity and code.
      </div>
    </footer>
  );
}
