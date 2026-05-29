import { Instagram, Facebook, Send, Phone } from "lucide-react";

const nav = [
  { href: "#about", label: "О проекте" },
  { href: "#plans", label: "Планировки" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-sm bg-gradient-gold flex items-center justify-center text-primary-foreground font-display text-xl">A</div>
          <div className="leading-tight">
            <div className="font-display text-lg text-foreground">AURUM</div>
            <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Residence Moscow</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <a href="tel:+74951234567" className="hidden md:flex items-center gap-2 text-sm text-foreground hover:text-gold transition-colors">
            <Phone className="h-4 w-4 text-gold" />
            +7 (495) 123-45-67
          </a>
          <div className="hidden md:flex items-center gap-3 pl-5 border-l border-border">
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-gold transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Telegram" className="text-muted-foreground hover:text-gold transition-colors"><Send className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-gold transition-colors"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
