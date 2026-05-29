import { Instagram, Facebook, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-sm bg-gradient-gold flex items-center justify-center text-primary-foreground font-display text-xl">A</div>
              <div className="leading-tight">
                <div className="font-display text-lg">AURUM</div>
                <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Residence Moscow</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Элитный жилой квартал в центре Москвы. Архитектура, отмеченная Urban Awards.</p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-5">Разделы</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-gold transition">О проекте</a></li>
              <li><a href="#plans" className="hover:text-gold transition">Планировки</a></li>
              <li><a href="#reviews" className="hover:text-gold transition">Отзывы</a></li>
              <li><a href="#contacts" className="hover:text-gold transition">Контакты</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-5">Контакты</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Москва, Пресненская наб., 12</li>
              <li><a href="tel:+74951234567" className="hover:text-gold transition">+7 (495) 123-45-67</a></li>
              <li><a href="mailto:sales@aurum-residence.ru" className="hover:text-gold transition">sales@aurum-residence.ru</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-5">Соцсети</div>
            <div className="flex items-center gap-3">
              {[Instagram, Send, Facebook].map((Ic, i) => (
                <a key={i} href="#" className="h-10 w-10 border border-border rounded-sm flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition">
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hairline pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <div>© 2026 Aurum Residence. Все права защищены.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gold transition">Проектная декларация</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
