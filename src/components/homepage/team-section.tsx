import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import backgroundImage from "@/public/desktop-bg.png"; // Ajuste o caminho conforme sua estrutura

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
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={90}
        />
        {/* Overlay para melhor legibilidade */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find(
              (img) => img.id === member.imageId
            );
            return (
              <Card 
                key={member.name} 
                className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 bg-card/90 backdrop-blur-sm border-border/50"
              >
                <div className="flex flex-col sm:flex-row items-center p-6">
                  {memberImage && (
                    <Avatar className="h-32 w-32 border-4 border-primary/20">
                      <AvatarImage
                        src={memberImage.imageUrl}
                        alt={`Foto de ${member.name}`}
                        data-ai-hint={memberImage.imageHint}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <CardHeader className="text-center sm:text-left">
                    <CardTitle className="font-headline text-2xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {member.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-semibold">{member.oab}</p>
                  </CardHeader>
                </div>
                <CardContent>
                  <p className="text-foreground/90 text-center sm:text-left leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
