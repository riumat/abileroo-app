
const SortControls = ({ orderedList }) => {
  return (
    <div className="flex gap-7 items-center bg-white rounded-lg shadow p-2 justify-center">
      <p className="text-[14px]">Sort options</p>
      <div className="flex gap-5 items-center">
        <div className="flex flex-col items-center gap-1">
          <p className="text-[14px]">A-Z</p>
          <input className="w-4 h-4" type="radio" name="sort" id="1-sort" onClick={() => orderedList(true)} />
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-[14px]">Z-A</p>
          <input className="w-4 h-4" type="radio" name="sort" id="2-sort" onClick={() => orderedList(false)} />
        </div>
      </div>
    </div>
  )
}

export default SortControls