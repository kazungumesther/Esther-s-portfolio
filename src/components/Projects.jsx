import { useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS, EARLY_PROJECTS } from "../data/portfolioData";

export default function Projects() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const visibleProjects = PROJECTS.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="projects" className="border-b border-ink/20 py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div>
            <h2 className="retro-title text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
              FEATURED PROJECTS
            </h2>

            <p className="text-ink/75 italic mt-3 text-sm md:text-base">
              Things I've been working on!
            </p>

           
            <div className="flex items-center gap-3.5 mt-5">
              <button
                onClick={() => setStartIndex((p) => Math.max(0, p - 1))}
                disabled={startIndex === 0}
                aria-label="Previous projects"
                className="carousel-arrow w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                onClick={() =>
                  setStartIndex((p) =>
                    Math.min(Math.max(0, PROJECTS.length - visibleCount), p + 1)
                  )
                }
                disabled={startIndex + visibleCount >= PROJECTS.length}
                aria-label="Next projects"
                className="carousel-arrow w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="w-52 h-28 bg-sky rounded-2xl border-2 border-ink shadow-hard flex flex-col items-center justify-center text-xs font-bold text-center p-4">
            <span className="bg-sun text-ink text-[10px] uppercase px-2 py-0.5 rounded mb-1.5 border border-ink">
              Shipping Code
            </span>
            <span>Mobile & Web Builds</span>
          </div>
        </div>

        
         <div className="grid md:grid-cols-3 gap-6">
          {visibleProjects.map((project) => {
            const inner = (
              <>
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider mb-3">
                    <span
                      className={`${project.badgeColor} px-2.5 py-0.5 rounded-full border border-ink`}
                    >
                      {project.badge}
                    </span>
                    <span className="text-ink/60">{project.role}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-2 group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="font-semibold text-sm text-ink mb-3 leading-snug">
                    {project.hook}
                  </p>
                  <p className="text-xs text-ink/75 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium bg-cream px-2.5 py-0.5 rounded-md border border-ink/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="inline-block text-xs font-bold border-b border-ink pb-0.5">
                    {project.linkText}
                  </span>
                </div>
              </>
            );

            return project.externalOnly ? (
              <a
                key={project.slug}
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group bg-white rounded-2xl border-2 border-ink shadow-hard p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                {inner}
              </a>
            ) : (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group bg-white rounded-2xl border-2 border-ink shadow-hard p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                {inner}
              </Link>
            );
          })}
        </div>

       
        <div className="mt-10 bg-white/80 rounded-2xl border-2 border-dashed border-ink shadow-hard p-6">
          <h4 className="font-bold text-sm mb-4">Where it all started</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-ink/80">
            {EARLY_PROJECTS.map((item, idx) => (
              <div key={item}>
                <span className="font-bold text-ink">{idx + 1}.</span> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
