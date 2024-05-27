
const ShopCard = ({ ac }) => {
  return (
    <div className="flex justify-center lg:justify-start items-center gap-5 bg-white p-4 rounded-lg shadow text-[0px] hover:scale-[1.03] hover:z-50 transition-transform">

      <img className="rounded-lg object-cover" width={140} height={140} src={ac?.image} alt="" />

      <div className="flex lg:gap-2  items-start">
        <div className="lg:px-5 border-e border-slate-300">
          <p className="lg:text-[25px] ">{ac?.name}</p>

        </div>

        <div className="lg:px-5 text-slate-700 flex flex-col  justify-center lg:text-[14px] ">
          <p>{ac?.address}</p>
          <p>{ac?.description}</p>
        </div>
      </div>

    </div>
  )
}

export default ShopCard