export function Lightbox({ image, onClose }) {
    if (!image) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4"
            onClick={onClose}
            role="presentation"
        >
            <button
                type="button"
                onClick={onClose}
                className="absolute right-6 top-6 text-4xl text-white transition-colors hover:text-keraton-gold"
                aria-label="Tutup galeri"
            >
                <i className="fas fa-times" aria-hidden="true" />
            </button>
            <div className="flex h-full w-full max-w-5xl items-center justify-center p-10">
                <img
                    src={image.src}
                    alt={image.alt}
                    className="max-h-full max-w-full rounded-lg object-contain shadow-2xl transition-all duration-500"
                    onClick={(event) => event.stopPropagation()}
                />
            </div>
        </div>
    );
}
