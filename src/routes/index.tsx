import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  CheckCircle,
  Clock,
  Instagram,
  Menu,
  MessageCircle,
  Send,
  X,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import ebookVideosIA from "@/assets/ebook-videos-ia.png";
import ebookMarketing from "@/assets/ebook-marketing.png";
import ebookProdutividade from "@/assets/ebook-produtividade.png";
import ebookFinancas from "@/assets/ebook-financas.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mundo dos E-books | Loja de E-books Digitais" },
      {
        name: "description",
        content:
          "Mundo dos E-books: e-books práticos e acessíveis sobre IA, marketing, produtividade e finanças. Transforme conhecimento em resultado.",
      },
      { property: "og:title", content: "Mundo dos E-books | Loja de E-books Digitais" },
      {
        property: "og:description",
        content:
          "E-books práticos e acessíveis para você aprender no seu ritmo e colocar em prática desde o primeiro capítulo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ebooks = [
  {
    id: "videos-ia",
    title: "Criação de Vídeos com Inteligência Artificial",
    description:
      "Aprenda a produzir vídeos profissionais usando IA. Roteiros, narração, edição e publicação de forma simples.",
    price: "R$ 47,00",
    image: ebookVideosIA,
    imageAlt: "Capa do e-book Criação de Vídeos com Inteligência Artificial",
    href: "https://pay.kiwify.com.br/l754efr",
    featured: true,
  },
  {
    id: "marketing-digital",
    title: "Marketing Digital para Iniciantes",
    description:
      "Estratégias práticas para se posicionar, atrair público e vender na internet sem complicação.",
    price: "R$ 39,90",
    image: ebookMarketing,
    imageAlt: "Capa do e-book Marketing Digital para Iniciantes",
    href: "#contato",
  },
  {
    id: "produtividade",
    title: "Produtividade e Gestão do Tempo",
    description:
      "Organize suas tarefas, elimine distrações e alcance mais resultados com menos esforço.",
    price: "R$ 34,90",
    image: ebookProdutividade,
    imageAlt: "Capa do e-book Produtividade e Gestão do Tempo",
    href: "#contato",
  },
  {
    id: "financas",
    title: "Finanças Pessoais Descomplicadas",
    description:
      "Saia das dívidas, organize seu dinheiro e comece a construir uma vida financeira equilibrada.",
    price: "R$ 29,90",
    image: ebookFinancas,
    imageAlt: "Capa do e-book Finanças Pessoais Descomplicadas",
    href: "#contato",
  },
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Conteúdo prático",
    description: "Sem enchimento. Cada capítulo traz ações que você pode aplicar no mesmo dia.",
  },
  {
    icon: Zap,
    title: "Acesso imediato",
    description: "Assim que a compra é confirmada, seu e-book chega direto no seu e-mail.",
  },
  {
    icon: Clock,
    title: "Aprenda no seu ritmo",
    description: "Leia quando e onde quiser. O conteúdo é seu para consultar quantas vezes precisar.",
  },
];

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "E-books", href: "#ebooks" },
  { label: "Contato", href: "#contato" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "TikTok", href: "https://tiktok.com", icon: MessageCircle },
  { label: "Telegram", href: "https://telegram.org", icon: Send },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header / Menu */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#inicio"
            className="flex items-center gap-2 text-lg font-bold text-foreground focus-visible:rounded-md"
            aria-label="Mundo dos E-books - Voltar ao início"
          >
            <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
            Mundo dos E-books
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Menu principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:rounded-md"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="lg" className="min-h-11 px-6">
              <a href="#ebooks">Ver e-books</a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav
            id="mobile-menu"
            className="border-t border-border bg-background px-4 py-4 md:hidden"
            aria-label="Menu mobile"
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-md px-3 py-3 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Button asChild size="lg" className="w-full min-h-12">
                  <a href="#ebooks" onClick={() => setMenuOpen(false)}>
                    Ver e-books
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="inicio"
          className="relative flex min-h-[90vh] items-center justify-center px-4 pt-16 sm:px-6 lg:px-8"
          aria-labelledby="hero-title"
        >
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-block rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              Loja de e-books digitais
            </span>
            <h1
              id="hero-title"
              className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Transforme Conhecimento em Resultado
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
              E-books práticos e acessíveis sobre IA, marketing, produtividade e finanças. Aprenda no seu ritmo e aplique desde o primeiro capítulo.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="min-h-14 px-8 text-base font-semibold glow-green">
                <a href="#ebooks">Ver nossos e-books</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-h-14 border-border px-8 text-base font-semibold text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <a href="#contato">Falar conosco</a>
              </Button>
            </div>
          </div>
        </section>

        {/* E-books */}
        <section
          id="ebooks"
          className="px-4 py-24 sm:px-6 lg:px-8"
          aria-labelledby="ebooks-title"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2
                id="ebooks-title"
                className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Nossos E-books
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
                Escolha o seu próximo passo. Conteúdo direto ao ponto para evoluir rápido.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {ebooks.map((ebook) => (
                <article
                  key={ebook.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                    <img
                      src={ebook.image}
                      alt={ebook.imageAlt}
                      width={800}
                      height={1000}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {ebook.featured && (
                      <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                        Mais vendido
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {ebook.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {ebook.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <span className="whitespace-nowrap text-xl font-bold text-foreground">{ebook.price}</span>
                      <Button
                        asChild
                        size="lg"
                        className="min-h-12 px-5 text-sm font-semibold"
                      >
                        <a
                          href={ebook.href}
                          target={ebook.href.startsWith("http") ? "_blank" : undefined}
                          rel={ebook.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          Comprar agora
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section
          className="border-y border-border bg-secondary/50 px-4 py-24 sm:px-6 lg:px-8"
          aria-labelledby="benefits-title"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2
                id="benefits-title"
                className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Por que comprar com a gente?
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <benefit.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section
          id="contato"
          className="px-4 py-24 sm:px-6 lg:px-8"
          aria-labelledby="contact-title"
        >
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
            <h2
              id="contact-title"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Fale com a gente
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Dúvidas sobre os e-books, parcerias ou suporte? Clique no botão abaixo e envie uma mensagem.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 min-h-14 px-8 text-base font-semibold glow-green"
            >
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                Entrar em contato
              </a>
            </Button>

            {/* Social links */}
            <div className="mt-10 flex items-center justify-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/30 hover:text-foreground focus-visible:rounded-full"
                  aria-label={`Siga no ${social.label}`}
                >
                  <social.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2 text-lg font-bold text-foreground">
              <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
              Mundo dos E-books
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mundo dos E-books. Todos os direitos reservados.
            </p>
            <nav className="flex items-center gap-6" aria-label="Links do rodapé">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
