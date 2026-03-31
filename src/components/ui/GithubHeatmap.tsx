"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

export const GithubHeatmap = () => {
    const [blocks, setBlocks] = useState<{ id: number, level: number }[]>([]);
    const { scrollY } = useScroll();
    const [scrollOffset, setScrollOffset] = useState(0);

    // Defer randomized generation to the client runtime to eliminate React Hydration Console Errors
    useEffect(() => {
        const generated = Array.from({ length: 364 }).map((_, i) => {
            const rand = Math.random();
            let level = 0;
            if (rand > 0.6) level = 1;
            if (rand > 0.85) level = 2;
            if (rand > 0.95) level = 3;
            if (rand > 0.98) level = 4;
            return { id: i, level };
        });
        setBlocks(generated);
    }, []);

    // Map absolute physical scroll events natively to an array shift integer
    useEffect(() => {
        return scrollY.onChange((current) => {
            // Shift the data buffer by 1 cell every 15 pixels scrolled
            setScrollOffset(Math.floor(current / 15));
        });
    }, [scrollY]);

    const getLevelColor = (level: number) => {
        switch (level) {
            case 0: return "bg-black/[0.03] dark:bg-white/[0.03]";
            case 1: return "bg-[#10b981]/30 text-[#10b981]/30";
            case 2: return "bg-[#10b981]/60 text-[#10b981]/60";
            case 3: return "bg-[#10b981]/90 text-[#10b981]/90";
            case 4: return "bg-[#10b981] text-[#10b981]";
            default: return "bg-black/[0.03] dark:bg-white/[0.03]";
        }
    };

    if (blocks.length === 0) return null;

    // Liquid Scroll Physics: Shift the entire 300+ node array constantly to mimic fluid dynamic greens
    const safeOffset = scrollOffset % blocks.length;
    const normalizedOffset = safeOffset < 0 ? blocks.length + safeOffset : safeOffset;
    const displayedBlocks = [...blocks.slice(normalizedOffset), ...blocks.slice(0, normalizedOffset)];

    return (
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden select-none pointer-events-none">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="grid gap-[3px] sm:gap-[4px] transform -rotate-12 scale-[2] md:scale-[2.5]"
                style={{ gridTemplateColumns: "repeat(52, minmax(0, 1fr))" }}
            >
                {displayedBlocks.map((block, idx) => (
                    <div
                        key={idx} // Bounding to idx forces smooth transition-colors crossfades during the shift!
                        className={`w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] rounded-[1px] md:rounded-[2px] transition-colors duration-700 pointer-events-auto cursor-crosshair hover:!bg-[#10b981] hover:scale-[3] hover:z-20 hover:shadow-[0_0_20px_#10b981] ${getLevelColor(block.level)}`}
                    />
                ))}
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50 dark:from-[#030303] dark:via-transparent dark:to-[#030303] z-0 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-slate-50 dark:from-[#030303] dark:via-transparent dark:to-[#030303] z-0 pointer-events-none" />
        </div>
    );
};
