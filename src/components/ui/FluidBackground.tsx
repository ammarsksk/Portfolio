"use client";
import { motion } from "framer-motion";

export const FluidBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-[#050510] overflow-hidden">
            {/* Background Noise via CSS Filter or Background Image */}
            <div className="absolute inset-0 opacity-[0.04] mix-blend-screen" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")', backgroundSize: '200px' }} />

            {/* Massive Neon Glowing Orbs drifting for fluid aurora effect */}
            <motion.div
                animate={{
                    x: ["0%", "10%", "-10%", "0%"],
                    y: ["0%", "-10%", "10%", "0%"],
                }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-fuchsia-600/30 rounded-full blur-[150px] mix-blend-screen"
            />
            <motion.div
                animate={{
                    x: ["0%", "-20%", "20%", "0%"],
                    y: ["0%", "20%", "-20%", "0%"],
                }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-cyan-600/20 rounded-full blur-[160px] mix-blend-screen"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                className="absolute top-[30%] left-[30%] w-[50vw] h-[50vw] bg-violet-600/20 rounded-full blur-[140px] mix-blend-screen"
            />
        </div>
    );
};
