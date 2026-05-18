import { useEffect, useMemo, useRef, useState } from "react";

import heroImage from "./assets/hero.jpg";
import groomImage from "./assets/pria.jpg";
import brideImage from "./assets/wanita.jpg";
import weddingMusic from "./assets/ssstik.io_1779027738656.mp3";
import gallery1 from "./assets/galery1.jpg";
import gallery2 from "./assets/galery2.jpg";
import gallery3 from "./assets/galery3.jpg";
import gallery4 from "./assets/galery4.jpg";
import gallery5 from "./assets/galery5.jpg";
import gallery6 from "./assets/galery6.jpg";
import gallery7 from "./assets/galery7.jpg";
import gallery8 from "./assets/galery8.jpg";

const WEDDING_TITLE = "Mantu Gusti";
const COUPLE_NAME = "Mahes & Nadiya";
const WEDDING_DATE_LABEL = "Jumat, 19 April 2030";
const OPENING_GREETING = "السلام عليكم ورحمة الله وبركاته";
const OPENING_TEXT =
    "Kanthi raos syukur dhumateng Gusti Allah SWT, kula kekalih nyuwun rawuhipun Bapak/Ibu/Sedherek sedaya wonten ing adicara pawiwahan kula kekalih. Rawuhipun saha donga pangestu panjenengan dados pakurmatan lan kabingahan ageng tumrap kula kekalih.";
const MAPS_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0212873837963!2d110.8258514!3d-7.5727096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1682f643037d%3A0xe54e6067fc9b6bd5!2sKraton%20Surakarta%20Hadiningrat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";
const WEDDING_DATE_TIME = "2030-04-19T08:00:00+07:00";

const galleryImages = [
    { src: gallery1, alt: "Gallery 1" },
    { src: gallery2, alt: "Gallery 2" },
    { src: gallery3, alt: "Gallery 3" },
    { src: gallery4, alt: "Gallery 4" },
    { src: gallery5, alt: "Gallery 5" },
    { src: gallery6, alt: "Gallery 6" },
    { src: gallery7, alt: "Gallery 7" },
    { src: gallery8, alt: "Gallery 8" },
];

function getCountdown(targetTime) {
    const distance = targetTime - Date.now();

    if (distance <= 0) {
        return {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
        };
    }

    return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24))
            .toString()
            .padStart(2, "0"),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            .toString()
            .padStart(2, "0"),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            .toString()
            .padStart(2, "0"),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
            .toString()
            .padStart(2, "0"),
    };
}

function useCountdown(dateString) {
    const targetTime = useMemo(() => new Date(dateString).getTime(), [dateString]);
    const [timeLeft, setTimeLeft] = useState(() => getCountdown(targetTime));

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setTimeLeft(getCountdown(targetTime));
        }, 1000);

        return () => window.clearInterval(intervalId);
    }, [targetTime]);

    return timeLeft;
}

