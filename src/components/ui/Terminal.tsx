"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { InteractiveResume } from "./InteractiveResume";

export const Terminal = () => {
    const [history, setHistory] = useState([
        { cmd: "", output: "Welcome to Ammar OS v1.0.2\nType 'help' to see a list of available commands." }
    ]);
    const [input, setInput] = useState("");
    const [showResume, setShowResume] = useState(false);

    const terminalBodyRef = useRef<HTMLDivElement>(null);
    const isInitialMount = useRef(true);

    const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            let output = "";

            switch (cmd) {
                case "help":
                    output = "Available commands:\n  whoami    - Display user profile\n  resume    - Launch interactive CV\n  skills    - List core competencies\n  sudo      - Administrator privileges\n  repo      - Show source code url\n  clear     - Clear terminal window";
                    break;
                case "whoami":
                    output = "Ammar Saifee.\nRole: Software Engineer.\nSpecialization: Machine Learning, Distributed Systems, Full-Stack Architecture.";
                    break;
                case "skills":
                    output = "Loading tech stack...\n[████████████] 100%\n\n> Python, React, FastAPI, AWS Lambda\n> Node.js, Express, Deep Learning, AWS Rekognition\n> Pandas, Redis, Next.js, TCP/IP, Bedrock";
                    break;
                case "resume":
                    output = "Initializing interactive resume node...";
                    setShowResume(true);
                    break;
                case "sudo":
                    output = "ammar is not in the sudoers file. This incident will be reported.";
                    break;
                case "repo":
                    output = "Fetching repository...\nhttps://github.com/ammarsksk";
                    break;
                case "clear":
                    setHistory([]);
                    setInput("");
                    return;
                case "":
                    return;
                default:
                    output = `Command not found: ${cmd}. Type 'help' for available commands.`;
            }

            setHistory(prev => [...prev, { cmd, output }]);
            setInput("");
        }
    };

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        // Only scroll the internal terminal container, NEVER the global window!
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <section className="w-full max-w-5xl mx-auto my-24 px-4 relative z-20">

            {/* Structural Label */}
            <h2 className="text-xs font-bold tracking-[0.3em] text-black/30 dark:text-white/30 mb-8 uppercase text-center flex items-center justify-center gap-4 transition-colors duration-500">
                <div className="h-[1px] w-8 bg-black/20 dark:bg-white/20" />
                Developer Terminal
                <div className="h-[1px] w-8 bg-black/20 dark:bg-white/20" />
            </h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-slate-50/80 dark:bg-[#0a0a0a]/80 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-colors duration-500"
            >

                {/* MacOS Window Header */}
                <div className="flex items-center px-4 py-3 border-b border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 transition-colors duration-500">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="mx-auto text-xs font-mono font-medium text-black/40 dark:text-white/40 tracking-wider">
                        guest@ammar-os ~ bash
                    </div>
                </div>

                {/* Terminal Window */}
                <div
                    ref={terminalBodyRef}
                    className="p-6 h-[350px] md:h-[400px] overflow-y-auto font-mono text-sm md:text-base cursor-text selection:bg-black/20 dark:selection:bg-white/20 scroll-smooth css-scrollbar-hide"
                    onClick={() => document.getElementById("terminal-input")?.focus()}
                >
                    {history.map((h, i) => (
                        <div key={i} className="mb-6">
                            {h.cmd && (
                                <div className="text-black/60 dark:text-white/60 mb-2 font-medium flex items-center gap-2">
                                    <span className="text-[#27c93f]">➜</span>
                                    <span className="text-[#3b82f6]">~</span>
                                    {h.cmd}
                                </div>
                            )}
                            <div className="text-black/80 dark:text-white/80 leading-relaxed whitespace-pre-wrap">{h.output}</div>
                        </div>
                    ))}

                    <div className="flex items-center text-black/60 dark:text-white/60 font-medium pb-2">
                        <span className="text-[#27c93f]">➜</span>
                        <span className="text-[#3b82f6] ml-2 mr-2">~</span>
                        <input
                            id="terminal-input"
                            type="text"
                            autoComplete="off"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={handleCommand}
                            spellCheck={false}
                            className="flex-1 bg-transparent border-none outline-none text-black dark:text-white font-medium caret-black dark:caret-white"
                        />
                    </div>
                </div>

            </motion.div>

            {/* The Global Interactive Resume Inject */}
            <InteractiveResume isOpen={showResume} onClose={() => setShowResume(false)} />

        </section>
    );
};
