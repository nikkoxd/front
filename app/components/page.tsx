export default function Page({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <>
      <section className="mt-[48px] mb-[64px]">
        <p>Главная/{title}</p>
        <h1>{title}</h1>
      </section>
      {children}
    </>
  );
}
