import { COUPLE_NAME } from "../data/wedding.js";

export function Footer() {
    return (
        <footer className="border-t border-keraton-gold/20 bg-keraton-dark py-12 text-center">
            <p className="mb-4 font-serif text-2xl text-keraton-gold">{COUPLE_NAME}</p>
            <p className="text-sm uppercase tracking-widest opacity-40">
                &copy; 2026 Javanese Wedding Series
            </p>
        </footer>
    );
}
