import React from 'react'
import { useTranslation } from 'react-i18next'

const BigTitle = () => {
  const {t}=useTranslation("translation",{keyPrefix:"home-page"})
  return (
    <div className='text-gradient from-white via-yellow-100 to-orange-300 text-transparent leading-tight text-[45px] lg:text-[70px]'>
      <p>{t("title")}</p>
      <p>{t("title2")}</p>
    </div>
  )
}

export default BigTitle