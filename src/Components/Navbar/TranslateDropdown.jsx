import { MdOutlineTranslate } from "react-icons/md"
import { useState } from "react"
import { translateOptions } from "../../utils/constants";

const TranslateDropdown = ({ isOpen,open }) => {

  return (
    <div>
      <MdOutlineTranslate className="nav-button" onClick={open} />

      {isOpen && (
        <div
          className="absolute right-0 z-30 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2 text-[14px]"
        >
          {translateOptions.map((option, i) => (
            <div key={`translatedropdown-${i}`} className="p-4 cursor-pointer hover:bg-slate-300 w-full rounded-md" >
              <p >{option.lang} <span className="text-slate-700">{option.desc}</span></p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TranslateDropdown