import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";

const SortControls = ({ orderedList }) => {
  return (
    <div className="flex gap-3 items-center bg-white rounded-lg shadow p-1">
      <div className="flex p-1 cursor-pointer hover:bg-slate-200 rounded-lg" onClick={() => orderedList(true)}>
            <FaSortAlphaDown />
          </div>
          <div className="flex p-1 cursor-pointer hover:bg-slate-200 rounded-lg" onClick={() => orderedList(false)}>
            <FaSortAlphaDownAlt />
          </div>
    </div>
  )
}

export default SortControls