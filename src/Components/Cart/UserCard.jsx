import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { MdErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { setDateString } from "../../utils/functions";

const UserCard = ({ onSubmit, shopId, total }) => {
  const dateString = setDateString();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { t } = useTranslation("translation", { keyPrefix: "cart-page" });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='p-5 bg-light rounded-lg flex flex-col gap-5 items-center text-[14px]'
    >
      <div className="flex justify-between w-full">
        <p className=' text-[17px] pt-3'>{t("summary")}</p>

        <div className="flex flex-col  items-start text-[13px]">
          {errors.address && (
            <div className="flex items-center gap-1">
              <MdErrorOutline className="text-red-500 w-4 h-4" />
              <span className="text-red-500">{errors.address.message}</span>
            </div>
          )}
          {errors.date && (
            <div className="flex items-center gap-1">
              <MdErrorOutline className="text-red-500 w-4 h-4" />
              <span className="text-red-500">{errors.date.message}</span>
            </div>
          )}
        </div>
      </div>

      <div className={`flex flex-col gap-3 px-3 py-2 text-[18px] w-full border rounded-lg ${errors.address ? "border-red-600 placeholder:text-red-400" : "border-orange-950/30 "}`}>
        <p className='text-[13px] font-light text-center'>{t("labels.address")}</p>

        <input
          {...register("address", { required: t("errors.address") })}
          type="text" placeholder={`${errors.address ? t("errors.address") : t("labels.address-placeholder")}`}
          className={`cart-input ${errors.address && "placeholder:text-red-400 border-red-200"}`}
        />
      </div>

      <div className={`flex flex-col gap-3 px-3 py-2 text-[18px] w-full border rounded-lg ${errors.date ? "border-red-600 placeholder:text-red-400" : "border-orange-950/30"}`}>
        <p className='text-[13px] font-light text-center'>{t("labels.date")}</p>

        <input
          type="datetime-local"
          {...register("date", { required: t("errors.date-required"), validate: { value: value => new Date(value) > new Date() || t("errors.date-invalid") } })}
          step={60}
          defaultValue={dateString}
          className={`relative cart-input ${errors.date && " border-red-200"}`}
        />
      </div>

      <p className="text-[20px] font-bold">{t("total")}: {total}€</p>

      <div className="flex flex-col gap-2">

       

        <button
          type="submit"
          className="p-3 bg-orange-950 dark:bg-orange-800 text-white text-[20px] rounded-lg px-24 py-5 font-semibold "
        >
          {t("buttons.checkout")}
        </button>

        <Link
          to={`/shop/${shopId}`}
          className="rounded-lg bg-orange-800/20  px-3 py-2 text-orange-950 text-[14px] logo-font flex items-center justify-center"
        >
          {t("buttons.redirect")}
        </Link>

      </div>

    </form>
  )
}

export default UserCard