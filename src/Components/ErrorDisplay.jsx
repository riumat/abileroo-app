import { useTranslation } from "react-i18next"

const ErrorDisplay = () => {
  const { t } = useTranslation("translation", { keyPrefix: "fetch-error" })
  return (
    <div className='w-full h-full bg-dark flex justify-center items-center '>
      <div className="flex flex-col">
        <p className="text-[30px] text-center text-orange-950">{t("title")}</p>
        <p className="text-[18px] text-center text-orange-900">{t("desc")}</p>
      </div>
    </div>
  )
}

export default ErrorDisplay