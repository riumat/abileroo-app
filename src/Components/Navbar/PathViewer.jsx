import { Link } from "react-router-dom"
import { IoMdHome,IoIosArrowForward } from "react-icons/io";


const PathViewer = ({ path }) => {
  return (
    <div className="bg-light p-2 rounded-b-lg ">
      <div className="text-[13px] md:text-[15px] flex items-center gap-3 md:gap-5 ">
        <Link to={"/home"} className=""><IoMdHome/></Link>
        {path.map((route, index) => (
          <div className="flex items-center gap-3 md:gap-5 cursor-default">
            <IoIosArrowForward className="text-slate-500"/>
            <span key={`route-${index}`}>{`${route}`}</span>
          </div>
        ))}
      </div>
    </div>

  )
}

export default PathViewer