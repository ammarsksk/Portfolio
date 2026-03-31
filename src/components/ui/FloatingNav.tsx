"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const FloatingNav = () => {
    const [active, setActive] = useState("Home");
    const [isDark, setIsDark] = useState(true);

    // Initialize theme from HTML class
    useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);

    // ScrollSpy Logic via true Absolute Viewport Bounding (Optimized with rAF)
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const projectsEl = document.getElementById("projects");
                    const contactEl = document.getElementById("contact");
                    const threshold = window.innerHeight * 0.4;
                    let currentSection = "Home";

                    if (contactEl && contactEl.getBoundingClientRect().top <= threshold + 300) {
                        currentSection = "Contact";
                    } else if (projectsEl && projectsEl.getBoundingClientRect().top <= threshold) {
                        currentSection = "Projects";
                    }

                    setActive((prev) => (prev !== currentSection ? currentSection : prev));
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.remove('dark');
            setIsDark(false);
        } else {
            root.classList.add('dark');
            setIsDark(true);
        }
    };

    const navItems = [
        { name: "Home", link: "#" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" }
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, link: string, name: string) => {
        e.preventDefault();
        setActive(name);

        if (link === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const element = document.querySelector(link);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: offsetTop - 80,
                behavior: "smooth"
            });
        }
    };

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="fixed top-6 inset-x-0 mx-auto w-max z-50 flex items-center justify-between gap-4 px-4 py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-colors duration-500"
        >
            {/* Apple Vision Pro style navigation pills */}
            <div className="flex gap-2 relative">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.link}
                        onClick={(e) => scrollToSection(e, item.link, item.name)}
                        className={`relative px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-500 ${active === item.name
                            ? "text-black dark:text-white"
                            : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                            }`}
                    >
                        {active === item.name && (
                            <motion.div
                                layoutId="apple-bubble"
                                className="absolute inset-0 bg-black/10 dark:bg-white/15 backdrop-blur-2xl border border-black/10 dark:border-white/25 shadow-xl rounded-full"
                                transition={{ type: "spring", stiffness: 350, damping: 35, mass: 0.8 }}
                            />
                        )}
                        <span className="relative z-10">{item.name}</span>
                    </a>
                ))}
            </div>

            <div className="w-[1px] h-6 bg-black/10 dark:bg-white/20 mx-1" />

            {/* Glass UI Light/Dark Toggle Switch */}
            <button
                onClick={toggleTheme}
                className="relative flex items-center w-[60px] h-8 rounded-full bg-black/10 dark:bg-black/50 border border-black/5 dark:border-white/10 shadow-inner overflow-hidden mr-1"
                aria-label="Toggle dark mode"
            >
                <div className="absolute inset-0 w-full h-full pointer-events-none flex justify-between items-center px-1.5 opacity-40">
                    {/* Moon SVG */}
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" className="text-black dark:text-white"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                    {/* Sun SVG */}
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" className="text-black dark:text-white"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                </div>

                <motion.div
                    layout
                    animate={{ x: isDark ? 0 : 28 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className={`w-7 h-7 rounded-full shadow-lg ml-0.5 border flex items-center justify-center z-10 transition-colors duration-500
              ${isDark ? "bg-white/10 border-white/20 backdrop-blur-md" : "bg-white border-black/10"}
            `}
                >
                    {isDark
                        ? <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="3" fill="none" className="text-white drop-shadow-lg"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                        : <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="3" fill="none" className="text-black"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                    }
                </motion.div>
            </button>

        </motion.div>
    );
};
