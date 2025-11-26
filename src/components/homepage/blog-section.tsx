import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";

const blogPosts = [
  {
    title: "STJ mantém entendimento sobre a Revisão da Vida Toda em 2024",
    imageId: "blog-post-1",
    link: "/blog/post-1",
  },
  {
    title: "Novas regras para progressão de regime no pacote anticrime",
    imageId: "blog-post-2",
    link: "/blog/post-2",
  },
  {
    title: "Como o planejamento tributário pode reduzir legalmente impostos",
    imageId: "blog-post-3",
    link: "/blog/post-3",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="w-full py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Artigos e Atualizações Jurídicas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Mantenha-se informado com nossas análises sobre as últimas
            mudanças na legislação e jurisprudência.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {blogPosts.map((post, index) => {
              const postImage = PlaceHolderImages.find(
                (img) => img.id === post.imageId
              );
              return (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      {postImage && (
                        <div className="aspect-w-16 aspect-h-9">
                           <Image
                            src={postImage.imageUrl}
                            alt={post.title}
                            width={600}
                            height={400}
                            className="object-cover w-full h-48"
                            data-ai-hint={postImage.imageHint}
                          />
                        </div>
                      )}
                      <CardHeader className="flex-grow">
                        <CardTitle className="font-headline text-xl h-24">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardFooter>
                        <Button asChild variant="link" className="p-0">
                          <Link href={post.link}>Ler artigo &rarr;</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
