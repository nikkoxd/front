export default function Section({ title, subtitle, horizontal, children }: { title: string, subtitle?: string, horizontal?: boolean, children: React.ReactNode }) {
  let className = "mt-[160px] "
  if (horizontal) {
    className += "grid lg:grid-cols-2"
  } else {
    className += "flex flex-col gap-[64px]"
  }

  return (
    <section className={className}>
      <div className={ horizontal ? "pb-8 lg:pb-0" : "" }>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div>
        {children}
      </div>
    </section>
  )
}
