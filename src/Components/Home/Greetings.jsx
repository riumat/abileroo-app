import { useEffect, useState } from 'react'

const useDate = () => {
  const [isEvening, setIsEvening] = useState();

  useEffect(() => {
    const hour = new Date().getHours().toLocaleString("it");
    setIsEvening(hour > 13);
  }, [])
  return isEvening;
}

const Greetings = () => {
  const username = JSON.parse(localStorage.getItem("credentials"))?.formatted;
  const isEvening = useDate();

  return (
    <div className='flex flex-col items-center lg:items-start lg:flex-row gap-3  h-56 justify-center relative'>
        <p className='text-[25px] lg:text-[34px]  text-emerald-50 z-20 pt-8'>Good {`${isEvening ? "Evening" : "Morning"}`},</p>
        <p className='text-[25px] lg:text-[34px] font-bold text-white z-20 pt-8'>{username}</p>
    </div>
  )
}

export default Greetings