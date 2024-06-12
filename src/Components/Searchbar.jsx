import { useState } from "react"
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";
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
      className="flex items-center justify-between flex-grow rounded-s-lg md:rounded-lg bg-dark text-[15px] cursor-text"
    >
      <div className="px-3 py-1">
        <CiSearch className="w-4 h-4" />
      </div>

      <input
        className="p-3 md:p-2 outline-none flex-1 rounded-lg bg-transparent"
        placeholder={t("searchbar")}
        type="text"
        onChange={(e) => setQueryName(e.target.value)} />

    </form>
  )
}

export default Searchbar