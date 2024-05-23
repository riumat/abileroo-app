import { useState } from "react"
import { CiSearch } from "react-icons/ci";


const Searchbar = ({ searchByName }) => {
  const [query, setQuery] = useState("");
  return (
    <form onSubmit={(e)=>e.preventDefault()} className="flex items-center justify-between flex-1 rounded-lg bg-white shadow">
      <input
        className="p-2 outline-none flex-1"
        placeholder="Search by shop name..."
        type="text"
        onChange={(e) => setQuery(e.target.value)} />
      <button className="px-5 py-3 rounded-e-lg border-s border-slate-300 bg-transparent h-full" onClick={() => searchByName(query)}><CiSearch className="w-7 h-7 "/></button>
    </form>
  )
}

export default Searchbar