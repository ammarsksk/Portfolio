"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export const InteractiveResume = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/40 dark:bg-black/60"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ y: 100, scale: 0.9, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 50, opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0a0a0a] rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl overflow-y-auto css-scrollbar-hide relative flex flex-col"
                    >
                        {/* Header Section */}
                        <div className="sticky top-0 z-20 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-black/10 dark:border-white/10 px-8 py-6 flex justify-between items-center">
                            <div>
                                <h2 className="text-3xl font-black tracking-tighter text-black dark:text-white">Ammar Khakhryawala</h2>
                                <div className="flex items-center gap-3 mt-1 cursor-default flex-wrap">
                                    <p className="text-xs md:text-sm font-mono tracking-widest text-[#3b82f6] uppercase">Software Engineer</p>
                                    <div className="w-1 h-1 rounded-full bg-black/20 dark:bg-white/20 hidden sm:block" />
                                    <a href="mailto:ammar23080@iiitd.ac.in" className="text-xs font-mono text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">+91-9310257659 | ammar23080@iiitd.ac.in</a>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <a href="https://github.com/ammarsksk" target="_blank" rel="noreferrer" className="hidden sm:flex text-xs font-mono uppercase tracking-widest text-[#3b82f6] hover:opacity-70 transition-colors items-center gap-2">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.5 6.5-7.1a5.1 5.1 0 0 0-1.4-3.6 4.9 4.9 0 0 0-.1-3.6s-1.1-.3-3.6 1.4a12.6 12.6 0 0 0-6.6 0C6.3 1.9 5.2 2.2 5.2 2.2a4.9 4.9 0 0 0-.1 3.6 5.1 5.1 0 0 0-1.4 3.6c0 5.6 3.3 6.7 6.5 7.1a4.8 4.8 0 0 0-1 3.02v4" /><path d="M9 20a5 5 0 0 1-5-2 5 5 0 0 1-1-4" /></svg>
                                    Github
                                </a>
                                <a href="https://www.linkedin.com/in/ammar-saifee-khakhryawala7865" target="_blank" rel="noreferrer" className="hidden sm:flex text-xs font-mono uppercase tracking-widest text-[#3b82f6] hover:opacity-70 transition-colors items-center gap-2">
                                    LinkedIn
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-2 ml-4 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-black/50 dark:text-white/50 transition-colors"
                                >
                                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M18 6L6 18M6 6l12 12" /></svg>
                                </button>
                            </div>
                        </div>

                        {/* Interactive Body */}
                        <div className="p-8 space-y-12 shrink-0">

                            {/* Education Node */}
                            <section>
                                <h3 className="text-xs font-bold tracking-[0.2em] text-black/30 dark:text-white/30 uppercase mb-6 flex items-center gap-4">
                                    <div className="h-[1px] w-6 bg-black/20 dark:bg-white/20" /> Education
                                </h3>
                                <div className="space-y-4">
                                    <motion.div whileHover={{ scale: 1.01 }} className="p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-default relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b82f6]/5 rounded-full blur-3xl group-hover:bg-[#3b82f6]/10 transition-colors" />
                                        <div className="flex justify-between items-start mb-2 relative z-10">
                                            <h4 className="text-lg font-bold text-black dark:text-white"><span className="text-sm font-light text-black/60 dark:text-white/60 block mb-1">Indraprastha Institute of Information Technology (IIITD), Delhi, India</span>B.Tech in Computer Science and Engineering</h4>
                                            <span className="text-xs font-mono text-black/40 dark:text-white/40 border border-black/10 dark:border-white/10 rounded-full px-3 py-1 whitespace-nowrap ml-4">2023 - Present</span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 relative z-10">
                                            <div className="text-xs font-mono text-[#3b82f6] bg-[#3b82f6]/10 px-2 py-1 rounded border border-[#3b82f6]/20">CGPA: 7.82</div>
                                            <p className="text-xs text-black/60 dark:text-white/50 leading-relaxed font-mono">Courses: DSA, OS, DBMS, Networks, Discrete Math, ADA, Probability/Stats, Machine Learning</p>
                                        </div>
                                    </motion.div>

                                    <motion.div whileHover={{ scale: 1.01 }} className="p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-default relative overflow-hidden group">
                                        <div className="flex justify-between items-start mb-2 relative z-10">
                                            <h4 className="text-base font-bold text-black dark:text-white"><span className="text-sm font-light text-black/60 dark:text-white/60 block mb-1">Indian High School Dubai, UAE</span>CBSE 12th Board</h4>
                                            <span className="text-xs font-mono text-black/40 dark:text-white/40 border border-black/10 dark:border-white/10 rounded-full px-3 py-1 whitespace-nowrap ml-4">2022 - 2023</span>
                                        </div>
                                        <p className="text-xs text-black/50 dark:text-white/40 mt-1 font-mono">Percentage: 94.4%</p>
                                    </motion.div>
                                </div>
                            </section>

                            {/* Experience Node */}
                            <section>
                                <h3 className="text-xs font-bold tracking-[0.2em] text-black/30 dark:text-white/30 uppercase mb-6 flex items-center gap-4">
                                    <div className="h-[1px] w-6 bg-[#10b981]/40" /> Experience
                                </h3>
                                <div className="space-y-4">
                                    <motion.div whileHover={{ x: 10 }} className="relative group cursor-default transition-transform pl-4 border-l border-[#10b981]/20 ml-3">
                                        <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-neutral-800 group-hover:bg-[] dark:group-hover:bg-[] transition-colors shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#0a0a0a]" />
                                        <div className="flex justify-between items-start mb-2 pt-0.5">
                                            <h4 className="text-lg font-bold text-black dark:text-white">Zhylar Technologies <span className="text-sm font-light text-black/60 dark:text-white/60 ml-2 block sm:inline">| SWE Intern (Industrial)</span></h4>
                                            <span className="text-xs font-mono text-black/40 dark:text-white/40 border border-black/10 dark:border-white/10 rounded-full px-3 py-1 whitespace-nowrap uppercase tracking-widest bg-black/5 dark:bg-white/5">May 2025 - Jul 2025</span>
                                        </div>
                                        <ul className="list-disc pl-4 text-sm text-black/60 dark:text-white/60 leading-relaxed mb-4 max-w-2xl space-y-2 marker:text-black/30 dark:marker:text-white/30">
                                            <li>Worked on backend development using <strong>AWS Lambda</strong> and related cloud services; supported internal tooling and feature delivery.</li>
                                            <li>Developed and validated <strong>REST APIs</strong> and optimized SQL queries (joins, aggregations) for analysis and reporting workflows. Built <strong>Cypress</strong> end-to-end tests to automate critical UI flows and reduce manual QA overhead.</li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </section>

                            {/* Projects Node */}
                            <section>
                                <h3 className="text-xs font-bold tracking-[0.2em] text-black/30 dark:text-white/30 uppercase mb-6 flex items-center gap-4">
                                    <div className="h-[1px] w-6 bg-black/20 dark:bg-white/20" /> Software Projects
                                </h3>

                                <div className="space-y-10 pl-4 border-l border-black/10 dark:border-white/10 ml-3">

                                    <motion.div whileHover={{ x: 10 }} className="relative group cursor-default transition-transform">
                                        <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-neutral-800 group-hover:bg-[] dark:group-hover:bg-[] transition-colors shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#0a0a0a]" />
                                        <div className="flex justify-between items-start mb-2 pt-0.5">
                                            <h4 className="text-lg font-bold text-black dark:text-white">DocSearch (RAG Pipeline)</h4>
                                            <span className="text-xs font-mono text-black/40 dark:text-white/40 border border-black/10 dark:border-white/10 rounded-full px-3 py-1 whitespace-nowrap">Sep '25 - Dec '25</span>
                                        </div>
                                        <ul className="list-disc pl-4 text-sm text-black/60 dark:text-white/60 leading-relaxed mb-4 max-w-2xl space-y-2 marker:text-black/30 dark:marker:text-white/30">
                                            <li>Built an end-to-end RAG pipeline with document ingestion, indexing, and QA using <strong>sentence-transformers</strong> with object storage, vector DB, and search index for low-latency retrieval.</li>
                                            <li>Implemented hybrid retrieval and reranking (bge-reranker) and tracked experiments with prompt/context traceability for debugging and evaluation.</li>
                                        </ul>
                                        <div className="flex justify-between items-center pr-4">
                                            <div className="flex gap-2 flex-wrap">
                                                {["FastAPI", "Postgres/pgvector", "OpenSearch", "MinIO", "Ollama", "RAG"].map(s => (
                                                    <span key={s} className="text-[10px] font-mono tracking-wider px-2 py-1 rounded bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60">{s}</span>
                                                ))}
                                            </div>
                                            <a href="https://github.com/ammarsksk" target="_blank" rel="noreferrer" className="text-[10px] uppercase font-bold tracking-widest text-[#3b82f6] hover:opacity-70 flex items-center gap-2 transition-opacity">
                                                VIEW ON GITHUB <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div whileHover={{ x: 10 }} className="relative group cursor-default transition-transform">
                                        <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-neutral-800 group-hover:bg-[] dark:group-hover:bg-[] transition-colors shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#0a0a0a]" />
                                        <div className="flex justify-between items-start mb-2 pt-0.5">
                                            <h4 className="text-lg font-bold text-black dark:text-white">Intelligent Interruption Handling</h4>
                                            <span className="text-xs font-mono text-black/40 dark:text-white/40 border border-black/10 dark:border-white/10 rounded-full px-3 py-1 whitespace-nowrap">Dec '25 - Jan '26</span>
                                        </div>
                                        <ul className="list-disc pl-4 text-sm text-black/60 dark:text-white/60 leading-relaxed mb-4 max-w-2xl space-y-2 marker:text-black/30 dark:marker:text-white/30">
                                            <li>Implemented a low-latency pending interruption gate (300 ms) to reduce false Voice-Active Detection overlaps from backchannel words during Text-To-Speech while still interrupting immediately on clear stop intents.</li>
                                            <li>Added configurable ignore/interrupt wordlists with backchannel normalization, shipped unit and regression tests, and validated behavior via automated cases.</li>
                                        </ul>
                                        <div className="flex justify-between items-center pr-4">
                                            <div className="flex gap-2 flex-wrap">
                                                {["Python", "LiveKit Agents", "Deepgram", "Silero VAD", "Ollama/OpenAI"].map(s => (
                                                    <span key={s} className="text-[10px] font-mono tracking-wider px-2 py-1 rounded bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60">{s}</span>
                                                ))}
                                            </div>
                                            <a href="https://github.com/ammarsksk" target="_blank" rel="noreferrer" className="text-[10px] uppercase font-bold tracking-widest text-[#3b82f6] hover:opacity-70 flex items-center gap-2 transition-opacity">
                                                VIEW ON GITHUB <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div whileHover={{ x: 10 }} className="relative group cursor-default transition-transform">
                                        <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-neutral-800 group-hover:bg-[] dark:group-hover:bg-[] transition-colors shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#0a0a0a]" />
                                        <div className="flex justify-between items-start mb-2 pt-0.5">
                                            <h4 className="text-lg font-bold text-black dark:text-white">Txcat - Transaction Categorization</h4>
                                            <span className="text-xs font-mono text-black/40 dark:text-white/40 border border-black/10 dark:border-white/10 rounded-full px-3 py-1 whitespace-nowrap">Oct '25 - Nov '25</span>
                                        </div>
                                        <ul className="list-disc pl-4 text-sm text-black/60 dark:text-white/60 leading-relaxed mb-4 max-w-2xl space-y-2 marker:text-black/30 dark:marker:text-white/30">
                                            <li>Built a transaction categorization web app that maps UPI/card descriptions into a 50+ label taxonomy.</li>
                                            <li>Implemented asynchronous processing and containerization for local deployment; trained a hierarchical ML classifier achieving 96.6% accuracy.</li>
                                        </ul>
                                        <div className="flex justify-between items-center pr-4">
                                            <div className="flex gap-2 flex-wrap">
                                                {["FastAPI", "Redis", "Celery", "NumPy", "Pandas", "Docker"].map(s => (
                                                    <span key={s} className="text-[10px] font-mono tracking-wider px-2 py-1 rounded bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60">{s}</span>
                                                ))}
                                            </div>
                                            <a href="https://github.com/ammarsksk" target="_blank" rel="noreferrer" className="text-[10px] uppercase font-bold tracking-widest text-[#3b82f6] hover:opacity-70 flex items-center gap-2 transition-opacity">
                                                VIEW ON GITHUB <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div whileHover={{ x: 10 }} className="relative group cursor-default transition-transform">
                                        <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-neutral-800 group-hover:bg-[] dark:group-hover:bg-[] transition-colors shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#0a0a0a]" />
                                        <div className="flex justify-between items-start mb-2 pt-0.5">
                                            <h4 className="text-lg font-bold text-black dark:text-white">BimaSathi</h4>
                                            <span className="text-xs font-mono text-black/40 dark:text-white/40 border border-black/10 dark:border-white/10 rounded-full px-3 py-1 whitespace-nowrap">Jan '26 - Mar '26</span>
                                        </div>
                                        <ul className="list-disc pl-4 text-sm text-black/60 dark:text-white/60 leading-relaxed mb-4 max-w-2xl space-y-2 marker:text-black/30 dark:marker:text-white/30">
                                            <li>Built a serverless, secure WhatsApp-first crop insurance assistant with support for 7 languages, enabling guided claim filing, tracking, appeals, and operator workflows.</li>
                                            <li>Implemented AI pipelines for OCR, speech-to-text, insurer form auto-fill, PDF claim-pack generation, and identity/photo verification.</li>
                                        </ul>
                                        <div className="flex justify-between items-center pr-4">
                                            <div className="flex gap-2 flex-wrap">
                                                {["Node.js", "AWS Lambda", "Bedrock", "Rekognition", "Twilio", "DynamoDB"].map(s => (
                                                    <span key={s} className="text-[10px] font-mono tracking-wider px-2 py-1 rounded bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60">{s}</span>
                                                ))}
                                            </div>
                                            <a href="https://github.com/ammarsksk" target="_blank" rel="noreferrer" className="text-[10px] uppercase font-bold tracking-widest text-[#3b82f6] hover:opacity-70 flex items-center gap-2 transition-opacity">
                                                VIEW ON GITHUB <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                            </a>
                                        </div>
                                    </motion.div>

                                </div>
                            </section>

                            {/* Combined End Nodes (Skills / Achievements) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-black/10 dark:border-white/10">
                                <section>
                                    <h3 className="text-[10px] font-bold tracking-[0.2em] text-black/30 dark:text-white/30 uppercase mb-4 flex items-center gap-3">
                                        <div className="h-[1px] w-4 bg-black/20 dark:bg-white/20" /> Technical Languages & Tools
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "SQL", "ReactJS", "Node.js", "FastAPI", "Docker", "Redis", "AWS Lambda", "Cypress"].map(s => (
                                            <span key={s} className="text-xs font-mono px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-black/70 dark:text-white/70 shadow-sm bg-black/5 dark:bg-white/5">{s}</span>
                                        ))}
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-[10px] font-bold tracking-[0.2em] text-black/30 dark:text-white/30 uppercase mb-4 flex items-center gap-3">
                                        <div className="h-[1px] w-4 bg-black/20 dark:bg-white/20" /> Awards & Achievements
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex gap-3">
                                            <div>
                                                <p className="text-xs text-black/60 dark:text-white/60 leading-relaxed"><strong className="text-black dark:text-white font-medium">AI for Bharat:</strong> Top 300 among 30,000 teams across India.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div>
                                                <p className="text-xs text-black/60 dark:text-white/60 leading-relaxed"><strong className="text-black dark:text-white font-medium">GHCI Hackathon 2025:</strong> Advanced to Round 2 among 5000+ teams.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div>
                                                <p className="text-xs text-black/60 dark:text-white/60 leading-relaxed"><strong className="text-black dark:text-white font-medium">Codeforces:</strong> Specialist (Rating 1461).</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};
