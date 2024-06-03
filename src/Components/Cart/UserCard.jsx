import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

const UserCard = ({ setDeliverDate, isError, setAddress, setEmail }) => {
  const [day, setDay] = useState(new Date());
  const [hour, setHour] = useState(new Date().toTimeString().split(" ")[0]);


  useEffect(() => {
    const date = new Date(day);
    date.setHours(hour?.split(":")[0], hour?.split(":")[1]);
    setDeliverDate(date);

  }, [hour, day])

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='p-5 bg-white dark:bg-slate-950 dark:text-slate-100 rounded-lg shadow flex flex-col gap-5 items-center  text-[14px]'
    >
      <input
        onChange={(e) => setEmail(e.target.value)}
        className={`p-2 text-[13px] w-64 border dark:bg-emerald-950 rounded-lg ${isError?.user ? "border-red-600" : ""}`}
        type="email" name="" id="" placeholder='Your email here'
      />

      <input
        onChange={(e) => setAddress(e.target.value)}
        className={`p-2 text-[13px] w-64 border dark:bg-emerald-950 rounded-lg ${isError?.user ? "border-red-600" : ""}`}
        type="text" placeholder='Your address here'
      />
      <DatePicker
        className={`p-2 text-[13px] w-64 border dark:bg-emerald-950 rounded-lg ${isError?.date ? "border-red-600" : ""}`}
        selected={day}
        onChange={(date) => setDay(date)}
      />

      <input
        type="time" className={`p-2 text-[13px] w-64 border dark:bg-emerald-950 rounded-lg ${isError?.date ? "border-red-600" : ""}`}
        onChange={(e) => setHour(e.target.value)}
      />
    </form>
  )
}

export default UserCard