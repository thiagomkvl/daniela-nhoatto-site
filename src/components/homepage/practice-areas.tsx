import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Gavel, HeartHandshake, Landmark, ShieldCheck } from "lucide-react";

const practiceAreas = [
  {
    icon: <Gavel className="h-10 w-10 text-primary" />,
    title: "Direito Criminal",
    description: "Atuação em revisões de sentenças, progressão de regime, livramento condicional e recursos aos tribunais superiores.",
    link: "/areas-de-atuacao/direito-criminal",
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: "Direito do Consumidor",
    description: "Defesa em casos de práticas abusivas, produtos defeituosos, e negativas indevidas por planos de saúde.",
    link: "/areas-de-atuacao/direito-consumidor",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Direito Previdenciário",
    description: "Especialistas em Revisão da Vida Toda, aposentadorias, pensões e benefícios por incapacidade junto ao INSS.",
    link: "/areas-de-atuacao/direito-previdenciario",
  },
  {
    icon: <Landmark className="h-10 w-10 text-primary" />,
    title: "Direito Tributário",
    description: "Recuperação de créditos, anulação de execuções fiscais, e planejamento para redução da carga tributária.",
    link: "/areas-de-atuacao/direito-tributario",
  },
];

export function PracticeAreas() {
  return (
    <section id="areas" className="w-full py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">

        {/* TÍTULO + SUBTÍTULO (agora vem antes dos cards) */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Nossas Áreas de Atuação
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Atuação jurídica especializada, estratégica e humanizada para defender seus direitos e interesses.
          </p>
        </div>

        {/* GRID DE CARDS (agora vem depois do título) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.map((area) => (
            <Card
              key={area.title}
              className="text-center flex flex-col items-center border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
            >
              <CardHeader className="items-center pb-4">
                {area.icon}
                <CardTitle className="font-headline text-2xl pt-4">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Link
                  href={area.link}
                  className="font-semibold text-primary hover:text-accent transition-colors flex items-center justify-center gap-2"
                >
                  Saiba mais <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
