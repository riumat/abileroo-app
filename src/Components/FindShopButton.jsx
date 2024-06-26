import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const FindShopButton = () => {
  const { t } = useTranslation("translation");
  return (
    <Link to={"/find"} className="w-[180px] py-3 px-2 rounded-lg bg-orange-400 text-black text-[14px] font-bold flex gap-2 items-center justify-center z-50">
      <p>
        {t("browsing-button")}
      </p>
<FaRegArrowAltCircleRight className='w-5 h-5'/>
    </Link>
  )
}

export default FindShopButton