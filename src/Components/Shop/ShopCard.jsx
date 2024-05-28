
const ShopCard = ({ ac }) => {
  return (
    <div className="flex justify-center lg:justify-start items-center gap-5 shadow p-4 rounded-lg text-[0px] hover:scale-[1.03] hover:z-50 transition-transform text-emerald-900 bg-white dark:bg-emerald-950 dark:text-slate-100">

      <img className="rounded-lg object-cover" width={140} height={140} src={ac?.image} alt="" />

      <div className="flex lg:gap-2  items-start">
        <div className="lg:px-5 border-e border-white">
          <p className="lg:text-[25px] ">{ac?.name}</p>
        </div>
        <div className="lg:px-5 text-emerald-800 dark:text-slate-200 flex flex-col  justify-center lg:text-[14px] ">
          <p>{ac?.address}</p>
          <p>{ac?.description}</p>
        </div>
      </div>

    </div>
  )
}

export default ShopCard