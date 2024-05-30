import React, { useEffect, useState } from 'react'

const useDate = () => {
  const [isEvening, setIsEvening] = useState();

  useEffect(() => {
    const hour = new Date().getHours().toLocaleString("it");
    setIsEvening(hour > 14);
  }, [])
  return isEvening;
}

const Greetings = () => {
  const username = JSON.parse(localStorage.getItem("credentials"))?.username || "test";
  const isEvening = useDate();

  return (
    <div className='flex items-center gap-3'>
      <p className='text-[35px] font-light text-slate-700 dark:text-emerald-100'>Good {`${isEvening ? "Evening" : "Morning"}`},</p>
      <p className='text-[35px] font-bold text-slate-800 dark:text-white'>{username}!</p>
    </div>
  )
}

export default Greetings