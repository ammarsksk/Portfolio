"use client";
import { motion } from "framer-motion";

export const Hero = () => {
    // Multi-dimensional array to enforce absolute word-wrapping boundaries
    const words = ["Ammar", "Saifee."];
    let globalCharIndex = 0;

    return (
        // Outer section height reduced drastically from 140vh to 115vh. 
        // This maintains a premium sticky scroll effect but completely eliminates the massive gap before Projects.
        <section className="relative h-[115vh] w-full bg-white dark:bg-black transition-colors duration-1000 border-b border-black/5 dark:border-white/5">

            {/* Native Sticky Wrapper: Frozen on screen for 15vh of scroll travel.
          Added pt-24 (padding-top) to physically push all content down, guaranteeing it is never hidden behind the top Nav bar! */}
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center text-center px-4 pt-24">

                {/* CPU-friendly simple background gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none transition-colors duration-1000" />

                <div className="relative z-10 flex flex-col items-center max-w-5xl">

                    {/* Floating Developer Tag */}
                    <motion.span
                        initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="px-6 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/50 text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-3"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-40 dark:opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white"></span>
                        </span>
                        Software Engineer
                    </motion.span>

                    {/* Blur Text Sequence for the Name */}
                    <h1 className="text-[5rem] md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-none flex flex-wrap justify-center gap-x-[1.5rem] md:gap-x-[2.5rem] mb-8">
                        {words.map((word, wordIndex) => {
                            return (
                                <span key={wordIndex} className="inline-flex whitespace-nowrap">
                                    {word.split("").map((char) => {
                                        const currentIndex = globalCharIndex++;
                                        return (
                                            <motion.span
                                                key={currentIndex}
                                                initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
                                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                                transition={{
                                                    duration: 1.5,
                                                    ease: [0.16, 1, 0.3, 1],
                                                    delay: currentIndex * 0.08
                                                }}
                                                className="text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-white/20 drop-shadow-xl transition-colors duration-500"
                                            >
                                                {char}
                                            </motion.span>
                                        );
                                    })}
                                </span>
                            );
                        })}
                    </h1>

                    {/* Blur Text Sequence for Description */}
                    <motion.p
                        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                        className="text-lg md:text-2xl text-black/60 dark:text-white/40 font-light max-w-3xl leading-relaxed text-balance"
                    >
                        Engineering highly scalable backend systems, pure-performance AI pipelines, and seamless digital ecosystems.
                    </motion.p>

                    <motion.a
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                        href="#projects"
                        className="mt-10 md:mt-12 group flex items-center justify-center gap-4 px-8 py-4 rounded-full border border-black/10 dark:border-white/10 bg-black dark:bg-white text-white dark:text-black font-bold tracking-widest uppercase hover:scale-105 transition-transform duration-300 shadow-xl"
                    >
                        <span>Explore Projects</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};
