import { useState } from "react";

import { giftAccount } from "../data/wedding.js";

export function GiftSection() {
    const [copied, setCopied] = useState(false);

    const copyAccount = async () => {
        try {
            await navigator.clipboard.writeText(giftAccount.number);
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
                        <h3 className="mb-6 font-serif text-4xl text-keraton-maroon">{giftAccount.bank}</h3>
                        <div className="space-y-5">
                            <div>
                                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Nomor Rekening</p>
                                <p className="font-serif text-3xl text-keraton-dark">{giftAccount.number}</p>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Atas Nama</p>
                                <p className="text-xl font-bold text-keraton-maroon">{giftAccount.name}</p>
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
                        <h3 className="mb-3 font-serif text-3xl text-keraton-maroon">{giftAccount.qrisTitle}</h3>
                        <p className="text-gray-500">QRIS: {giftAccount.qrisName}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
