import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Consegui minha aposentadoria com o valor correto graças à revisão que a Dra. Ana conduziu. Atendimento humano e eficiente.",
    author: "J. Pereira",
  },
  {
    quote:
      "Anularam uma dívida tributária que tirava meu sono. Sou muito grato pela competência e agilidade de toda a equipe.",
    author: "R. Costa",
  },
  {
    quote:
      "Fui absolvido em um processo criminal que parecia perdido. A defesa técnica e estratégica fez toda a diferença.",
    author: "M. Silva",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="w-full py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Título e subtítulo */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            A confiança e a satisfação de quem representamos é nossa maior recompensa.
          </p>
        </div>

        {/* Grid com 3 colunas (agora preenchido) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex flex-col h-full bg-background/50 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="pt-8 flex-grow">
                <blockquote className="text-lg italic text-foreground border-l-4 border-primary pl-6 leading-relaxed">
                  “{testimonial.quote}”
                </blockquote>
              </CardContent>
              <CardFooter className="pb-8">
                <p className="font-bold text-primary text-lg">
                  — {testimonial.author}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
