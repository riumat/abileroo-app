import { useState } from "react"
import { useTranslation } from "react-i18next";
import { IoSearchSharp } from "react-icons/io5";


import { useNavigate } from "react-router";

const Searchbar = () => {
  const [query, setQueryName] = useState("");
  const navigate = useNavigate();
  const {t}=useTranslation()

  const submitHandle = (e) => {
    e.preventDefault();
    navigate(`/find?search=${query}`);
  }

  return (
    <form
      onSubmit={(e) => submitHandle(e)}
      className="flex items-center justify-between flex-grow rounded-s-lg md:rounded-lg bg-dark text-orange-900 dark:text-orange-50 text-[15px] cursor-text w-56"
    >
      <div className="px-3 py-1">
        <IoSearchSharp className="w-5 h-5" />
      </div>

      <input
        className="p-3 md:p-2 outline-none flex-1 rounded-lg bg-transparent placeholder:text-[14px] placeholder:text-orange-900/60 placeholder:dark:text-orange-50/60 w-full"
        placeholder={t("searchbar")}
        type="text"
        onChange={(e) => setQueryName(e.target.value)} />

    </form>
  )
}

export default Searchbar