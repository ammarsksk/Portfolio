"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    // Use springs for buttery smooth trailing cursor
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("hover-target")
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Small dot follower */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    opacity: isHovered ? 0 : 1
                }}
                transition={{ type: "tween", ease: "linear", duration: 0 }}
            />

            {/* Large inverted trailing circle */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full bg-white mix-blend-difference pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
                animate={{
                    scale: isHovered ? 3 : 1,
                    opacity: 1
                }}
                transition={{ scale: { type: "tween", duration: 0.2 } }}
            >
                <motion.span
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    className="text-[6px] text-black font-bold uppercase tracking-widest mix-blend-normal"
                >
                    View
                </motion.span>
            </motion.div>
        </>
    );
};
