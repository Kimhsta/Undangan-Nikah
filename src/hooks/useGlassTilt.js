import { useEffect } from "react";

export function useGlassTilt(enabled) {
    useEffect(() => {
        if (!enabled) {
            return undefined;
        }

        const cleanups = Array.from(document.querySelectorAll(".glass-3d")).map((card) => {
            const handleMouseMove = (event) => {
                const rect = card.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;

                card.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
            };

            const handleMouseLeave = () => {
                card.style.transform = "perspective(2000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
            };

            card.addEventListener("mousemove", handleMouseMove);
            card.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                card.removeEventListener("mousemove", handleMouseMove);
                card.removeEventListener("mouseleave", handleMouseLeave);
            };
        });

        return () => cleanups.forEach((cleanup) => cleanup());
    }, [enabled]);
}
