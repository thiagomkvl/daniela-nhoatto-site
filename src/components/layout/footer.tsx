import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

const navLinks = [
  { href: "/areas-de-atuacao", label: "Áreas" },
  { href: "/equipe", label: "Equipe" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="font-headline text-2xl font-bold">
              Nhoatto Advogados
            </Link>
            <p className="mt-2 text-sm text-primary-foreground/70">
              Compromisso com a justiça e a excelência técnica.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold tracking-wider uppercase">
              Contato
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Rua Fictícia, 123 - Sala 45</li>
              <li>Cidade/UF - CEP 00000-000</li>
              <li className="pt-2">
                <a
                  href="tel:+5511999999999"
                  className="hover:text-accent transition-colors"
                >
                  (11) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@nhoatto.adv.br"
                  className="hover:text-accent transition-colors"
                >
                  contato@nhoatto.adv.br
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold tracking-wider uppercase">Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold tracking-wider uppercase">Social</h3>
            <div className="flex mt-4 space-x-4">
              <Link
                href="#"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          <p>
            &copy; {new Date().getFullYear()} Nhoatto Advogados – Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
