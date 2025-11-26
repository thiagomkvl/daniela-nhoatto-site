import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Graças ao Dr. Lucas, meu filho conseguiu progredir para o semiaberto após 6 anos parado. Profissionalismo e dedicação admiráveis.",
    author: "M. Silva",
  },
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
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="w-full py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            A confiança e a satisfação de quem representamos é nossa maior
            recompensa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <blockquote className="text-lg italic text-foreground border-l-4 border-accent pl-4">
                  {testimonial.quote}
                </blockquote>
              </CardContent>
              <CardFooter>
                <p className="font-bold text-primary">- {testimonial.author}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
