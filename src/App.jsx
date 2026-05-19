import { useEffect, useRef, useState } from "react";

import { Footer } from "./components/Footer.jsx";
import { Lightbox } from "./components/Lightbox.jsx";
import { MusicButton } from "./components/MusicButton.jsx";
import { OpeningOverlay } from "./components/OpeningOverlay.jsx";
import { weddingMusic } from "./data/wedding.js";
import { useGlassTilt } from "./hooks/useGlassTilt.js";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll.js";
import { CoupleSection } from "./sections/CoupleSection.jsx";
import { EventsSection } from "./sections/EventsSection.jsx";
import { GallerySection } from "./sections/GallerySection.jsx";
import { GiftSection } from "./sections/GiftSection.jsx";
import { HeroSection } from "./sections/HeroSection.jsx";
import { OpeningTextSection } from "./sections/OpeningTextSection.jsx";
import { RsvpSection } from "./sections/RsvpSection.jsx";

export default function App() {
    const audioRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [mainVisible, setMainVisible] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [lightboxImage, setLightboxImage] = useState(null);

    useRevealOnScroll(mainVisible);
    useGlassTilt(mainVisible);

    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const timeoutId = window.setTimeout(() => {
            setMainVisible(true);
        }, 1500);

        return () => window.clearTimeout(timeoutId);
    }, [isOpen]);

    useEffect(() => {
        document.body.style.overflow = lightboxImage ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [lightboxImage]);

    const playMusic = () => {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }

        try {
            audio.volume = 1;
            audio.currentTime = 0;
            const playPromise = audio.play();

            if (playPromise) {
                playPromise
                    .then(() => setIsPlaying(true))
                    .catch((error) => {
                        console.warn("Audio play error.", error);
                        setIsPlaying(false);
                    });
            } else {
                setIsPlaying(true);
            }
        } catch (error) {
            console.warn("Audio play error.", error);
            setIsPlaying(false);
        }
    };

    const handleOpenInvitation = () => {
        playMusic();
        setIsOpen(true);
    };

    const toggleMusic = () => {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
            return;
        }

        const playPromise = audio.play();

        if (playPromise) {
            playPromise
                .then(() => setIsPlaying(true))
                .catch((error) => {
                    console.warn("Audio play error.", error);
                    setIsPlaying(false);
                });
        } else {
            setIsPlaying(true);
        }
    };

    return (
        <div className="bg-keraton-dark text-keraton-cream antialiased selection:bg-keraton-gold selection:text-keraton-dark">
            <audio ref={audioRef} src={weddingMusic} loop preload="auto" />

            <OpeningOverlay isOpen={isOpen} onOpen={handleOpenInvitation} />

            <main
                className={`transition-opacity duration-1000 ${
                    isOpen ? "block" : "hidden"
                } ${mainVisible ? "opacity-100" : "opacity-0"}`}
            >
                <HeroSection />
                <OpeningTextSection />
                <CoupleSection />
                <EventsSection />
                <GallerySection onOpen={setLightboxImage} />
                <RsvpSection />
                <GiftSection />
                <Footer />
            </main>

            <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
            <MusicButton isVisible={mainVisible} isPlaying={isPlaying} onToggle={toggleMusic} />
        </div>
    );
}
