import { galleryImages } from "../data/wedding.js";

export function GallerySection({ onOpen }) {
    return (
        <section id="gallery" className="relative overflow-hidden bg-keraton-brown/20 px-6 py-24">
            <div className="absolute inset-0 parang-bg opacity-5" />
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center reveal">
                    <h2 className="mb-4 font-serif text-5xl text-keraton-gold md:text-6xl">Galeri Foto</h2>
                    <p className="font-javanese text-sm uppercase tracking-[0.4em] opacity-60">Kenangan Indah</p>
                </div>

                <div className="grid grid-cols-2 gap-4 perspective-2000 md:grid-cols-4">
                    {galleryImages.map((image, index) => (
                        <button
                            type="button"
                            key={image.alt}
                            onClick={() => onOpen(image)}
                            className="overflow-hidden rounded-xl cursor-pointer glass-3d reveal"
                            style={{ transitionDelay: `${(index + 1) / 10}s` }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="aspect-square h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
