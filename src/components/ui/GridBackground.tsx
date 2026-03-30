"use client";
import { motion } from "framer-motion";

export const GridBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#050505] overflow-hidden flex items-center justify-center">
            {/* Interactive Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Solid Emerald Accent Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1]
                }}
                transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
                className="absolute top-[-10%] left-1/4 w-[40vw] h-[40vw] rounded-full bg-[#10b981] blur-[120px]"
            />

            {/* Solid Electric Blue Accent Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, delay: 1 }}
                className="absolute bottom-[-10%] right-1/4 w-[50vw] h-[50vw] rounded-full bg-[#3b82f6] blur-[150px]"
            />
        </div>
    );
};
