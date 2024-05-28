import { MdOutlineTranslate } from "react-icons/md"
import { useState } from "react"
import { translateOptions } from "../../constants";

const TranslateDropdown = ({ isOpen,open }) => {

  return (
    <div>
      <MdOutlineTranslate className="w-7 h-7 hover:fill-white p-1 rounded hover:bg-emerald-700 cursor-pointer dark:text-slate-100" onClick={open} />

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2 text-[14px]"
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