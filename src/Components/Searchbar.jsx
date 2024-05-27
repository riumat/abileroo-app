import { useState } from "react"
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";

const Searchbar = () => {
  const [query, setQueryName] = useState("");
  const navigate = useNavigate();

  const submitHandle = (e) => {
    console.log("test")
    e.preventDefault();
    navigate(`/home?search=${query}`);
  }

  return (
    <form onSubmit={(e) => submitHandle(e)} className="flex items-center justify-between flex-grow rounded-lg bg-white lg:shadow text-[15px] cursor-text">
      <div className="px-3 py-1">
        <CiSearch className="w-4 h-4" />
      </div>

      <input
        className="p-3 lg:p-2 outline-none flex-1 rounded-lg"
        placeholder="Search shop"
        type="text"
        onChange={(e) => setQueryName(e.target.value)} />

    </form>
  )
}

export default Searchbar