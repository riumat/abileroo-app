import { IoSearchSharp } from "react-icons/io5";


const MobileSearchbar = ({openSearchbar}) => {
  return (
    <div onClick={openSearchbar} className="px-3 py-1 cursor-pointer">
      <IoSearchSharp className="w-5 h-5 text-orange-900 dark:text-orange-50" />
    </div>
  )
}

export default MobileSearchbar