import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center text-primary-foreground">
      
      {/* Imagem de fundo LOCAL */}
      <Image
        src="/components/layout/desktop-bg.png"    // 
        alt=""                               // 
        fill
        className="object-cover"
        priority
        quality={95}
        sizes="100vw"
      />

      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-primary/60" />

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-bold drop-shadow-md">
          Nhoatto Advogados
        </h1>

        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          Transformamos decisões aparentemente definitivas em novas possibilidades.
        </p>

        <div className="mt-8">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
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
