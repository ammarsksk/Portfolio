"use client";
import { useState, useEffect, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";

export const BimaSathiSim = ({ isActive }: { isActive: boolean }) => {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [boxPos, setBoxPos] = useState({ x: 50, y: 50 });

    // Reset scan state when card loses focus
    useEffect(() => {
        if (!isActive) setIsHovered(false);
    }, [isActive]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current || !isActive) return;
        const rect = containerRef.current.getBoundingClientRect();

        // Calculate raw mouse position inside the container
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Define the AWS Rekognition box dimensions
        const boxWidth = 140;
        const boxHeight = 80;

        // Constrain the box completely within the geographical bounds
        const safeX = Math.max(0, Math.min(mouseX - boxWidth / 2, rect.width - boxWidth));
        const safeY = Math.max(0, Math.min(mouseY - boxHeight / 2, rect.height - boxHeight));

        setBoxPos({ x: safeX, y: safeY });
    };

    return (
        <div
            ref={containerRef}
            className="flex-1 w-full bg-[#121212] rounded-xl border border-white/10 mt-6 relative overflow-hidden group cursor-crosshair"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            onClick={(e) => e.stopPropagation()} // Prevent launching GitHub when playing with scanner
        >
            {/* Real Agriculture Field Background */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop')` }}
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:bg-black/30" />

            {/* Header Info */}
            <div className="absolute top-3 left-3 text-[9px] font-mono text-[#ff9900] uppercase tracking-widest z-10 flex flex-col gap-1 drop-shadow-md pointer-events-none text-shadow-md">
                <span>[ AWS Rekognition Node ]</span>
                <span className="text-white/80">{isHovered ? "BEDROCK ANOMALY DETECTED" : "AWAITING S3 IMAGE BUFFER"}</span>
            </div>

            {/* The AWS Tracker Laser */}
            <motion.div
                initial={false}
                animate={{
                    opacity: isHovered && isActive ? 1 : 0,
                    x: boxPos.x,
                    y: boxPos.y,
                    scale: isHovered && isActive ? 1 : 1.1
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
                className="absolute top-0 left-0 w-[140px] h-[80px] border-2 border-[#ff9900] bg-[#ff9900]/10 rounded-sm z-20 flex items-start justify-start p-1 pointer-events-none"
            >
                <div className="bg-[#ff9900] text-black text-[8px] font-bold font-mono px-1 py-0.5 tracking-wider absolute -top-[18px] -left-[2px] whitespace-nowrap">
                    CROP_DAMAGE_TRUE <span className="opacity-70 ml-2">CONF_96.4%</span>
                </div>

                {/* Target Reticle Accents */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#ff9900]" />
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#ff9900]" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#ff9900]" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#ff9900]" />
            </motion.div>

        </div>
    );
};
