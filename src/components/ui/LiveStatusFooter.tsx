"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const LiveStatusFooter = () => {
    const [time, setTime] = useState<string>("");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            const formatter = new Intl.DateTimeFormat("en-US", {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            });
            setTime(formatter.format(date));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText("ammar23080@iiitd.ac.in");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer
            id="contact"
            className="py-24 md:py-32 bg-slate-50 dark:bg-[#030303] flex flex-col items-center relative z-10 border-t border-black/10 dark:border-white/10 overflow-hidden transition-colors duration-500"
        >
            {/* Cinematic Background Gradients */}
            <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-[#10b981] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] bg-[#3b82f6] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />

            <div className="max-w-4xl w-full mx-auto px-6 flex flex-col items-center relative z-10">

                {/* Massive Typography Backdrop */}
                <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-white/20 mb-16 drop-shadow-xl transition-colors duration-500 text-center">
                    Let&apos;s Build.
                </h2>

                {/* The Live Status Glass Command Center */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-full bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden"
                >
                    {/* Context Header */}
                    <div className="px-6 py-5 border-b border-black/10 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center bg-black/5 dark:bg-white/5 gap-4">
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10b981]"></span>
                            </span>
                            <p className="text-sm font-mono text-black/70 dark:text-white/70">Available for 2026 Roles</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" className="text-black/40 dark:text-white/40"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            <p className="text-sm font-mono text-black/50 dark:text-white/50 w-24 text-right">
                                {time ? time : "SYNCING..."}
                            </p>
                        </div>
                    </div>

                    {/* Action Grid Rows */}
                    <div className="flex flex-col">

                        <button
                            onClick={handleCopy}
                            className="group relative flex items-center justify-between px-6 py-5 border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-left"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-black/5 dark:bg-white/5 rounded-xl group-hover:bg-white dark:group-hover:bg-black transition-colors border border-black/10 dark:border-white/10">
                                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" className="text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-black dark:text-white">Email Address</p>
                                    <p className="text-xs font-mono text-black/50 dark:text-white/50 mt-0.5">ammar23080@iiitd.ac.in</p>
                                </div>
                            </div>
                            <span className="text-xs font-bold tracking-widest uppercase text-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity">
                                {copied ? "COPIED!" : "COPY"}
                            </span>
                        </button>

                        <a
                            href="https://github.com/ammarsksk"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative flex items-center justify-between px-6 py-5 border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-black/5 dark:bg-white/5 rounded-xl group-hover:bg-white dark:group-hover:bg-black transition-colors border border-black/10 dark:border-white/10">
                                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" className="text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-black dark:text-white">GitHub Profile</p>
                                    <p className="text-xs font-mono text-black/50 dark:text-white/50 mt-0.5">/ammarsksk</p>
                                </div>
                            </div>
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" className="text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-colors group-hover:translate-x-1 transform duration-300"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ammar-saifee-khakhryawala7865"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative flex items-center justify-between px-6 py-5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-black/5 dark:bg-white/5 rounded-xl group-hover:bg-white dark:group-hover:bg-black transition-colors border border-black/10 dark:border-white/10">
                                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" className="text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-black dark:text-white">LinkedIn Network</p>
                                    <p className="text-xs font-mono text-black/50 dark:text-white/50 mt-0.5">/ammar-saifee-khakhryawala7865</p>
                                </div>
                            </div>
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" className="text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-colors group-hover:translate-x-1 transform duration-300"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </a>

                    </div>
                </motion.div>

                {/* Subfooter Meta */}
                <div className="flex justify-center items-center w-full pt-12 mt-16 border-t border-black/10 dark:border-white/10 transition-colors duration-500">
                    <p className="text-black/40 dark:text-white/40 text-xs font-mono tracking-widest uppercase">
                        © {new Date().getFullYear()} AMMAR SAIFEE.
                    </p>
                </div>
            </div>
        </footer>
    );
};
