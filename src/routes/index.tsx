import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Plans } from "@/components/site/Plans";
import { Reviews } from "@/components/site/Reviews";
import { Contacts } from "@/components/site/Contacts";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurum Residence — элитный ЖК в центре Москвы" },
      { name: "description", content: "Резиденции премиум-класса в Москве. Ипотека от 4,5%, рассрочка 0%. Планировки от 42 до 180 м². Сдача Q4 2026." },
      { property: "og:title", content: "Aurum Residence — элитный ЖК в Москве" },
      { property: "og:description", content: "Элитные апартаменты в центре Москвы. Архитектура, отмеченная Urban Awards." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Plans />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
