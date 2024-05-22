
const SortControls = ({ orderedList }) => {
  return (
    <div className="flex gap-7 items-center">
      <p>Sort options</p>
      <div className="flex gap-5 items-center">
        <div className="flex flex-col items-center gap-2">
          <p>A-Z</p>
          <input className="w-4 h-4" type="radio" name="sort" id="1-sort" onClick={() => orderedList(true)} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p>Z-A</p>
          <input className="w-4 h-4" type="radio" name="sort" id="2-sort" onClick={() => orderedList(false)} />
        </div>
      </div>
    </div>
  )
}

export default SortControls