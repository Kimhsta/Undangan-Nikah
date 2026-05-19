import { useEffect } from "react";

export function useRevealOnScroll(enabled) {
    useEffect(() => {
        if (!enabled) {
            return undefined;
        }

        const revealElements = document.querySelectorAll(".reveal");

        if (!("IntersectionObserver" in window)) {
            revealElements.forEach((element) => element.classList.add("active"));
            return undefined;
        }

        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.15 }
        );

        revealElements.forEach((element) => revealObserver.observe(element));

        return () => revealObserver.disconnect();
    }, [enabled]);
}
