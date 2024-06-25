import React from 'react'
import { useTranslation } from 'react-i18next'

const Tutorial = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home-page.tutorial" })
  return (
    <div className='flex flex-col lg:flex-row  gap-10 mx-5 text-[14px] xl:text-[16px]'>
      <div className='flex gap-5 items-center p-2 flex-1'>
        <img src="./images/search.webp" alt="" className=' w-32 h-32 object-cover rounded-full' />
        <p>{t("text1")} </p>
      </div>

      <div className='flex gap-5 items-center p-2 flex-1'>
        <img src="./images/payment.webp" alt="" className='w-32 h-32 object-cover rounded-full' />
        <p > {t("text2")}</p>
      </div>

      <div className='flex gap-5 items-center p-2 flex-1'>
        <img src="./images/delivery.webp" alt="" className='w-32 h-32 object-cover rounded-full' />
        <p>{t("text3")} </p>
      </div>
    </div>
  )
}

export default Tutorial