import { useState } from "react"
import { Link } from "react-router-dom";

const Searchbar = ({ searchByName }) => {
  const [query, setQuery] = useState("");
  return (
    <div className="flex items-center justify-between w-full border border-black rounded-xl">
      <input
        className="rounded-xl p-3 flex-grow"
        placeholder="Activity name..."
        type="text"
        onChange={(e) => setQuery(e.target.value)} />
      <button onClick={() => searchByName(query)}>Search</button>
    </div>
  )
}

export default Searchbar