import { CoupleNames } from "./CoupleNames.jsx";
import { WEDDING_TITLE } from "../data/wedding.js";

export function OpeningOverlay({ isOpen, onOpen }) {
    return (
        <section
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-keraton-dark transition-all duration-[1500ms] ease-in-out ${
                isOpen ? "pointer-events-none -translate-y-full opacity-0" : "translate-y-0 opacity-100"
            }`}
        >
            <div className="absolute inset-0 parang-bg opacity-30" />

            <div className="relative z-10 mb-10 perspective-1000">
                <div className="animate-gunungan-3d animate-gunungan-float transform-gpu preserve-3d">
                    <svg
                        className="gunungan-svg h-auto w-32 text-keraton-gold drop-shadow-[0_0_20px_rgba(197,160,89,0.5)] md:w-56"
                        viewBox="0 0 200 300"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            d="M100 0C100 0 0 150 0 200C0 250 50 300 100 300C150 300 200 250 200 200C200 150 100 0 100 0ZM100 50C100 50 160 160 160 200C160 230 130 250 100 250C70 250 40 230 40 200C40 160 100 50 100 50Z"
                            opacity="0.8"
                        />
                        <path d="M100 80L120 220H80L100 80Z" fill="#4a0404" opacity="0.6" />
                        <rect x="95" y="100" width="10" height="150" fill="#c5a059" opacity="0.9" />
                        <path d="M100 120L140 160H60L100 120Z" fill="#c5a059" opacity="0.7" />
                        <path d="M100 160L150 210H50L100 160Z" fill="#c5a059" opacity="0.5" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 flex flex-col items-center px-6 text-center animate-fade-in-up">
                <h2 className="mb-4 font-javanese text-base uppercase tracking-[0.4em] text-keraton-gold md:text-lg">
                    {WEDDING_TITLE}
                </h2>
                <CoupleNames
                    as="h1"
                    className="mb-6 font-serif text-4xl font-bold text-white drop-shadow-lg animate-pulse-glow md:text-6xl"
                    separatorClassName="italic text-keraton-gold"
                />
                <p className="mb-8 font-light italic text-white/80">Katur dumateng Bpk/Ibu/Sdr/i</p>

                <button
                    type="button"
                    onClick={onOpen}
                    className="group relative overflow-hidden border-2 border-keraton-gold bg-transparent px-8 py-3 font-bold uppercase tracking-widest text-keraton-gold transition-all duration-500 hover:bg-keraton-gold hover:text-keraton-dark md:px-12 md:py-4"
                >
                    <span className="relative z-10">Buka Undangan</span>
                    <span className="absolute inset-0 bg-keraton-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </button>
            </div>
        </section>
    );
}
