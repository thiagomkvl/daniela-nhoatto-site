import { CheckCircle2 } from "lucide-react";

const results = [
  "Concessão de livramento condicional após 8 anos de regime fechado.",
  "Revisão da Vida Toda reconhecida com aumento de 72% no benefício de aposentadoria.",
  "Anulação de execução fiscal de R$ 1.8 milhão por prescrição intercorrente.",
  "Liminar concedida contra plano de saúde para cobertura de tratamento oncológico de alto custo.",
];

export function ResultsSection() {
  return (
    <section id="resultados" className="w-full py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Resultados que falam por nós
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Alguns dos resultados que obtivemos para nossos clientes, sempre
            com discrição e foco no sucesso da causa.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {results.map((result, index) => (
              <li key={index} className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-lg text-foreground">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
