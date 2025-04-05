export default function Section({ title, subtitle, horizontal, children }: { title: string, subtitle?: string, horizontal?: boolean, children: React.ReactNode }) {
  let className = "mt-[160px] px-[80px] "
  if (horizontal) {
    className += "grid grid-cols-2"
  } else {
    className += "flex flex-col gap-[64px]"
  }

  return (
    <section className={className}>
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div>
        {children}
      </div>
    </section>
  )
}
