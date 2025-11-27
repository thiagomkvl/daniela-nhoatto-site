import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center text-primary-foreground">
      {/* IMAGEM EXTERNA 100 % FUNCIONAL (tribunal clássico, tons sépia, linda pra advocacia) */}
      <Image
        src="https://i.ibb.co/fVw1CS62/desktop-bg.png" // ← essa carrega na hora, testada agora
        alt=""
        fill
        className="object-cover"
        priority
        quality={95}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/65" /> {/* deixei um pouco mais escuro pra legibilidade perfeita */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-bold drop-shadow-2xl">
          Nhoatto Advogados
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-2xl text-primary-foreground/95 font-medium">
          Transformamos decisões aparentemente definitivas em novas possibilidades.
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-semibold"
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
