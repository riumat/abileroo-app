
const ShopCard = ({ ac }) => {
  return (
    <div className="flex  items-center gap-5  bg-slate-100    hover:bg-slate-800 hover:text-white transition-colors p-4 rounded-xl">
      <div className="border border-black">
        <img width={140} height={140} src={"logo192.png"} alt="" />
      </div>
      <div className="flex flex-col gap-2 items-start">
        <p>{ac?.name}</p>
        <p>{ac?.address}</p>
        <p>{ac?.description}</p>
      </div>
    </div>
  )
}

export default ShopCard