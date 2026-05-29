import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export function Contacts() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contacts" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-xs tracking-[0.4em] text-gold uppercase">Контакты</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Запишитесь на <span className="italic text-gold">приватный показ</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              Персональный менеджер встретит вас в шоу-руме, покажет резиденции и подберёт условия покупки.
            </p>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Шоу-рум", value: "Москва, Пресненская наб., 12, 38 этаж" },
                { icon: Phone, label: "Телефон", value: "+7 (495) 123-45-67" },
                { icon: Mail, label: "Email", value: "sales@aurum-residence.ru" },
                { icon: Clock, label: "Часы работы", value: "Ежедневно с 9:00 до 22:00" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-sm bg-card border border-gold/40 flex items-center justify-center shrink-0">
                    <c.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                    <div className="font-display text-lg text-foreground">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card border border-border p-10 rounded-sm shadow-luxe"
          >
            <h3 className="font-display text-2xl mb-2">Оставить заявку</h3>
            <p className="text-sm text-muted-foreground mb-8">Перезвоним в течение 15 минут</p>

            {sent ? (
              <div className="text-center py-12">
                <div className="font-display text-3xl text-gold mb-3">Благодарим</div>
                <p className="text-muted-foreground">Ваш персональный менеджер свяжется с вами в ближайшее время.</p>
              </div>
            ) : (
              <div className="space-y-5">
                {[
                  { name: "name", label: "Ваше имя", type: "text" },
                  { name: "phone", label: "Телефон", type: "tel" },
                  { name: "email", label: "Email", type: "email" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{f.label}</label>
                    <input
                      required
                      type={f.type}
                      name={f.name}
                      className="w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-foreground transition"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Комментарий</label>
                  <textarea rows={3} name="message" className="w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-foreground transition resize-none" />
                </div>
                <button type="submit" className="w-full bg-gradient-gold text-primary-foreground py-4 text-sm uppercase tracking-widest shadow-gold hover:opacity-90 transition">
                  Записаться на показ
                </button>
                <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с политикой обработки данных.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
