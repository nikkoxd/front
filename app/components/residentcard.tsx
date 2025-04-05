export default function ResidentCard({ image, alt }: { image: string, alt: string }) {
  return (
    <div className="flex justify-center items-center h-[207px] rounded-[32px] border-1 border-black">
      <img src={image} alt={alt} className="w-full h-full object-contain" />
    </div>
  )
}
