"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
    {
        id: "docsearch",
        title: "DocSearch",
        desc: "A highly resilient, full-stack Retrieval-Augmented Generation pipeline using MinIO for object storage and Ollama for isolated NLP inference.",
        tech: ["Python", "React", "FastAPI", "Machine Learning"],
        github: "https://github.com/ammarsksk/DocSearch"
    },
    {
        id: "bimasathi",
        title: "BimaSathi",
        desc: "Verification backend for crop damage assessment. Built an isolation module mapped to Node.js and AWS Lambda to process high-throughput imagery using PyTorch models.",
        tech: ["Node.js", "AWS Lambda", "Deep Learning", "PyTorch"],
        github: "https://github.com/ammarsksk/BimaSathi"
    },
    {
        id: "txcat",
        title: "TxCat Engine",
        desc: "Distributed NLP categorization engine backed by Redis. Designed to process and normalize 1M+ unstructured datasets dynamically.",
        tech: ["Redis", "Pandas", "Python", "NLP"],
        github: "https://github.com/ammarsksk/GHCI"
    }
];

const skills = [
    "Python", "React", "FastAPI", "Node.js", "AWS Lambda",
    "Redis", "Pandas", "NLP", "Machine Learning",
    "Deep Learning", "PyTorch"
];

export const Projects = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const [activeIdx, setActiveIdx] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => setIsClient(true), []);

    const nextSlide = () => setActiveIdx((p) => (p + 1) % projects.length);
    const prevSlide = () => setActiveIdx((p) => (p - 1 + projects.length) % projects.length);

    if (!isClient) return <div className="min-h-screen bg-white dark:bg-black" />;

    return (
        <section id="projects" className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-white dark:bg-black transition-colors duration-500 py-12 px-6 border-t border-black/10 dark:border-white/10">

            {/* The Skill Map (Compact Top Section) */}
            <div className="z-20 w-full max-w-4xl mb-8 flex flex-col items-center">
                <h2 className="text-xs font-bold tracking-[0.3em] text-black/30 dark:text-white/30 mb-8 uppercase text-center flex items-center gap-4 transition-colors duration-500">
                    <div className="h-[1px] w-8 bg-black/20 dark:bg-white/20" />
                    Projects
                    <div className="h-[1px] w-8 bg-black/20 dark:bg-white/20" />
                </h2>

                <div className="flex flex-wrap justify-center gap-2">
                    {skills.map(s => {
                        const isActive = hoveredSkill === s;
                        return (
                            <button
                                key={s}
                                onMouseEnter={() => setHoveredSkill(s)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                className={`px-4 py-1.5 rounded-full border text-[11px] md:text-xs font-mono tracking-wide transition-all duration-300 backdrop-blur-sm cursor-pointer
                                ${isActive
                                        ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black scale-110 z-10 shadow-lg"
                                        : "border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                                    }`}
                            >
                                {s}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* The 3D Coverflow Carousel */}
            <div className="relative z-10 w-full max-w-7xl h-[400px] md:h-[450px] flex items-center justify-center [perspective:1200px] mt-4">

                {projects.map((p, idx) => {
                    let diff = idx - activeIdx;
                    if (diff > projects.length / 2) diff -= projects.length;
                    if (diff < -projects.length / 2) diff += projects.length;

                    const isDimmed = hoveredSkill && !p.tech.includes(hoveredSkill);
                    const isHighlighted = hoveredSkill && p.tech.includes(hoveredSkill);
                    const isActiveCard = Math.abs(diff) === 0;

                    // 3D Math Magic
                    const xOffset = diff * 220; // Tight horizontal overlap
                    const zOffset = Math.abs(diff) * -200; // Deep recession
                    const rotateY = diff * -30; // Dramatic angle

                    // Hide items completely if they are too far back
                    const isVisible = Math.abs(diff) <= 2;
                    const opacity = !isVisible ? 0 : (isDimmed ? 0.1 : (isActiveCard ? 1 : 0.4));

                    const zIndex = 10 - Math.abs(diff);

                    return (
                        <motion.div
                            key={p.id}
                            animate={{
                                x: xOffset,
                                z: zOffset,
                                rotateY: rotateY,
                                opacity: opacity,
                                scale: isDimmed ? 0.95 : 1,
                                borderColor: isHighlighted ? "rgba(128,128,128,0.6)" : "rgba(128,128,128,0.1)"
                            }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={isActiveCard ? { scale: 1.02, y: -5, transition: { duration: 0.2 } } : {}}
                            className={`absolute w-[300px] md:w-[400px] h-[340px] md:h-[400px] rounded-3xl border bg-slate-50/90 dark:bg-[#0a0a0a]/90 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-8 transition-shadow group shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden cursor-pointer
                                ${isActiveCard ? "hover:shadow-2xl dark:hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] hover:border-black/30 dark:hover:border-white/30" : ""}`
                            }
                            style={{
                                transformStyle: "preserve-3d",
                                zIndex,
                                pointerEvents: isVisible ? "auto" : "none"
                            }}
                            onClick={() => {
                                if (!isActiveCard) {
                                    setActiveIdx(idx); // Bring to front
                                } else if (p.github) {
                                    window.open(p.github, "_blank"); // Open repo directly if already active
                                }
                            }}
                        >
                            {/* Content Layer */}
                            <div className="flex flex-col h-full justify-between relative z-10 transition-opacity duration-500" style={{ opacity: isActiveCard ? 1 : 0.4 }}>
                                <div>
                                    <h3 className="text-2xl md:text-4xl font-black tracking-tighter text-black dark:text-white mb-4 line-clamp-2">{p.title}</h3>
                                    <p className="text-xs md:text-sm text-black/60 dark:text-white/50 leading-relaxed font-light">{p.desc}</p>
                                </div>

                                <div className="mt-6">
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {p.tech.map(t => (
                                            <span key={t} className={`text-[9px] md:text-[10px] font-mono tracking-widest uppercase px-2 py-1 rounded border transition-all duration-300
                                            ${t === hoveredSkill
                                                    ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black"
                                                    : "border-black/10 dark:border-white/10 text-black/50 dark:text-white/40 bg-transparent"
                                                }`}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={p.github || "#"}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-black dark:text-white hover:opacity-60 transition-colors"
                                    >
                                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.5 6.5-7.1a5.1 5.1 0 0 0-1.4-3.6 4.9 4.9 0 0 0-.1-3.6s-1.1-.3-3.6 1.4a12.6 12.6 0 0 0-6.6 0C6.3 1.9 5.2 2.2 5.2 2.2a4.9 4.9 0 0 0-.1 3.6 5.1 5.1 0 0 0-1.4 3.6c0 5.6 3.3 6.7 6.5 7.1a4.8 4.8 0 0 0-1 3.02v4" /><path d="M9 20a5 5 0 0 1-5-2 5 5 0 0 1-1-4" /></svg>
                                        View Code
                                    </a>
                                </div>
                            </div>

                            {/* Click blocker if not active slide */}
                            {!isActiveCard && (
                                <div className="absolute inset-0 z-20" />
                            )}
                        </motion.div>
                    )
                })}
            </div>

            {/* Slider Controls */}
            <div className="z-20 flex items-center justify-center gap-6 mt-8">
                <button onClick={prevSlide} className="p-3 rounded-full border border-black/10 dark:border-white/10 text-black/50 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-colors backdrop-blur-sm shadow-xl cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button onClick={nextSlide} className="p-3 rounded-full border border-black/10 dark:border-white/10 text-black/50 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-colors backdrop-blur-sm shadow-xl cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
            </div>

        </section>
    )
}
