"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const TxCatSim = ({ isActive }: { isActive: boolean }) => {
    const [logs, setLogs] = useState<{ id: number, hash: string, time: number }[]>([]);
    const [reqSec, setReqSec] = useState(12400);

    // Hyper-fast Redis polling simulation 
    // ONLY runs when card is deeply active to save critical CPU cycles!
    useEffect(() => {
        if (!isActive) return;

        const interval = setInterval(() => {
            // Fluctuating throughput gauge
            setReqSec(prev => prev + Math.floor((Math.random() - 0.5) * 800));

            // Append fast mock JSON logs
            setLogs(prev => {
                const newLog = {
                    id: Math.floor(Math.random() * 9999),
                    hash: Math.random().toString(36).substring(2, 10),
                    time: Date.now() % 1000
                };
                const next = [...prev, newLog];
                // Keep array ruthlessly small to prevent memory leaks
                if (next.length > 10) next.shift();
                return next;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [isActive]);

    return (
        <div
            className="flex-1 w-full bg-[#0a0a0a] rounded-xl border border-white/10 mt-6 relative overflow-hidden flex flex-col p-4"
            onClick={(e) => e.stopPropagation()} // Stop Github hijack!
            onPointerDown={(e) => e.stopPropagation()}
        >

            {/* The Metrics Dashboard */}
            <div className="flex justify-between items-end mb-4 border-b border-white/10 pb-4">
                <div>
                    <div className="text-[9px] uppercase tracking-widest text-[#3b82f6] font-mono mb-1">Redis Multi-Node Stream</div>
                    <div className="text-2xl font-black text-white font-mono flex items-center gap-2">
                        {isActive ? reqSec.toLocaleString() : "0"}
                        <span className="text-[10px] text-white/40 uppercase tracking-widest font-normal">req/s</span>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-[9px] uppercase tracking-widest text-white/30 font-mono mb-1">P99 Latency</div>
                    <div className="text-lg font-bold text-[#10b981] font-mono">{isActive ? "2.4" : "0.0"}<span className="text-[10px] text-[#10b981]/50 ml-1">ms</span></div>
                </div>
            </div>

            {/* Rushing JSON Logs */}
            <div className="flex-1 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10 pointer-events-none" />
                <div className="flex flex-col gap-1 font-mono text-[9px] text-white/50 opacity-80">
                    {logs.map((log, i) => (
                        <motion.div
                            key={log.id + i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.1 }}
                            className="truncate"
                        >
                            <span>[{log.time}ms]</span> <span className="text-[#3b82f6]">INFO:</span> Map
                            <span className="text-[#f59e0b]"> TX_{log.id}</span> ➔ Node_<span className="text-white">#{log.hash}</span>
                        </motion.div>
                    ))}
                    {/* Visual filler if inactive */}
                    {!isActive && (
                        <div className="text-center font-mono text-[10px] text-white/20 mt-8 uppercase tracking-widest">
                            [ STREAM OFFLINE ]
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};
