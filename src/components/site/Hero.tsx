import heroImg from "@/assets/hero-building.jpg";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="ЖК Aurum Residence в Москве" width={1920} height={1280} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gold" />
            <span className="text-xs tracking-[0.4em] text-gold uppercase">Элитный квартал · Москва</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-foreground mb-6">
            Купите квартиру <br />
            <span className="italic text-gold">мечты</span> на особых <br /> условиях
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-10">
            Резиденции премиум-класса в самом сердце столицы. Ипотека от 4,5%, рассрочка 0% до сдачи и индивидуальные программы для первых 30 покупателей.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a href="#plans" className="group inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-sm text-sm tracking-wide uppercase shadow-gold hover:opacity-90 transition">
              Смотреть планировки
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contacts" className="inline-flex items-center gap-3 border border-gold text-gold px-8 py-4 rounded-sm text-sm tracking-wide uppercase hover:bg-gold/10 transition">
              Записаться на показ
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-lg">
            {[
              { v: "от 18,9", l: "млн ₽" },
              { v: "42–180", l: "м²" },
              { v: "Q4 2026", l: "сдача" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl md:text-3xl text-gold">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
