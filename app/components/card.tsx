export default function Card({ title, description, image, bottom }: { title: string, description: string, image: string, bottom?: boolean }) {
  let className=`h-[679px] p-[40px] flex flex-col rounded-[32px] text-white bg-cover`
  if (bottom) {
    className += " justify-end"
  }

  return (
    <div style={{ backgroundImage: `url(${image})` }} className={className}>
      <h2 className="mb-[35px]">{title}</h2>
      <p className="whitespace-pre-wrap">{description}</p>
    </div>
  )
}
