import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");

  return (
    <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center text-primary-foreground">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-bold drop-shadow-md">
          Nhoatto Advogados
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          Advocacia especializada em defesa criminal, direitos do consumidor,
          previdenciário e tributário
        </p>
        <p className="mt-2 max-w-4xl mx-auto text-base text-primary-foreground/80">
          Atuação estratégica e humanizada em todo o estado. Mais de 15 anos de
          experiência em revisões criminais, execuções penais, recuperação de
          créditos e planejamento tributário.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Link href="/areas-de-atuacao">
              Conhecer nossas áreas de atuação
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
