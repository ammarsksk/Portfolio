"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const DocSearchSim = ({ isActive }: { isActive: boolean }) => {
    const [logs, setLogs] = useState<{ text: string, type: 'system' | 'user' | 'ai' }[]>([
        { text: "DocSearch RAG Engine Initialized.", type: "system" },
        { text: "Connect to MinIO: OK\nConnect to Ollama: OK", type: "system" }
    ]);
    const [input, setInput] = useState("");
    const terminalBodyRef = useRef<HTMLDivElement>(null);
    const isInitialMount = useRef(true);
    const [isProcessing, setIsProcessing] = useState(false);

    // Auto-scroll bound strictly to internal container to prevent global window jumping
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [logs]);

    // Reset when card goes to background
    useEffect(() => {
        if (!isActive) {
            setLogs([
                { text: "System idling... awaiting query.", type: "system" }
            ]);
            setIsProcessing(false);
            setInput("");
        }
    }, [isActive]);

    const handleQuery = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && input.trim() && !isProcessing) {
            const q = input.trim();
            setInput("");
            setIsProcessing(true);

            setLogs(p => [...p, { text: q, type: 'user' }]);

            // Simulate RAG Pipeline Delays
            await new Promise(r => setTimeout(r, 400));
            setLogs(p => [...p, { text: "> Embedding query via encoder...", type: 'system' }]);

            await new Promise(r => setTimeout(r, 600));
            setLogs(p => [...p, { text: "> Fetching spatial nearest-neighbors from MinIO...", type: 'system' }]);

            await new Promise(r => setTimeout(r, 800));
            setLogs(p => [...p, { text: "> Context extracted. Passing to Ollama inference...", type: 'system' }]);

            await new Promise(r => setTimeout(r, 1200));
            setLogs(p => [...p, { text: `Analyzed document architecture for: "${q}". The RAG pipeline isolated 4 strict context matches.`, type: 'ai' }]);

            setIsProcessing(false);
        }
    };

    return (
        <div
            className="flex-1 w-full bg-[#0a0a0a] rounded-xl border border-white/10 mt-6 relative overflow-hidden flex flex-col font-mono text-[10px] md:text-xs"
            onClick={(e) => e.stopPropagation()} // Stop global 3D Card Github redirect
            onPointerDown={(e) => e.stopPropagation()}
        >

            {/* Header */}
            <div className="bg-white/5 border-b border-white/10 px-3 py-1.5 flex items-center justify-between">
                <span className="text-white/50 tracking-wider">neural-search.exe</span>
                {isProcessing && <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-2 h-2 border-t border-r border-[#10b981] rounded-full" />}
            </div>

            {/* Console Area */}
            <div ref={terminalBodyRef} className="flex-1 p-3 overflow-y-auto css-scrollbar-hide text-white/80 scroll-smooth">
                {logs.map((log, i) => (
                    <div key={i} className={`mb-2 ${log.type === 'user' ? 'text-[#3b82f6]' : log.type === 'ai' ? 'text-[#10b981] leading-relaxed' : 'text-white/40'}`}>
                        {log.type === 'user' ? `query $ ` : ''}{log.text}
                    </div>
                ))}
                {!isProcessing && (
                    <div className="flex items-center text-[#3b82f6] mt-2">
                        query $ <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={handleQuery}
                            placeholder="Ask paper..."
                            className="flex-1 bg-transparent outline-none ml-2 text-white placeholder-white/20"
                        />
                    </div>
                )}
            </div>

            {/* Click Intercept Block (Prevents Matrix Swiping when typing) */}
            <div className="absolute inset-0 pointer-events-none" />
            <style dangerouslySetInnerHTML={{
                __html: `
        .css-scrollbar-hide::-webkit-scrollbar { display: none; }
        .css-scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
        </div>
    );
};
