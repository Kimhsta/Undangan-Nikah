import { CoupleNames } from "./CoupleNames.jsx";
import openingLogo from "../assets/logo.png";
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
                    <img
                        src={openingLogo}
                        alt="Mantu Gusti"
                        className="h-auto w-45 drop-shadow-[0_0_20px_rgba(197,160,89,0.5)] md:w-56"
                    />
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
