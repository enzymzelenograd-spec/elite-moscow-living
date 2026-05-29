import { useMemo, useState } from "react";
import planBg from "@/assets/plan-bg.jpg";
import { Square, BedDouble, Maximize2 } from "lucide-react";

type Plan = {
  id: string;
  rooms: 1 | 2 | 3;
  area: number;
  floor: string;
  price: number;
  name: string;
};

const PLANS: Plan[] = [
  // 1-комн
  { id: "1A", rooms: 1, area: 42, floor: "5–12", price: 18.9, name: "Сюита Aria" },
  { id: "1B", rooms: 1, area: 46, floor: "8–14", price: 21.2, name: "Сюита Lumen" },
  { id: "1C", rooms: 1, area: 49, floor: "10–18", price: 23.4, name: "Сюита Velvet" },
  { id: "1D", rooms: 1, area: 52, floor: "14–22", price: 25.8, name: "Сюита Noir" },
  { id: "1E", rooms: 1, area: 55, floor: "18–25", price: 27.6, name: "Сюита Atelier" },
  { id: "1F", rooms: 1, area: 58, floor: "22–28", price: 29.9, name: "Сюита Prime" },
  // 2-комн
  { id: "2A", rooms: 2, area: 68, floor: "5–12", price: 34.5, name: "Резиденция Opus" },
  { id: "2B", rooms: 2, area: 74, floor: "8–14", price: 38.2, name: "Резиденция Vera" },
  { id: "2C", rooms: 2, area: 81, floor: "12–18", price: 42.6, name: "Резиденция Solis" },
  { id: "2D", rooms: 2, area: 89, floor: "16–22", price: 47.3, name: "Резиденция Mira" },
  { id: "2E", rooms: 2, area: 94, floor: "20–25", price: 51.9, name: "Резиденция Domus" },
  { id: "2F", rooms: 2, area: 102, floor: "24–28", price: 58.4, name: "Резиденция Royale" },
  // 3-комн
  { id: "3A", rooms: 3, area: 118, floor: "5–12", price: 64.2, name: "Апартамент Astra" },
  { id: "3B", rooms: 3, area: 128, floor: "8–14", price: 71.8, name: "Апартамент Aurora" },
  { id: "3C", rooms: 3, area: 138, floor: "12–18", price: 79.5, name: "Апартамент Imperia" },
  { id: "3D", rooms: 3, area: 152, floor: "16–22", price: 88.6, name: "Апартамент Sereno" },
  { id: "3E", rooms: 3, area: 168, floor: "20–25", price: 99.4, name: "Апартамент Belvedere" },
  { id: "3F", rooms: 3, area: 180, floor: "26–28", price: 119.0, name: "Пентхаус Ciel" },
];

const FILTERS = [
  { v: "all" as const, label: "Все" },
  { v: 1 as const, label: "1-комнатные" },
  { v: 2 as const, label: "2-комнатные" },
  { v: 3 as const, label: "3-комнатные" },
];

export function Plans() {
  const [filter, setFilter] = useState<"all" | 1 | 2 | 3>("all");
  const list = useMemo(
    () => (filter === "all" ? PLANS : PLANS.filter((p) => p.rooms === filter)),
    [filter],
  );

  return (
    <section id="plans" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-xs tracking-[0.4em] text-gold uppercase">Планировки</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl max-w-xl">
              Выберите свой <span className="italic text-gold">формат жизни</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={String(f.v)}
                onClick={() => setFilter(f.v)}
                className={`px-5 py-3 text-xs uppercase tracking-widest rounded-sm border transition ${
                  filter === f.v
                    ? "bg-gold text-primary-foreground border-gold"
                    : "border-border text-muted-foreground hover:text-gold hover:border-gold"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <article
              key={p.id}
              className="group bg-card border border-border rounded-sm overflow-hidden hover:border-gold transition-colors shadow-luxe"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={planBg}
                  alt={`Планировка ${p.name}`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest text-gold border border-gold/40">
                  {p.id}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="font-display text-xl">{p.name}</h3>
                  <div className="text-right">
                    <div className="text-gold font-display text-lg">{p.price} млн ₽</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center gap-2"><BedDouble className="h-4 w-4 text-gold" /> {p.rooms} комн.</div>
                  <div className="flex items-center gap-2"><Square className="h-4 w-4 text-gold" /> {p.area} м²</div>
                  <div className="flex items-center gap-2"><Maximize2 className="h-4 w-4 text-gold" /> {p.floor} эт.</div>
                </div>
                <a href="#contacts" className="mt-5 block text-center w-full border border-gold text-gold py-3 text-xs uppercase tracking-widest hover:bg-gold hover:text-primary-foreground transition">
                  Забронировать
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
