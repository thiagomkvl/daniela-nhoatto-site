import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center text-primary-foreground overflow-hidden">

      {/* Imagem de fundo (sua original) */}
      <Image
        src="https://i.ibb.co/fVw1CS62/desktop-bg.png"
        alt=""
        fill
        className="object-cover"
        priority
        quality={95}
        sizes="100vw"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-primary/65" />

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 text-center">

        {/* TÍTULO: só aparece no desktop (a partir de 768px) */}
        <h1 className="hidden md:block font-headline text-5xl md:text-7xl font-bold drop-shadow-2xl tracking-tight">
          Nhoatto Advogados
        </h1>

        {/* Título invisível para SEO e mobile */}
        <h1 className="sr-only">Nhoatto Advogados</h1>

        {/* Tagline */}
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-2xl text-primary-foreground/95 font-medium">
          Transformamos decisões aparentemente definitivas em novas possibilidades.
        </p>

        {/* Botão */}
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-semibold transition-all"
          >
            <Link href="/areas-de-atuacao">
              Conheça nossas áreas de atuação
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
