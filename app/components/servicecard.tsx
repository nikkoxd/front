export default function ServiceCard({ title, price }: { title: string, price: string }) {
  return (
    <div className="flex flex-col gap-[30px] justify-end min-h-[290px] py-[23px] px-[15px] border-[1px] border-primary rounded-[24px] first:row-span-2 [&:nth-child(5)]:row-span-2 [&:nth-child(7)]:row-span-2 first:bg-primary first:text-white">
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <p>{price}</p>
      </div>
    </div>
  )
}
