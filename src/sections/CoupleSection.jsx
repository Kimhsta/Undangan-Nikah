import { coupleMembers } from "../data/wedding.js";

function CoupleCard({ image, alt, name, role, parents }) {
    return (
        <div className="p-8 text-center rounded-2xl glass-3d reveal">
            <div className="group relative mx-auto mb-8 h-64 w-64 overflow-hidden rounded-full border-4 border-keraton-gold">
                <img
                    src={image}
                    alt={alt}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />
            </div>
            <h3 className="mb-2 font-serif text-3xl font-bold">{name}</h3>
            <p className="mb-4 font-bold text-keraton-gold">{role}</p>
            {parents ? <p className="text-sm italic text-gray-400">{parents}</p> : null}
        </div>
    );
}

export function CoupleSection() {
    const [groom, bride] = coupleMembers;

    return (
        <section className="relative overflow-hidden bg-keraton-brown/30 px-6 py-24">
            <div className="pointer-events-none absolute left-0 top-20 select-none font-serif text-[20rem] text-keraton-gold/10">
                M
            </div>
            <div className="pointer-events-none absolute bottom-20 right-0 select-none font-serif text-[20rem] text-keraton-gold/10">
                N
            </div>

            <div className="mx-auto max-w-6xl">
                <div className="mb-20 text-center reveal">
                    <h2 className="mb-4 font-serif text-5xl text-keraton-gold md:text-6xl">Penganten</h2>
                    <p className="font-javanese text-sm uppercase tracking-[0.4em] opacity-60">Pawiwahan Ageng</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-16 perspective-2000 md:flex-row md:gap-32">
                    <CoupleCard {...groom} />
                    <div className="font-serif text-5xl text-keraton-gold animate-float">&</div>
                    <CoupleCard {...bride} />
                </div>
            </div>
        </section>
    );
}
