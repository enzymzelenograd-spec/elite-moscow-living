import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Анна Северова",
    role: "Резидент башни А, 2024",
    text: "Уровень сервиса превзошёл ожидания. Консьерж помнит, какой кофе я предпочитаю, а отделка — выше, чем в бутик-отелях Парижа.",
  },
  {
    name: "Михаил Корнеев",
    role: "Резидент, инвестор",
    text: "Покупал две квартиры на старте — за полтора года рост стоимости 38%. Это не просто дом, это инструмент сохранения капитала.",
  },
  {
    name: "Елизавета Дронова",
    role: "Резидент пентхауса",
    text: "Пентхаус с видом на Москву-реку, приватный лифт, винный погреб — здесь продумана каждая деталь. Aurum — это про жизнь, а не про квадратные метры.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-gradient-noir">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-xs tracking-[0.4em] text-gold uppercase">Отзывы</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl">
            Слово <span className="italic text-gold">резидентам</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <figure key={r.name} className="bg-card border border-border p-10 rounded-sm relative shadow-luxe">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-gold/20" />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-muted-foreground leading-relaxed mb-8 italic">
                «{r.text}»
              </blockquote>
              <figcaption className="hairline pt-5">
                <div className="font-display text-lg">{r.name}</div>
                <div className="text-xs uppercase tracking-widest text-gold mt-1">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
