import Button from "./button";

export default function Card({ title, description, to }: { title: string, description: string, to: string }) {
  return (
    <div className="h-[522px] py-[25px] px-[35px] flex flex-col justify-between bg-gray-200 rounded-[25px]">
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <p>{description}</p>
        <div className="mt-[24px] text-right">
          <Button to={to}>Подробнее</Button>
        </div>
      </div>
    </div>
  )
}
