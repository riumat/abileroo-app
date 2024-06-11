import { MdOutlineTranslate } from "react-icons/md"
import { useState } from "react"
import { translateOptions } from "../../utils/constants";

const TranslateDropdown = ({ isOpen, open }) => {

  return (
    <div>
      <MdOutlineTranslate className="nav-button" onClick={open} />

      {isOpen && (
        <div className="nav-dropdown"        >
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