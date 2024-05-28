import { IoMdSearch } from "react-icons/io";


const MobileSearchbar = ({openSearchbar}) => {
  return (
    <div onClick={openSearchbar}>
      <IoMdSearch className="w-5 h-5 dark:text-slate-100" />
    </div>
  )
}

export default MobileSearchbar