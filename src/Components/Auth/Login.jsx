import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { MdErrorOutline } from "react-icons/md";
import { useSelector } from "react-redux";

const Login = ({ onSubmit, isToSign }) => {
  const { error } = useSelector(state => state.auth);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { t } = useTranslation("translation", { keyPrefix: "auth-page" });

  return (
    <form className='flex flex-col gap-4 p-5' onSubmit={handleSubmit(onSubmit)}>

      <div className={`p-3 rounded-xl border-2 text-[16px] ${(errors.email || error) ? "border-red-500" : "border-orange-900/60"}`}>
        <div className={`text-[11px]  ${(errors.email || error) ? "text-red-500" : ""}`}>
          {errors.email ? (
            <div className="flex gap-1 items-center">
              <MdErrorOutline className="text-red-500 w-3.5 h-3.5" />
              <p className="text-[12px] font-light">{t("errors.email")}</p>
            </div>
          ) :
            (<p>Email</p>)}
        </div>
        <input
          {...register("email", { required: t("errors.email") })}
          name='email'
          type="email"
          className='rounded-xl focus:outline-none bg-transparent '
        />
      </div>
      <div className={`p-3 rounded-xl border-2 text-[16px] ${(errors.password || error) ? "border-red-500" : "border-orange-900/60"}`}>
        <div className={`text-[11px]  ${(errors.password || error) ? "text-red-500" : ""}`}>
          {errors.password ? (
            <div className="flex gap-1 items-center">
              <MdErrorOutline className="text-red-500 w-3.5 h-3.5" />
              <p className="text-[12px] font-light">{t("errors.password")}</p>
            </div>
          ) :
            (<p>Password</p>)}
        </div>
        <input
          {...register("password", { required: t("errors.password") })}
          name='password'
          type="password"
          className='rounded-xl focus:outline-none bg-transparent '
        />
      </div>

      <div className='flex gap-2'>
        <input type="checkbox" name="" id="" className='w-4 h-4 cursor-pointer border-emerald-700' />
        <p className='text-[14px] text-orange-800'>{t("checkbox")}</p>
      </div>

      <button
        type="submit"
        className='p-2 bg-orange-800 rounded-xl focus:outline-none cursor-pointer text-white'
      >{isToSign ? t("submit.register") : t("submit.login")}</button>

      {error && (
        <div className="flex items-center w-full justify-center gap-2">
          <MdErrorOutline className="text-red-500 w-4 h-4" />
          <p className="text-red-500 font-bold">{t("errors.wrong")}</p>
        </div>
      )}


    </form>

  )
}

export default Login