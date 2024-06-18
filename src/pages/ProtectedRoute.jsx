import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const isLogged = useSelector(state => state.auth.success)

  if (!isLogged) {
    return (
      <div className='flex flex-col gap-5 w-full h-full items-center justify-center'>
        <h1 className='text-[17px]'>Unauthorized</h1>
        <span>
          <NavLink to='/' className="rounded-lg bg-emerald-900 text-white p-2">Login</NavLink> to gain access
        </span>
      </div>
    )
  }

  return <Outlet />
}
export default ProtectedRoute