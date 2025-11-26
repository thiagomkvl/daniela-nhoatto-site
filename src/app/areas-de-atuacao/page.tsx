import { PracticeAreas } from "@/components/homepage/practice-areas";

export default function AreasDeAtuacaoPage() {
  return (
    <div className="pt-24 bg-background">
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Nossas Áreas de Atuação
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Atuação jurídica especializada, estratégica e humanizada para
            defender seus direitos e interesses.
          </p>
        </div>
      </div>
      <PracticeAreas />
    </div>
  );
}
