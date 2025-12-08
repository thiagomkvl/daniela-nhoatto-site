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
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[length:40px_40px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Conheça quem defende seus direitos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
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
                className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/95 backdrop-blur-sm border-border/60 group"
              >
                <div className="flex flex-col items-center p-6">
                  <div className="relative mb-6">
                    {memberImage ? (
                      <Avatar className="h-40 w-40 border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
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
                      <div className="h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/20 flex items-center justify-center">
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
                    <p className="text-sm text-muted-foreground font-semibold mt-2">{member.oab}</p>
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
