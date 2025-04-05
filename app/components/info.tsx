export default function Info({ title, content }: { title: React.ReactNode, content: React.ReactNode }) {
  return (
    <div>
      <div className="mb-[16px] pb-[24px] border-b-[1px] border-black">
        {title}
      </div>
      {content}
    </div>
  )
}
