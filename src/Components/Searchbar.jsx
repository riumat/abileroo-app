import { useState } from "react"
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";

const Searchbar = () => {
  const [query, setQueryName] = useState("");
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();
    navigate(`/home?search=${query}`);
  }

  return (
    <form onSubmit={(e) => submitHandle(e)} className="flex items-center justify-between flex-grow rounded-s-lg md:rounded-lg bg-emerald-50 dark:bg-emerald-900 dark:text-slate-100 text-[15px] cursor-text">
      <div className="px-3 py-1">
        <CiSearch className="w-4 h-4" />
      </div>

      <input
        className="p-3 md:p-2 outline-none flex-1 rounded-lg bg-transparent"
        placeholder="Search shop"
        type="text"
        onChange={(e) => setQueryName(e.target.value)} />

    </form>
  )
}

export default Searchbar