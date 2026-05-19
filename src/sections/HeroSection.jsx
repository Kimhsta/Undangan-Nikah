import { CountdownCard } from "../components/CountdownCard.jsx";
import { CoupleNames } from "../components/CoupleNames.jsx";
import { WEDDING_DATE_LABEL, WEDDING_DATE_TIME, WEDDING_TITLE, heroImage } from "../data/wedding.js";
import { useCountdown } from "../hooks/useCountdown.js";

export function HeroSection() {
    const countdown = useCountdown(WEDDING_DATE_TIME);

    return (
        <section
            className="relative flex h-screen items-center justify-center bg-cover bg-fixed bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-keraton-dark/60 via-keraton-dark/40 to-keraton-dark text-center text-white" />
            <div className="relative z-10 px-4 pt-20 text-center">
                <p className="mb-4 font-javanese text-xl uppercase tracking-[0.3em] text-keraton-gold">
                    {WEDDING_TITLE}
                </p>
                <CoupleNames
                    as="h1"
                    className="mb-6 font-serif text-6xl font-bold text-white drop-shadow-2xl md:text-9xl"
                    separatorClassName="text-keraton-gold"
                />
                <p className="mb-12 text-2xl font-light italic text-keraton-cream md:text-3xl">{WEDDING_DATE_LABEL}</p>

                <div className="mb-16 flex justify-center gap-4 reveal md:gap-8">
                    <CountdownCard value={countdown.days} label="Dinten (Hari)" />
                    <CountdownCard value={countdown.hours} label="Jam" />
                    <CountdownCard value={countdown.minutes} label="Menit" />
                    <CountdownCard value={countdown.seconds} label="Detik" />
                </div>

                <div className="text-3xl text-keraton-gold animate-scroll-down">
                    <i className="fas fa-chevron-down" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}
