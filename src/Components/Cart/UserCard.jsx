import { useEffect, useState } from "react";


const UserCard = ({ setDeliverDate, isError, setAddress }) => {
  const [dateTime, setDateTime] = useState();
  const setValue = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() < 10 ? `0${now.getMonth()+1}` : now.getMonth();
    const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
    const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
    const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
    return `${year}-${month}-${day}T${hour + 1}:${minute}`
  }
  useEffect(() => {
    setDateTime(setValue())
  }, [])

 

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='p-5 bg-light rounded-lg shadow flex flex-col gap-10 items-center text-[14px]'
    >
      <p className='logo-font text-[23px]'>Delivery Info</p>

      <div className={`flex flex-col gap-3 px-3 py-2 text-[13px] w-full border rounded-lg ${isError?.user ? "border-red-600 placeholder:text-red-400" : "border-slate-400 "}`}>
        <p className='text-[15px] text-center'>Deliver Address</p>
        <input
          onChange={(e) => setAddress(e.target.value)}
          type="text" placeholder={`${isError?.user ? "Address is required" : "Where should we deliver your order?"}`}
          className={`p-1 border-b dark:border-slate-700 bg-transparent dark:text-white text-[14px] ${isError?.user && "placeholder:text-red-400 border-red-200"}`}

        />
      </div>

      <div className={`flex flex-col gap-3 px-3 py-2 text-[13px] w-full border rounded-lg ${isError?.date ? "border-red-600 placeholder:text-red-400" : "border-slate-400 "}`}>
        <p className='text-[15px] text-center'>Delivery Time</p>
        <input
          type="datetime-local"
          onChange={(e) => setDeliverDate(e.target.value)}
          step={60}
          defaultValue={dateTime}
          className={`relative p-1 border-b dark:border-slate-700 bg-transparent dark:text-white text-[14px] hover:bg-slate-100 hover:dark:bg-slate-900 rounded-lg ${isError?.date && " border-red-200"}`}
        />
      </div>

    </form>
  )
}

export default UserCard