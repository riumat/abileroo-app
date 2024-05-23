
const ShopCard = ({ ac }) => {
  return (
    <div className="flex  items-center gap-5 bg-white p-4 rounded-lg shadow">

      <img className="rounded-lg object-cover" width={140} height={140} src={ac?.image} alt="" />

      <div className="flex  gap-2 items-start">
        <div className="px-5 border-e border-slate-300">
          <p className="text-[30px]">{ac?.name}</p>

        </div>
        <div className="px-5 text-slate-700 flex flex-col  justify-center text-[14px]">
          <p>{ac?.address}</p>
          <p>{ac?.description}</p>

        </div>
      </div>
    </div>
  )
}

export default ShopCard