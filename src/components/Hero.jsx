import { PROFILE } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="border-b border-ink/20 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            {PROFILE.tags.map((tag) => (
              <span
                key={tag.label}
                className={`px-3 py-1 rounded-full border border-ink/70 ${tag.color}`}
              >
                {tag.label}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
            Hi, I’m {PROFILE.firstName}
            <br />
            {PROFILE.lastName}
          </h1>

          <div className="space-y-4 text-base md:text-lg leading-relaxed max-w-xl">
            <p className="font-semibold text-ink">{PROFILE.bioLead}</p>
            <p className="text-sm md:text-base text-ink/75">{PROFILE.bioSub}</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="bg-ink text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full border border-ink hover:bg-ink/90 transition"
            >
              See my projects ↓
            </a>
            <a
              href="#contact"
              className="bg-white text-ink font-semibold text-xs sm:text-sm px-6 py-3 rounded-full border border-ink hover:bg-sun/40 transition"
            >
              Say hi
            </a>
          </div>
        </div>

        
        <div className="md:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[290px] bg-cardgreen rounded-2xl border-2 border-ink shadow-hard p-4 flex flex-col justify-between aspect-[4/5] relative">
            <div className="flex items-center justify-between text-[10px] font-bold tracking-wider uppercase text-ink/80">
              <span className="text-base leading-none">✳</span>
              <span>Ideas in progress</span>
            </div>

            <div className="my-auto flex items-center justify-center relative py-2">
              <svg
                viewBox="0 0 200 210"
                className="w-44 h-44"
                fill="none"
                xmlns="http://w3.org"
              >
                <circle cx="132" cy="76" r="26" fill="#F2B84B" />
                <path
                  d="M100 142V72"
                  stroke="#1F5E3B"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M100 105C82 105 68 95 68 82C83 82 96 90 100 105Z"
                  fill="#2E7D4F"
                />
                <path
                  d="M100 94C118 94 132 82 132 68C116 68 104 78 100 94Z"
                  fill="#2E7D4F"
                />
                <path
                  d="M100 74C92 58 96 42 106 36C114 48 112 64 100 74Z"
                  fill="#236B42"
                />
                <rect
                  x="68"
                  y="140"
                  width="64"
                  height="10"
                  rx="3"
                  fill="#C4835A"
                  stroke="#1C2536"
                  strokeWidth="2"
                />
                <path
                  d="M73 150H127L121 188C120.5 191 118 193 115 193H85C82 193 79.5 191 79 188L73 150Z"
                  fill="#C4835A"
                  stroke="#1C2536"
                  strokeWidth="2"
                />
              </svg>

              <div className="absolute right-2 bottom-6 text-right font-mono text-[11px] font-bold text-ink/75 leading-tight">
  
              </div>
            </div>

            <div className="flex items-center justify-between text-[9px] font-bold tracking-wider uppercase text-ink/80 border-t border-ink/20 pt-2">
              <span>// Creative Thinking</span>
              <span className="normal-case font-medium">
                Always building something
              </span>
            </div>
          </div>

          <p className="text-xs text-ink/70 text-center mt-3 max-w-[260px]">
            {PROFILE.heroCaption}
          </p>
        </div>
      </div>
    </section>
  );
}
