
const ShopCard = ({ ac }) => {
  return (
    <div className="flex  items-center gap-5 bg-gradient-to-tr from-slate-100 to bg-slate-50 p-4 rounded-xl">
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