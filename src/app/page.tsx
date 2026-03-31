import { Hero } from "@/components/ui/Hero";
import { Projects } from "@/components/ui/Projects";
import { Terminal } from "@/components/ui/Terminal";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { GithubHeatmap } from "@/components/ui/GithubHeatmap";

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans selection:bg-black/30 selection:text-black dark:selection:bg-white/30 dark:selection:text-white bg-white dark:bg-black overflow-x-hidden transition-colors duration-500">

      <FloatingNav />

      {/* Main Content Node */}
      <div className="relative z-20 w-full flex flex-col items-center bg-white dark:bg-black transition-colors duration-500">
        <Hero />

        {/* The Skill Map & Projects Ecosystem */}
        <div className="w-full bg-white dark:bg-black relative border-t border-black/10 dark:border-white/10 transition-colors duration-500">
          <Projects />

          {/* Interactive Hacker Terminal */}
          <Terminal />
        </div>
      </div>

      {/* High-Oomph Cinematic Footer */}
      <footer
        id="contact"
        className="py-24 md:py-32 bg-slate-50 dark:bg-[#030303] text-center relative z-10 border-t border-black/10 dark:border-white/10 overflow-hidden transition-colors duration-500"
      >
        {/* Aesthetic Background Orbs */}
        <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-[#10b981] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] bg-[#3b82f6] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />

        {/* The Interactive Github Contribution Matrix */}
        <GithubHeatmap />

        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10 hover:scale-[1.02] transition-transform duration-700">

          <div className="relative">
            {/* A subtle masking shadow behind the text to protect readability against the background grid */}
            <div className="absolute inset-0 bg-white/40 dark:bg-[#030303]/60 blur-3xl pointer-events-none" />
            <h2 className="relative text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-white/20 mb-12 drop-shadow-xl transition-colors duration-500">
              Let&apos;s Build.
            </h2>
          </div>

          {/* Glowing Magnetic Button Layer */}
          <div className="relative group">
            {/* The multi-color glow mask behind the button */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#10b981] via-[#3b82f6] to-[#8b5cf6] rounded-full blur-xl opacity-30 group-hover:opacity-100 transition-all duration-1000 group-hover:duration-300"></div>

            <a href="mailto:ammar23080@iiitd.ac.in" className="relative px-12 py-5 rounded-full bg-white dark:bg-black border border-black/10 dark:border-white/10 text-black dark:text-white font-black text-xl tracking-widest uppercase hover:bg-slate-100 dark:hover:bg-[#0a0a0a] transition-colors flex items-center gap-4 shadow-xl">
              <span>Contact Me</span>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-40 dark:opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-black dark:bg-white border border-black/50 dark:border-white/50"></span>
              </span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center w-full min-w-[300px] md:min-w-[800px] pt-16 mt-24 border-t border-black/10 dark:border-white/10 transition-colors duration-500">
            <p className="text-black/40 dark:text-white/40 text-sm font-medium tracking-wide mb-6 sm:mb-0">
              © {new Date().getFullYear()} AMMAR SAIFEE.
            </p>

            {/* Glass Icon Links */}
            <div className="flex justify-center gap-4 relative z-20">
              <a href="https://github.com/ammarsksk" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300 shadow-sm" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.5 6.5-7.1a5.1 5.1 0 0 0-1.4-3.6 4.9 4.9 0 0 0-.1-3.6s-1.1-.3-3.6 1.4a12.6 12.6 0 0 0-6.6 0C6.3 1.9 5.2 2.2 5.2 2.2a4.9 4.9 0 0 0-.1 3.6 5.1 5.1 0 0 0-1.4 3.6c0 5.6 3.3 6.7 6.5 7.1a4.8 4.8 0 0 0-1 3.02v4" /><path d="M9 20a5 5 0 0 1-5-2 5 5 0 0 1-1-4" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/ammar-saifee-khakhryawala7865" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md text-black/60 dark:text-white/60 hover:text-[#0a66c2] dark:hover:text-white hover:scale-110 transition-all duration-300 shadow-sm" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>

          </div>
        </div>
      </footer>
    </main>
  );
}
