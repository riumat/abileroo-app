import { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';


const useDate = () => {
  const [isEvening, setIsEvening] = useState();


  useEffect(() => {
    const hour = new Date().getHours().toLocaleString("it");
    setIsEvening(hour > 13);
  }, [])
  return isEvening;
}

const Greetings = () => {
  const localname = JSON.parse(localStorage.getItem("credentials"))?.formatted ?? "";
  const username = useSelector(state => state.user.username) ?? localname;
  const isEvening = useDate();
  const { t } = useTranslation("translation", { keyPrefix: "greet" });

  return (
    <div className='flex flex-col items-center lg:items-start lg:flex-row gap-3  h-56 justify-center relative'>
      <p className='text-[25px] lg:text-[34px]  text-emerald-50 z-20 pt-8'>{`${isEvening ? t("evening") : t("morning")}`},</p>
      <p className='text-[25px] lg:text-[34px] font-bold text-white z-20 pt-8'>{username}</p>
    </div>
  )
}

export default Greetings