import { MdOutlineDarkMode, MdOutlineLightMode, MdOutlineShoppingBag } from 'react-icons/md';
import { useDarkMode } from '../../utils/hooks'
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { toggleDarkMode } from '../../utils/functions';
import { useSelector } from 'react-redux';

const NavIcons = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const list = useSelector(state => state.cart.list);

  return (
    <>
      <div>
        {isDarkMode ? (
          <MdOutlineLightMode className="nav-button" onClick={() => setIsDarkMode(toggleDarkMode())} />
        ) : (
          <MdOutlineDarkMode className="nav-button" onClick={() => setIsDarkMode(toggleDarkMode())} />
        )}
      </div>
      <Link to={"/cart"} className="relative">

        <MdOutlineShoppingBag className="nav-button bg-light relative" />

        {list?.length !== 0 && (
          <span className="nav-cart-badge">
            {list?.length}
          </span>
        )}

      </Link>
      <Link to={"/favorites"}>
        <FaRegHeart className="nav-button" />
      </Link>
    </>
  )
}

export default NavIcons