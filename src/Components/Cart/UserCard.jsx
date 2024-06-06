
const UserCard = ({ setDeliverDate, isError, setAddress }) => {

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='p-5 bg-light rounded-lg shadow flex flex-col gap-10 items-center text-[14px]'
    >
      <p className='logo-font text-[23px]'>Delivery Info</p>

      <div className={`flex flex-col gap-4 p-3 text-[13px] w-full border border-slate-400  rounded-lg ${isError?.user && "border-red-600 placeholder:text-red-400"}`}>
        <p className='text-[15px] text-center'>Address</p>
        <input
          onChange={(e) => setAddress(e.target.value)}
          type="text" placeholder={`${isError?.user ? "Address is required" : "Where should we deliver your order?"}`}
          className={`p-1 border-b dark:border-slate-700 bg-transparent dark:text-white text-[15px] ${isError?.user && "placeholder:text-red-400 border-red-200"}`}

        />
      </div>

      <div className={`flex flex-col gap-4 p-3 text-[13px] w-full border border-slate-400  rounded-lg ${isError?.date && "border-red-600 placeholder:text-red-400"}`}>
        <p className='text-[15px] text-center'>Day</p>
        <input
          type="datetime-local"
          onChange={(e) => setDeliverDate(e.target.value)}
          className={`p-1 border-b dark:border-slate-700 bg-transparent dark:text-white text-[15px] ${isError?.date && " border-red-200"}`}
        />
      </div>

    </form>
  )
}

export default UserCard