import React, { useEffect, useState } from 'react'
import "../../index.css";

const useDate = () => {
  const [isEvening, setIsEvening] = useState();

  useEffect(() => {
    const hour = new Date().getHours().toLocaleString("it");
    setIsEvening(hour > 13);
  }, [])
  return isEvening;
}

const Greetings = () => {
  const username = JSON.parse(localStorage.getItem("credentials"))?.username || "test";
  const isEvening = useDate();

  return (
    <div className='flex gap-3 logo-font  h-56 justify-center relative'>
        <p className='text-[38px] font-thin text-emerald-50 z-20 pt-8'>Good {`${isEvening ? "Evening" : "Morning"}`},</p>
        <p className='text-[38px] font-bold text-white z-20 pt-8'>{username}!</p>
    </div>
  )
}

export default Greetings