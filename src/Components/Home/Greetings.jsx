import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import { useDate } from '../../utils/hooks';

const Greetings = () => {
  const localname = JSON.parse(localStorage.getItem("credentials"))?.username ?? "";
  const username = useSelector(state => state.auth.userInfo.username) ?? localname;
  const isEvening = useDate();
  const { t } = useTranslation("translation", { keyPrefix: "greet" });

  return (
    <div className='flex  items-start lg:items-start  gap-3  justify-start relative'>
      <p className='text-[16px] lg:text-[18px]  text-emerald-50 z-20 pt-8'>{`${isEvening ? t("evening") : t("morning")}`},</p>
      <p className='text-[16px] lg:text-[18px] font-bold text-orange-100 z-20 pt-8'>{username}!</p>
    </div>
  )
}

export default Greetings