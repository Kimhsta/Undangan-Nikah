import { EventCard } from "../components/EventCard.jsx";
import { eventCards } from "../data/wedding.js";

export function EventsSection() {
    return (
        <section className="bg-keraton-cream px-6 py-24 text-keraton-dark">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center reveal">
                    <h2 className="mb-4 font-serif text-5xl text-keraton-maroon md:text-6xl">Tata Cara Acara</h2>
                    <p className="font-javanese text-sm uppercase tracking-[0.4em] opacity-60">Pawiwahan</p>
                </div>

                <div className="grid gap-12 md:grid-cols-2">
                    {eventCards.map((eventCard) => (
                        <EventCard key={eventCard.title} {...eventCard} />
                    ))}
                </div>
            </div>
        </section>
    );
}
