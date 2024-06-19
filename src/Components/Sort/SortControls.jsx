import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";

const SortControls = ({ sortShops }) => {
  
  return (
    <div className="flex gap-3 items-center bg-white dark:bg-slate-950 dark:text-slate-100 rounded-b-lg shadow p-1">
      <div className="flex p-1 cursor-pointer hover:bg-slate-200 rounded-lg" onClick={() => sortShops(true)}>
            <FaSortAlphaDown />
          </div>
          <div className="flex p-1 cursor-pointer hover:bg-slate-200 rounded-lg" onClick={() => sortShops(false)}>
            <FaSortAlphaDownAlt />
          </div>
    </div>
  )
}

export default SortControls