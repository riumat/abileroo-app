import { CgSortAz } from "react-icons/cg"
import SortDropdown from "../Sort/SortDropdown"
import { useState } from "react"
import { TiArrowSortedDown } from "react-icons/ti";
import { MdOutlineSort } from "react-icons/md";


const SortControls = ({ orderedList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className="flex gap-7 items-center bg-white rounded-lg shadow p-2 justify-center">
      <div className="flex gap-2">
        <MdOutlineSort className="w-4 h-4" />
        <p className="text-[14px]" onClick={open}>Sort options</p>
      </div>
      <div>
        <TiArrowSortedDown className="w-7 h-7 hover:fill-white p-1 rounded bg-slate-200 hover:bg-blue-700 cursor-pointer" onClick={open} />

        <SortDropdown isOpen={isOpen} orderList={orderedList} />
      </div>
    </div>
  )
}

export default SortControls