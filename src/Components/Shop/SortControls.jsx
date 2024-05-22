
const SortControls = ({ orderedList }) => {
  return (
    <div className="flex gap-5">
      <p>Sort options</p>
      <div>
        <p>A-Z</p>
        <input type="radio" name="sort" id="1-sort" onClick={() => orderedList(true)} />
      </div>
      <div>
        <p>Z-A</p>
        <input type="radio" name="sort" id="2-sort" onClick={() => orderedList(false)} />
      </div>
    </div>
  )
}

export default SortControls