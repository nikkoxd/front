export default function Page({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <main>
      <section className="mt-[48px] mb-[64px] px-[80px]">
        <p>Главная/{title}</p>
        <h1>{title}</h1>
      </section>
      {children}
    </main>
  );
}
