import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const isLogged = useSelector(state => state.auth.success)
  const { t } = useTranslation("translation", { keyPrefix: "protected" })

  if (!isLogged) {
    return (
      <div className='flex flex-col gap-5 w-full h-full items-center justify-center bg-light'>
        <h1 className='text-[45px]'>{t("title")}</h1>
        <span>
          <NavLink to='/' className="rounded-lg bg-orange-900 text-white p-2">{t("button")}</NavLink> {t("text")}
        </span>
      </div>
    )
  }

  return <Outlet />
}
export default ProtectedRoute