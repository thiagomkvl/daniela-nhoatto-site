import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const teamMembers = [
  {
    name: "Dra. Daniela Nhoatto",
    oab: "OAB/SP 123.456",
    bio: "Sócia fundadora, com mais de 15 anos de experiência em Direito Criminal e Execução Penal. Reconhecida pela atuação combativa nos Tribunais Superiores.",
    imageId: "",
  },
];

export function TeamSection() {
  return (
    <section id="equipe" className="w-full py-20 lg:py-28 relative overflow-hidden">
      {/* Background principal com gradiente sofisticado */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Elementos decorativos abstratos */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      {/* Padrão geométrico sutil */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(45deg,transparent_48%,hsl(var(--primary))_49%,hsl(var(--primary))_51%,transparent_52%)] bg-[length:40px_40px]" />
      
      {/* Linhas decorativas diagonais */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(45deg,transparent_45%,hsl(var(--primary))_46%,hsl(var(--primary))_54%,transparent_55%)] bg-[length:100px_100px]" />
      
      {/* Textura de pontos finos */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary))_1px,transparent_0)] bg-[length:20px_20px] animate-pulse-slow" />
      </div>

      {/* Elementos de borda decorativos */}
      <div className="absolute top-8 left-8 w-32 h-32 border-t border-l border-primary/20 rounded-tl-3xl" />
      <div className="absolute bottom-8 right-8 w-32 h-32 border-b border-r border-primary/20 rounded-br-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary relative z-10">
              Conheça quem defende seus direitos
            </h2>
            {/* Realce sutil do título */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Nossa equipe é formada por advogados experientes e dedicados a
            encontrar a melhor solução para sua causa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find(
              (img) => img.id === member.imageId
            );
            return (
              <Card 
                key={member.name} 
                className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/95 backdrop-blur-sm border-border/60 group relative"
              >
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:via-primary/5 group-hover:to-primary/10 transition-all duration-500 rounded-lg" />
                
                <div className="relative flex flex-col items-center p-6 z-10">
                  <div className="relative mb-6">
                    {/* Anel decorativo ao redor do avatar */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {memberImage ? (
                      <Avatar className="h-40 w-40 border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300 relative">
                        <AvatarImage
                          src={memberImage.imageUrl}
                          alt={`Foto de ${member.name}`}
                          data-ai-hint={memberImage.imageHint}
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-primary/10 text-primary text-3xl">
                          {member.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                        <span className="text-4xl font-bold text-primary">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="text-center">
                    <CardTitle className="font-headline text-2xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      {member.name}
                    </CardTitle>
                    <div className="mt-3">
                      <p className="text-sm text-muted-foreground font-semibold inline-block px-4 py-1.5 bg-primary/5 rounded-full">
                        {member.oab}
                      </p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-4">
                    <p className="text-foreground/90 text-center leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
