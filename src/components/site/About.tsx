import aboutImg from "@/assets/about-interior.jpg";
import { Award, Building2, ShieldCheck, Trees } from "lucide-react";

const features = [
  { icon: Building2, title: "27 лет на рынке", text: "Построили 48 объектов премиум-класса в России и Европе." },
  { icon: Award, title: "Золото Urban Awards", text: "Лауреат премии «Лучший жилой комплекс класса премиум»." },
  { icon: ShieldCheck, title: "Эскроу-счета", text: "Ваши средства защищены до момента передачи ключей." },
  { icon: Trees, title: "Закрытый парк", text: "1,2 га ландшафтного парка с прудом и скульптурами." },
];

export function About() {
  return (
    <section id="about" className="py-32 bg-gradient-noir">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={aboutImg} alt="Лобби резиденции Aurum" width={1280} height={960} loading="lazy" className="w-full h-[600px] object-cover rounded-sm shadow-luxe" />
            <div className="absolute -bottom-8 -right-8 bg-gradient-gold text-primary-foreground p-8 rounded-sm shadow-luxe hidden md:block">
              <div className="font-display text-5xl">27</div>
              <div className="text-xs uppercase tracking-widest mt-2">лет создаём дома</div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-xs tracking-[0.4em] text-gold uppercase">О застройщике</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Aurum Development —<br />
              <span className="italic text-gold">архитектура времени</span>
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Мы создаём резиденции, которые становятся фамильным наследием. Каждый проект — это союз классической архитектуры, авторского дизайна и инженерии без компромиссов. Aurum Residence стал тринадцатым жилым кварталом, отмеченным премией Urban Awards.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="border-l-2 border-gold pl-5">
                  <f.icon className="h-5 w-5 text-gold mb-3" />
                  <div className="font-display text-lg mb-1">{f.title}</div>
                  <div className="text-sm text-muted-foreground">{f.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
