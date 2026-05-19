import { OPENING_GREETING, OPENING_TEXT } from "../data/wedding.js";

export function OpeningTextSection() {
    return (
        <section className="relative overflow-hidden bg-keraton-dark/80 px-6 py-24">
            <div className="absolute inset-0 parang-bg opacity-10" />
            <div className="mx-auto max-w-4xl text-center reveal">
                <div className="mb-12">
                    <i className="fas fa-leaf rotate-45 transform text-4xl text-keraton-gold" aria-hidden="true" />
                </div>
                <p className="mb-6 font-serif text-2xl leading-relaxed text-keraton-gold-bright md:text-3xl">
                    {OPENING_GREETING}
                </p>
                <div className="mx-auto mb-8 h-px w-24 bg-keraton-gold" />
                <p className="text-lg font-light leading-relaxed text-keraton-cream/80 md:text-xl">
                    {OPENING_TEXT}
                </p>
            </div>
        </section>
    );
}
