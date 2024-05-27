import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";

const SortDropdown = ({ isOpen, orderList }) => {

  return (
    <div className="flex">
      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2 text-[14px]"
        >
          <div className="flex gap-3 p-3 cursor-pointer hover:bg-slate-200 rounded-lg" onClick={() => orderList(true)}>
            <p>Alphabetical</p>
            <FaSortAlphaDown />
          </div>
          <div className="flex gap-3 p-3 cursor-pointer hover:bg-slate-200 rounded-lg" onClick={() => orderList(false)}>
            <p>Reverse Alphabetical</p>
            <FaSortAlphaDownAlt />
          </div>
        </div>
      )}
    </div>
  )
}

export default SortDropdown