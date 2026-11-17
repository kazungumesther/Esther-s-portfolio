import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/portfolioData";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="font-serif text-4xl font-bold mb-4">Project not found</h1>
        <Link
          to="/#projects"
          className="inline-block bg-sun px-5 py-2.5 rounded-full border-2 border-ink font-semibold text-sm shadow-hard"
        >
          ← Back to projects
        </Link>
      </div>
    );
  }

  return (
    <article className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold mb-4">
          <span className={`${project.badgeColor} px-3 py-0.5 rounded-full border border-ink`}>
            {project.badge}
          </span>
          <span className="px-3 py-0.5 rounded-full border border-ink bg-white">
            {project.role}
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-extrabold tracking-tight text-ink mb-4">
          {project.title}
        </h1>
        <p className="text-lg md:text-2xl font-bold text-ink leading-snug mb-3 max-w-2xl">
          {project.hook}
        </p>
        <p className="text-sm md:text-base text-ink/75 leading-relaxed mb-10 max-w-2xl">
          {project.description}
        </p>

        {project.meta && (
          <div className="bg-white rounded-2xl border-2 border-ink shadow-hard p-6 md:p-7 grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-ink/50 mb-1.5">MY ROLE</p>
              <p className="text-xs font-medium text-ink leading-relaxed">{project.meta.role}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-ink/50 mb-1.5">TEAM</p>
              <p className="text-xs font-medium text-ink leading-relaxed">{project.meta.team}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-ink/50 mb-1.5">TIMELINE</p>
              <p className="text-xs font-medium text-ink leading-relaxed">{project.meta.timeline}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-ink/50 mb-1.5">TOOLS</p>
              <p className="text-xs font-medium text-ink leading-relaxed">{project.meta.tools}</p>
            </div>
          </div>
        )}
        {project.banner && (
          <div className="mb-6">
            <div className="rounded-2xl border-2 border-ink shadow-hard overflow-hidden grid md:grid-cols-12">
              <div className={`md:col-span-7 ${project.banner.leftBg || "bg-[#1F3A2E]"} text-white p-8 md:p-10 flex flex-col justify-center`}>
                <span className="text-xs font-bold tracking-wider uppercase text-sun mb-2">
                  {project.title}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                  {project.banner.tagline}
                </h2>
                <div className="mb-4">
                  <span className="inline-block bg-sun text-ink text-[11px] font-bold px-3 py-1 rounded-full">
                    {project.banner.pill}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-white/85 leading-relaxed">
                  {project.banner.subtext}
                </p>
              </div>

              <div className={`md:col-span-5 ${project.banner.rightBg || "bg-[#CFE0C8]"} border-t-2 md:border-t-0 md:border-l-2 border-ink p-6 flex items-center justify-center`}>
                <div className="w-48 bg-ink rounded-[28px] p-1.5 shadow-lg flex flex-col">
                  <div className="w-full bg-white rounded-[22px] overflow-hidden flex flex-col">
                    <div className="w-12 h-2 bg-ink rounded-b-lg mx-auto shrink-0"></div>
                    {project.banner.image ? (
                      <img src={project.banner.image} alt={`${project.title} home screen`} className="w-full h-auto block" />
                    ) : (
                      <div className="p-6 text-center my-auto">
                        <p className="text-xs font-bold">{project.title}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {project.banner.ctaUrl && (
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a href={project.banner.ctaUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-ink text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-ink/90 transition">
                  {project.banner.ctaText}
                </a>
                {project.banner.githubUrl && (
                  <a href={project.banner.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-ink text-xs font-semibold px-5 py-2.5 rounded-full border-2 border-ink shadow-hard hover:-translate-y-0.5 transition-transform">
                    GitHub Repo ↗
                  </a>
                )}
              </div>
            )}
          </div>
        )}

        <div className="divide-y divide-ink/20 mt-10">
          {project.problem && (
            <section className="py-12 grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <span className="block text-[11px] font-bold text-[#C85A32] mb-1">01</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">The problem</h2>
              </div>
              <div className="md:col-span-8 space-y-4 text-sm md:text-base text-ink/85 leading-relaxed">
                {project.problem.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>
          )}

          {project.research && (
            <section className="py-12 grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <span className="block text-[11px] font-bold text-[#C85A32] mb-1">02</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">Research</h2>
              </div>
              <div className="md:col-span-8 space-y-5">
                <div className="bg-sun rounded-2xl border-2 border-ink shadow-hard p-6">
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-ink/70 mb-2">KEY INSIGHT</p>
                  <p className="text-sm md:text-base font-bold text-ink leading-snug mb-3">{project.research.insight}</p>
                  <p className="text-[11px] text-ink/75">{project.research.source}</p>
                </div>
                <div className="space-y-4 text-sm md:text-base text-ink/85 leading-relaxed">
                  {project.research.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {project.flows && (
            <section className="py-12 grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <span className="block text-[11px] font-bold text-[#C85A32] mb-1">03</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">Flows &amp; structure</h2>
              </div>
              <div className="md:col-span-8 space-y-4 text-sm md:text-base text-ink/85 leading-relaxed">
                {project.flows.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>
          )}
          {project.decision && (
            <section className="py-12 grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <span className="block text-[11px] font-bold text-[#C85A32] mb-1">04</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">Key decision</h2>
              </div>
              <div className="md:col-span-8">
                <div className="bg-white rounded-2xl border-2 border-ink shadow-hard p-6 md:p-8 space-y-4">
                  <h3 className="font-bold text-base md:text-lg text-ink">{project.decision.question}</h3>
                  <div>
                    <p className="text-xs font-bold text-ink mb-2">Options we considered</p>
                    <ol className="list-decimal list-inside space-y-1 text-xs md:text-sm text-ink/80">
                      {project.decision.options.map((opt) => (
                        <li key={opt}>{opt}</li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-ink/50 mb-1">WHAT WE CHOSE</p>
                    <p className="text-xs md:text-sm font-semibold text-ink">{project.decision.chosen}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-ink/50 mb-1">WHY</p>
                    <p className="text-xs md:text-sm text-ink/85 leading-relaxed">{project.decision.why}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-ink/50 mb-1">THE TRADE-OFF</p>
                    <p className="text-xs md:text-sm text-ink/85 leading-relaxed">{project.decision.tradeoff}</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {project.screens && (
            <section className="py-12 space-y-6">
              <div>
                <span className="block text-[11px] font-bold text-[#C85A32] mb-1">05</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">The interface</h2>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {project.screens.map((screen) => (
                  <div key={screen.title} className="flex flex-col">
                    <div className={`${screen.bg} rounded-2xl border-2 border-ink shadow-hard p-5 flex items-center justify-center mb-3 min-h-[300px]`}>
                      {screen.type === "web" ? (
                        <div className="w-full bg-ink rounded-xl p-1 shadow-md flex flex-col">
                          <div className="w-full bg-white rounded-lg overflow-hidden flex flex-col">
                            <div className="bg-cream border-b border-ink/20 px-2.5 py-1.5 flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-red-400 border border-ink/40"></span>
                              <span className="w-2 h-2 rounded-full bg-sun border border-ink/40"></span>
                              <span className="w-2 h-2 rounded-full bg-mint border border-ink/40"></span>
                            </div>
                            {screen.image ? (
                              <img src={screen.image} alt={screen.title} className="w-full h-auto block" />
                            ) : (
                              <div className="p-6 text-center my-auto">
                                <p className="text-xs font-extrabold text-ink">{screen.title}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="w-full max-w-[215px] bg-ink rounded-[26px] p-1.5 shadow-md flex flex-col">
                          <div className="w-full bg-white rounded-[20px] overflow-hidden flex flex-col">
                            <div className="w-12 h-2 bg-ink rounded-b-lg mx-auto shrink-0"></div>
                            {screen.image ? (
                              <img src={screen.image} alt={screen.title} className="w-full h-auto block" />
                            ) : (
                              <div className="p-6 text-center my-auto">
                                <p className="text-xs font-extrabold text-ink">{screen.title}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-ink/75 leading-snug">{screen.caption}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.reflection && (
            <section className="py-12 grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <span className="block text-[11px] font-bold text-[#C85A32] mb-1">06</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink">What I’d change</h2>
              </div>
              <div className="md:col-span-8">
                <div className="bg-white rounded-2xl border-2 border-ink shadow-hard p-6 text-xs md:text-sm text-ink/85 leading-relaxed">
                  {project.reflection}
                </div>
              </div>
            </section>
          )}
        </div>

        {project.nextProject && (
          <Link
            to={`/projects/${project.nextProject.slug}`}
            className="mt-8 block bg-[#B8D4F0] rounded-2xl border-2 border-ink shadow-hard p-6 md:p-8 hover:-translate-y-0.5 transition-transform"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-ink/70">NEXT CASE STUDY</span>
              <span className="font-serif text-3xl md:text-4xl font-extrabold text-ink">{project.nextProject.title} →</span>
            </div>
          </Link>
        )}
      </div>
    </article>
  );
}
