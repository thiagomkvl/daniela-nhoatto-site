import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ContatoPage() {
  const mapImage = PlaceHolderImages.find((img) => img.id === "map-placeholder");
  return (
    <div className="pt-24 bg-background">
      <div className="container mx-auto py-16 lg:py-24 px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Entre em Contato
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Estamos à disposição para ouvir seu caso. Agende uma consulta ou
            envie sua dúvida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-secondary p-8 rounded-lg">
            <h2 className="font-headline text-3xl text-primary mb-6">
              Fale Conosco
            </h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl text-primary mb-4">
                Informações de Contato
              </h3>
              <div className="space-y-4 text-lg text-foreground">
                <a
                  href="tel:+5511999999999"
                  className="flex items-center gap-4 hover:text-accent transition-colors"
                >
                  <Phone className="h-6 w-6 text-primary" />
                  <span>(11) 99999-9999</span>
                </a>
                <a
                  href="mailto:contato@nhoatto.adv.br"
                  className="flex items-center gap-4 hover:text-accent transition-colors"
                >
                  <Mail className="h-6 w-6 text-primary" />
                  <span>contato@nhoatto.adv.br</span>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>
                    Rua Fictícia, 123 - Sala 45
                    <br />
                    Cidade/UF - CEP 00000-000
                  </span>
                </div>
              </div>
            </div>

            <div>
              {mapImage && (
                <div className="aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                    data-ai-hint={mapImage.imageHint}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
