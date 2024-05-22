import { useState } from "react"
import { CiSearch } from "react-icons/ci";


const Searchbar = ({ searchByName }) => {
  const [query, setQuery] = useState("");
  return (
    <form onSubmit={(e)=>e.preventDefault()} className="flex items-center justify-between flex-1 border border-black rounded-xl">
      <input
        className="rounded-xl p-1  outline-none"
        placeholder="Search by shop name..."
        type="text"
        onChange={(e) => setQuery(e.target.value)} />
      <button className="px-5 py-3 rounded-e-xl bg-transparent hover:bg-slate-200 transition-colors h-full" onClick={() => searchByName(query)}><CiSearch className="w-7 h-7 "/></button>
    </form>
  )
}

export default Searchbar