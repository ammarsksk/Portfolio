// @ts-nocheck
"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
    return (
        // @ts-ignore
        <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
};
