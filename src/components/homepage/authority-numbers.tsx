const stats = [
  { value: "15+", label: "Anos de Experiência" },
  { value: "1.800+", label: "Clientes Atendidos" },
  { value: "680+", label: "Decisões Favoráveis" },
  { value: "04", label: "Áreas de Atuação Estratégica" },
];

export function AuthorityNumbers() {
  return (
    <section className="w-full py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-headline text-5xl md:text-6xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
