import { CgLogOut } from 'react-icons/cg'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/auth/authSlice';

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 items-center text-orange-900 dark:text-orange-50 cursor-pointer" onClick={() => dispatch(logout())}>
      <p className="text-[0px] lg:text-[14px] ">Logout</p>
      <CgLogOut />
    </div>
  )
}

export default Logout