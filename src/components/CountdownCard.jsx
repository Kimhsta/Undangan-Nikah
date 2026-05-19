export function CountdownCard({ value, label }) {
    return (
        <div className="min-w-[80px] border-b-4 border-keraton-gold p-4 text-center glass-3d md:min-w-[100px] md:p-6">
            <span className="mb-2 block text-3xl font-bold text-white md:text-5xl">{value}</span>
            <span className="text-xs uppercase tracking-widest text-keraton-gold md:text-sm">{label}</span>
        </div>
    );
}
