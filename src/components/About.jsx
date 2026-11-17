import { CURRENTLY_LEARNING, OPEN_TO } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="border-b border-ink/20 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
       
        <div className="mb-10">
          <h2 className="retro-title text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
  WHAT I’M UP TO
</h2>

          <p className="text-ink/75 text-sm md:text-base mt-2">
            No freelance desk just yet but here's what I'm building and hanging around with.
          </p>
        </div>

        
        <div className="grid md:grid-cols-12 gap-7 items-start">
          
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="w-full max-w-[290px] aspect-[4/5] bg-[#2D3E5E] rounded-2xl border-2 border-ink shadow-hard p-6 flex flex-col justify-between relative overflow-hidden -rotate-2 hover:rotate-0 transition-transform duration-300">
              
              <div className="flex justify-between items-center text-white/60 text-xs font-mono">
                <span>// 2026</span>
                <span>✦ </span>
              </div>

              
              <div className="my-auto flex flex-col items-center justify-center relative">
              
                <div className="w-0.5 h-16 bg-white/80 -mt-10 mb-1"></div>

                <svg
                  viewBox="0 0 140 140"
                  className="w-32 h-32"
                  fill="none"
                  xmlns="http://w3.org"
                >
                  
                  <rect
                    x="42"
                    y="38"
                    width="56"
                    height="52"
                    rx="16"
                    fill="#F6D365"
                    stroke="#1C2536"
                    strokeWidth="3"
                  />
                  
                  <circle
                    cx="70"
                    cy="82"
                    r="24"
                    fill="#A8D5BA"
                    stroke="#1C2536"
                    strokeWidth="3"
                  />
                 
                  <circle cx="61" cy="84" r="5" fill="#1C2536" />
                  <circle cx="79" cy="84" r="5" fill="#1C2536" />
                  <circle cx="62" cy="82" r="1.5" fill="#FFFFFF" />
                  <circle cx="80" cy="82" r="1.5" fill="#FFFFFF" />
                  
                  <path
                    d="M65 73C68 70 72 70 75 73"
                    stroke="#1C2536"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                 
                  <circle
                    cx="70"
                    cy="34"
                    r="7"
                    fill="#A8D5BA"
                    stroke="#1C2536"
                    strokeWidth="2.5"
                  />
                </svg>

                <span className="mt-2 bg-sun text-ink text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-ink">
                  Debugging in progress...
                </span>
              </div>

              <div className="text-[10px] font-mono text-white/70 text-center">
                Flutter · React · Problem Solving
              </div>
            </div>

            <p className="text-xs text-ink/70 text-center mt-4 max-w-[250px]">
              Hanging around codebases and building mobile & web apps in 2026.
            </p>
          </div>

         
          <div className="md:col-span-8 space-y-6">
           
            <div className="grid sm:grid-cols-2 gap-6">
             
              <div className="bg-white rounded-2xl border-2 border-ink shadow-hard p-6">
                <h3 className="font-serif text-xl font-bold text-[#C85A32] mb-4">
                  Currently learning
                </h3>
                <ul className="space-y-2.5 text-sm text-ink/85">
                  {CURRENTLY_LEARNING.map((item) => (
                    <li key={item} className="leading-snug">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              
              <div className="bg-white rounded-2xl border-2 border-ink shadow-hard p-6">
                <h3 className="font-serif text-xl font-bold text-[#C85A32] mb-4">
                  Open to
                </h3>
                <ul className="space-y-3 text-sm text-ink/85">
                  {OPEN_TO.map((item) => (
                    <li key={item} className="leading-snug">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          
            <div className="bg-[#DCE3F2] rounded-2xl border-2 border-ink shadow-hard overflow-hidden grid sm:grid-cols-12">
             
              <div className="sm:col-span-5 bg-[#8AB6D6] border-b-2 sm:border-b-0 sm:border-r-2 border-ink p-5 flex items-center justify-center relative min-h-[150px]">
                
                <div className="w-36 h-24 bg-[#E8F1F5] rounded-lg border-2 border-ink flex flex-col items-center justify-between p-2 shadow-sm">
                  <div className="w-full flex justify-between items-center border-b border-ink/20 pb-1">
                    <span className="w-2 h-2 rounded-full bg-red-400 border border-ink"></span>
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-ink">
                      SERVICE DESK
                    </span>
                    <span className="w-2 h-2 rounded-full bg-sun border border-ink"></span>
                  </div>

                 
                  <div className="flex items-center gap-2 my-auto">
                    <span className="text-2xl">☕</span>
                    <div className="bg-sun border border-ink px-2 py-0.5 rounded text-[10px] font-extrabold uppercase -rotate-3">
                      BRB · CODING
                    </div>
                  </div>
                </div>
              </div>

             
              <div className="sm:col-span-7 p-6 flex flex-col justify-center">
                <h3 className="font-bold text-lg text-ink mb-1.5">
                  Services desk
                </h3>
                <p className="text-xs md:text-sm text-ink/80 leading-relaxed">
                  Closed for random freelance gigs right now. Software developer roles, collabs, and coffee chats are still accepted at the window.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