function OpeningOverlay({ isOpen, onOpen }) {
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
                <h1 className="mb-6 font-serif text-4xl font-bold text-white drop-shadow-lg animate-pulse-glow md:text-6xl">
                    Mahes <span className="italic text-keraton-gold">&</span> Nadiya
                </h1>
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

function CountdownCard({ value, label }) {
    return (
        <div className="min-w-[80px] border-b-4 border-keraton-gold p-4 text-center glass-3d md:min-w-[100px] md:p-6">
            <span className="mb-2 block text-3xl font-bold text-white md:text-5xl">{value}</span>
            <span className="text-xs uppercase tracking-widest text-keraton-gold md:text-sm">{label}</span>
        </div>
    );
}

function HeroSection() {
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
                <h1 className="mb-6 font-serif text-6xl font-bold text-white drop-shadow-2xl md:text-9xl">
                    Mahes <span className="text-keraton-gold">&</span> Nadiya
                </h1>
                <p className="mb-12 text-2xl font-light italic text-keraton-cream md:text-3xl">{WEDDING_DATE_LABEL}</p>

                <div
                    className="mb-16 flex justify-center gap-4 reveal md:gap-8"
                    style={{ transitionDelay: "0.5s" }}
                >
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

function OpeningTextSection() {
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

function CoupleSection() {
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
                    <CoupleCard
                        image={groomImage}
                        alt="Mahes"
                        name="Mahes"
                        role="Putra Kapitu"
                    />
                    <div className="font-serif text-5xl text-keraton-gold animate-float">&</div>
                    <CoupleCard
                        image={brideImage}
                        alt="Nadiya"
                        name="Nadiya"
                        role="Mempelai Putri"
                    />
                </div>
            </div>
        </section>
    );
}

function EventDetail({ icon, iconColor, text, subtext }) {
    return (
        <div className="flex items-start gap-4">
            <i className={`fas ${icon} mt-1 ${iconColor}`} aria-hidden="true" />
            <p>
                {text}
                {subtext ? (
                    <>
                        <br />
                        <span className="text-sm text-gray-500">{subtext}</span>
                    </>
                ) : null}
            </p>
        </div>
    );
}

function EventCard({ borderColor, mapBorderColor, iconBg, icon, title, subtitle, accentColor, details, mapSrc }) {
    return (
        <div className={`bg-white p-10 shadow-xl reveal rounded-2xl border-t-8 ${borderColor}`}>
            <div className="mb-8 flex items-center gap-6">
                <div className={`flex h-16 w-16 items-center justify-center rounded-full text-2xl text-white ${iconBg}`}>
                    <i className={`fas ${icon}`} aria-hidden="true" />
                </div>
                <div>
                    <h3 className="font-serif text-3xl font-bold text-keraton-maroon">{title}</h3>
                    <p className={`text-sm font-bold uppercase tracking-widest ${accentColor}`}>{subtitle}</p>
                </div>
            </div>
            <div className="mb-8 space-y-4 text-lg">
                {details.map((detail) => (
                    <EventDetail key={`${title}-${detail.icon}-${detail.text}`} {...detail} />
                ))}
            </div>
            <div className={`h-48 overflow-hidden rounded-xl border ${mapBorderColor}`}>
                <iframe
                    src={mapSrc}
                    title={`${title} map`}
                    className="h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </div>
    );
}

function EventsSection() {
    const akadMap =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.031534062831!2d110.8242!3d-7.5719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a16825c3f911f%3A0x6b8eb6a988d89e2!2sMasjid%20Agung%20Surakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";

    return (
        <section className="bg-keraton-cream px-6 py-24 text-keraton-dark">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center reveal">
                    <h2 className="mb-4 font-serif text-5xl text-keraton-maroon md:text-6xl">Tata Cara Acara</h2>
                    <p className="font-javanese text-sm uppercase tracking-[0.4em] opacity-60">Pawiwahan</p>
                </div>

                <div className="grid gap-12 md:grid-cols-2">
                    <EventCard
                        borderColor="border-keraton-gold"
                        mapBorderColor="border-keraton-gold/30"
                        iconBg="bg-keraton-maroon"
                        icon="fa-dove"
                        title="Ijab Qobul"
                        subtitle="Akad Nikah"
                        accentColor="text-keraton-gold"
                        mapSrc={akadMap}
                        details={[
                            {
                                icon: "fa-calendar-alt",
                                iconColor: "text-keraton-gold",
                                text: WEDDING_DATE_LABEL,
                            },
                            { icon: "fa-clock", iconColor: "text-keraton-gold", text: "08.00 - 10.00 WIB" },
                            {
                                icon: "fa-map-marker-alt",
                                iconColor: "text-keraton-gold",
                                text: "Masjid Agung Surakarta",
                                subtext: "Jl. Masjid No.1, Kauman, Surakarta",
                            },
                        ]}
                    />

                    <EventCard
                        borderColor="border-keraton-maroon"
                        mapBorderColor="border-keraton-maroon/30"
                        iconBg="bg-keraton-gold"
                        icon="fa-glass-cheers"
                        title="Pahargyan Ageng"
                        subtitle="Resepsi"
                        accentColor="text-keraton-maroon"
                        mapSrc={MAPS_EMBED_URL}
                        details={[
                            {
                                icon: "fa-calendar-alt",
                                iconColor: "text-keraton-maroon",
                                text: WEDDING_DATE_LABEL,
                            },
                            { icon: "fa-map-marker-alt", iconColor: "text-keraton-maroon", text: "Sasana Handrawina", subtext: "Kraton Surakarta Hadiningrat" },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}

function GallerySection({ onOpen }) {
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

function RsvpSection() {
    const [guestName, setGuestName] = useState("");
    const [attendance, setAttendance] = useState("Rawuh");
    const [guestCount, setGuestCount] = useState("1");

    const handleSubmit = (event) => {
        event.preventDefault();

        const message = [
            `Konfirmasi Kehadiran ${COUPLE_NAME}`,
            `Nama: ${guestName || "-"}`,
            `Kehadiran: ${attendance}`,
            `Cacah tamu: ${guestCount || "0"}`,
        ].join("\n");

        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    };

    return (
        <section className="relative bg-keraton-dark px-6 py-24">
            <div className="absolute inset-0 parang-bg opacity-10" />
            <div className="relative z-10 mx-auto max-w-2xl p-12 rounded-3xl glass-3d reveal">
                <div className="mb-10 text-center">
                    <h2 className="mb-4 font-serif text-4xl text-keraton-gold">Konfirmasi Kehadiran</h2>
                    <p className="font-light italic text-keraton-cream/60">
                        Rawuhipun panjenengan dados pakurmatan lan kabingahan ageng tumrap kula kekalih.
                    </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="guest-name" className="mb-2 block text-sm font-bold uppercase tracking-[0.2em] text-keraton-gold">
                            Nama
                        </label>
                        <input
                            id="guest-name"
                            value={guestName}
                            onChange={(event) => setGuestName(event.target.value)}
                            className="w-full rounded-xl border border-keraton-gold/30 bg-keraton-dark/70 px-5 py-4 text-white outline-none transition focus:border-keraton-gold"
                            placeholder="Nama panjenengan"
                        />
                    </div>

                    <fieldset>
                        <legend className="mb-3 block text-sm font-bold uppercase tracking-[0.2em] text-keraton-gold">
                            Pilihan Kehadiran
                        </legend>
                        <div className="grid grid-cols-2 gap-3">
                            {["Rawuh", "Mboten Rawuh"].map((option) => (
                                <label
                                    key={option}
                                    className={`flex cursor-pointer items-center justify-center rounded-xl border px-4 py-4 font-bold transition ${
                                        attendance === option
                                            ? "border-keraton-gold bg-keraton-gold text-keraton-dark"
                                            : "border-keraton-gold/30 bg-keraton-dark/70 text-keraton-cream hover:border-keraton-gold"
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="attendance"
                                        value={option}
                                        checked={attendance === option}
                                        onChange={(event) => setAttendance(event.target.value)}
                                        className="sr-only"
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    <div>
                        <label htmlFor="guest-count" className="mb-2 block text-sm font-bold uppercase tracking-[0.2em] text-keraton-gold">
                            Cacah Tamu
                        </label>
                        <input
                            id="guest-count"
                            type="number"
                            min="0"
                            value={guestCount}
                            onChange={(event) => setGuestCount(event.target.value)}
                            className="w-full rounded-xl border border-keraton-gold/30 bg-keraton-dark/70 px-5 py-4 text-white outline-none transition focus:border-keraton-gold"
                        />
                    </div>

                    <button
                        type="submit"
                        className="group relative inline-flex w-full items-center justify-center gap-4 rounded-full bg-keraton-gold px-10 py-5 font-bold uppercase tracking-[0.2em] text-keraton-dark transition-all hover:bg-keraton-gold-bright hover:shadow-[0_0_30px_rgba(197,160,89,0.6)] active:scale-95"
                    >
                        <i className="fab fa-whatsapp text-2xl" aria-hidden="true" />
                        <span>Kirim Konfirmasi</span>
                    </button>
                </form>
            </div>
        </section>
    );
}

function GiftSection() {
    const [copied, setCopied] = useState(false);
    const accountNumber = "0000 0000 0000";

    const copyAccount = async () => {
        try {
            await navigator.clipboard.writeText(accountNumber);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
        } catch (error) {
            console.warn("Gagal menyalin nomor rekening.", error);
        }
    };

    return (
        <section className="relative overflow-hidden bg-keraton-cream px-6 py-24 text-keraton-dark">
            <div className="mx-auto max-w-5xl">
                <div className="mb-14 text-center reveal">
                    <h2 className="mb-4 font-serif text-5xl text-keraton-maroon md:text-6xl">Tali Asih</h2>
                    <p className="font-javanese text-sm uppercase tracking-[0.4em] opacity-60">Pangestu Katresnan</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border-t-8 border-keraton-gold bg-white p-8 shadow-xl reveal">
                        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-keraton-gold">Bank</p>
                        <h3 className="mb-6 font-serif text-4xl text-keraton-maroon">BCA</h3>
                        <div className="space-y-5">
                            <div>
                                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Nomor Rekening</p>
                                <p className="font-serif text-3xl text-keraton-dark">{accountNumber}</p>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Atas Nama</p>
                                <p className="text-xl font-bold text-keraton-maroon">{COUPLE_NAME}</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={copyAccount}
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-keraton-maroon px-7 py-3 font-bold uppercase tracking-[0.16em] text-white transition hover:bg-keraton-maroon-light active:scale-95"
                        >
                            <i className="fas fa-copy" aria-hidden="true" />
                            <span>{copied ? "Tersalin" : "Salin Rekening"}</span>
                        </button>
                    </div>

                    <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border-t-8 border-keraton-maroon bg-white p-8 text-center shadow-xl reveal">
                        <div className="mb-6 flex h-40 w-40 items-center justify-center rounded-xl border-2 border-dashed border-keraton-gold bg-keraton-gold/10 p-4">
                            <p className="font-serif text-2xl font-bold text-keraton-maroon">QRIS</p>
                        </div>
                        <h3 className="mb-3 font-serif text-3xl text-keraton-maroon">QRIS Mahes & Nadiya</h3>
                        <p className="text-gray-500">QRIS: QRIS Mahes & Nadiya</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Lightbox({ image, onClose }) {
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

export default function App() {
    const audioRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [mainVisible, setMainVisible] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [lightboxImage, setLightboxImage] = useState(null);

    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const timeoutId = window.setTimeout(() => {
            setMainVisible(true);
        }, 1500);

        return () => window.clearTimeout(timeoutId);
    }, [isOpen]);

    useEffect(() => {
        if (!mainVisible) {
            return undefined;
        }

        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.15 }
        );

        const revealElements = document.querySelectorAll(".reveal");
        revealElements.forEach((element) => revealObserver.observe(element));

        return () => revealObserver.disconnect();
    }, [mainVisible]);

    useEffect(() => {
        if (!mainVisible) {
            return undefined;
        }

        const cleanups = Array.from(document.querySelectorAll(".glass-3d")).map((card) => {
            const handleMouseMove = (event) => {
                const rect = card.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;

                card.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
            };
            const handleMouseLeave = () => {
                card.style.transform = "perspective(2000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
            };

            card.addEventListener("mousemove", handleMouseMove);
            card.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                card.removeEventListener("mousemove", handleMouseMove);
                card.removeEventListener("mouseleave", handleMouseLeave);
            };
        });

        return () => cleanups.forEach((cleanup) => cleanup());
    }, [mainVisible]);

    useEffect(() => {
        document.body.style.overflow = lightboxImage ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [lightboxImage]);

    const playMusic = () => {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }

        try {
            audio.volume = 1;
            audio.currentTime = 0;
            const playPromise = audio.play();

            if (playPromise) {
                playPromise
                    .then(() => setIsPlaying(true))
                    .catch((error) => {
                        console.warn("Audio play error.", error);
                        setIsPlaying(false);
                    });
            } else {
                setIsPlaying(true);
            }
        } catch (error) {
            console.warn("Audio play error.", error);
            setIsPlaying(false);
        }
    };

    const handleOpenInvitation = () => {
        playMusic();
        setIsOpen(true);
    };

    const toggleMusic = () => {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            const playPromise = audio.play();

            if (playPromise) {
                playPromise
                    .then(() => setIsPlaying(true))
                    .catch((error) => {
                        console.warn("Audio play error.", error);
                        setIsPlaying(false);
                    });
            } else {
                setIsPlaying(true);
            }
        }
    };

    return (
        <div className="bg-keraton-dark text-keraton-cream antialiased selection:bg-keraton-gold selection:text-keraton-dark">
            <audio ref={audioRef} src={weddingMusic} loop preload="auto" />

            <OpeningOverlay isOpen={isOpen} onOpen={handleOpenInvitation} />

            <main
                className={`transition-opacity duration-1000 ${
                    isOpen ? "block" : "hidden"
                } ${mainVisible ? "opacity-100" : "opacity-0"}`}
            >
                <HeroSection />
                <OpeningTextSection />
                <CoupleSection />
                <EventsSection />
                <GallerySection onOpen={setLightboxImage} />
                <RsvpSection />
                <GiftSection />
                <footer className="border-t border-keraton-gold/20 bg-keraton-dark py-12 text-center">
                    <p className="mb-4 font-serif text-2xl text-keraton-gold">{COUPLE_NAME}</p>
                    <p className="text-sm uppercase tracking-widest opacity-40">
                        &copy; 2026 Javanese Wedding Series
                    </p>
                </footer>
            </main>

            <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />

            <button
                type="button"
                onClick={toggleMusic}
                className={`fixed bottom-6 right-6 z-[150] h-12 w-12 items-center justify-center rounded-full bg-keraton-gold/80 text-keraton-dark shadow-2xl backdrop-blur-md transition-all duration-500 hover:scale-110 hover:bg-keraton-gold active:scale-95 ${
                    mainVisible ? "flex" : "hidden"
                }`}
                aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
            >
                <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`} aria-hidden="true" />
            </button>
        </div>
    );
}
