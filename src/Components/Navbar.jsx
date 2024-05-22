import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="rounded-3xl bg-blue-600 text-white flex items-center p-3 w-30% mt-5">
      <Link to={"/"}>Abileroo</Link>
    </nav>
  )
}

export default Navbar