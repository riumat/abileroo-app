import React from 'react'
import { NavLink } from 'react-router-dom'

const LinkButton = ({ text, path }) => {
  return (
    <NavLink to={path} className={({ isActive }) => (`${isActive ? "border-orange-900 dark:border-orange-50" : "border-neutral-300 dark:border-neutral-700"} py-2 px-3 xl:px-4 font-bold border-b-[2.6px]`)}>
      <p className="text-[12px] xl:text-[13px] text-orange-900 dark:text-orange-50">{text}</p>
    </NavLink>
  )
}

export default LinkButton