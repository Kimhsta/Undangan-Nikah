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

export function EventCard({ borderColor, mapBorderColor, iconBg, icon, title, subtitle, accentColor, details, mapSrc }) {
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
