"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/equipe", label: "Equipe" },
  { href: "/resultados", label: "Resultados" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "container mx-auto flex items-center justify-between transition-all duration-300",
          scrolled ? "h-20" : "h-24"
        )}
      >
        {/* LOGO/TEXTO: só aparece no desktop */}
        <Link href="/" aria-label="Nhoatto Advogados - Página Inicial" className="hidden md:block">
          <h1
            className={cn(
              "font-headline text-2xl font-bold transition-colors",
              scrolled ? "text-primary" : "text-primary-foreground"
            )}
          >
            Nhoatto Advogados
          </h1>
        </Link>

        {/* Espaço vazio no mobile pra centralizar o menu */}
        <div className="md:hidden w-8" aria-hidden="true" />

        {/* Navegação desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                scrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contatos desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="tel:+5511999999999"
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent",
              scrolled ? "text-foreground" : "text-primary-foreground"
            )}
          >
            <Phone className="h-4 w-4" />
            (11) 99999-9999
          </Link>
          <Link
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent",
              scrolled ? "text-foreground" : "text-primary-foreground"
            )}
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </Link>
        </div>

        {/* Menu mobile */}
        <div className="lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  scrolled ? "text-primary" : "text-primary-foreground hover:bg-white/10 hover:text-white"
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-primary text-primary-foreground">
              <SheetHeader>
                <Link
                  href="/"
                  aria-label="Nhoatto Advogados - Página Inicial"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <h1 className="font-headline text-2xl font-bold text-primary-foreground text-left">
                    Nhoatto Advogados
                  </h1>
                </Link>
              </SheetHeader>
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium transition-colors hover:text-accent text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-4 mt-8">
                <Link
                  href="tel:+5511999999999"
                  className="flex items-center gap-2 text-base font-medium transition-colors hover:text-accent text-primary-foreground"
                >
                  <Phone className="h-5 w-5" />
                  (11) 99999-9999
                </Link>
                <Link
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base font-medium transition-colors hover:text-accent text-primary-foreground"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
