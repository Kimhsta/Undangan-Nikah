import { useState } from "react";

import { COUPLE_NAME } from "../data/wedding.js";

export function RsvpSection() {
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
