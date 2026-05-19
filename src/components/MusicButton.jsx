export function MusicButton({ isVisible, isPlaying, onToggle }) {
    return (
        <button
            type="button"
            onClick={onToggle}
            className={`fixed bottom-6 right-6 z-[150] h-12 w-12 items-center justify-center rounded-full bg-keraton-gold/80 text-keraton-dark shadow-2xl backdrop-blur-md transition-all duration-500 hover:scale-110 hover:bg-keraton-gold active:scale-95 ${
                isVisible ? "flex" : "hidden"
            }`}
            aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
        >
            <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`} aria-hidden="true" />
        </button>
    );
}
