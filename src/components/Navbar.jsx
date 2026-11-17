import { Link } from "react-router-dom";
import { PROFILE } from "../data/portfolioData";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-ink/20">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-base sm:text-lg tracking-tight">
          {PROFILE.name}
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
          <a
            href="/#projects"
            className="bg-sun px-3.5 sm:px-4 py-1.5 rounded-full border border-ink hover:-translate-y-0.5 transition-transform"
          >
            Projects
          </a>
          <a
            href="/#about"
            className="bg-sky px-3.5 sm:px-4 py-1.5 rounded-full border border-ink hover:-translate-y-0.5 transition-transform"
          >
            What I'm up to
          </a>
          <a
            href="/#contact"
            className="bg-ink text-white px-3.5 sm:px-4 py-1.5 rounded-full border border-ink hover:-translate-y-0.5 transition-transform"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
