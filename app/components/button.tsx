export default function Button({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <a href={to} className="inline-block py-[8px] px-[16px] rounded-[8px] bg-secondary">
      {children}
    </a>
  )
}
