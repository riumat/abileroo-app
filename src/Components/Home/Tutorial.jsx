import React from 'react'
import { useTranslation } from 'react-i18next'

const Tutorial = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home-page.tutorial" })
  return (
    <div className='flex gap-10 mx-5 '>
      <div className='flex gap-5 items-center p-2 flex-1'>
        <img src="search.jpg" alt="" className=' w-32 h-32 object-cover rounded-full' />
        <p>{t("text1")} </p>
      </div>

      <div className='flex gap-5 items-center p-2 flex-1'>
        <img src="payment.jpg" alt="" className='w-32 h-32 object-cover rounded-full' />
        <p > {t("text2")}</p>
      </div>

      <div className='flex gap-5 items-center p-2 flex-1'>
        <img src="delivery.jpg" alt="" className='w-32 h-32 object-cover rounded-full' />
        <p>{t("text3")} </p>
      </div>
    </div>
  )
}

export default Tutorial