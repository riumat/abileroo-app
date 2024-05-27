import { useState } from "react"
import { CiSearch } from "react-icons/ci";


const Searchbar = ({ searchByName }) => {
  const [query, setQueryName] = useState("");
const submitHandle=(e)=>{
  e.preventDefault();
  searchByName(query);
}

  return (
    <form onSubmit={(e) => submitHandle(e)} className="flex items-center justify-between flex-grow rounded-lg bg-white shadow text-[15px] cursor-text">
      <div className="px-3 py-1">
        <CiSearch className="w-4 h-4"/>
      </div>

      <input
        className="p-2 outline-none flex-1 rounded-lg"
        placeholder="Search shop"
        type="text"
        onChange={(e) => setQueryName(e.target.value)} />

    </form>
  )
}

export default Searchbar