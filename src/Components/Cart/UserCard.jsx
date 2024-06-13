import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const setValue = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() < 10 ? `0${parseInt(now.getMonth()) + 1}` : now.getMonth();
  const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
  const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
  const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
  return `${year}-${month}-${day}T${parseInt(hour) + 1}:${minute}`
}

const UserCard = ({ onSubmit, shopId, total }) => {
  const dateTime = setValue()
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='p-5 bg-light rounded-lg shadow flex flex-col gap-5 items-center text-[14px]'
    >
      <div className="flex justify-between w-full">
        <p className=' text-[22px]'>Summary</p>

        <div className="flex flex-col  items-start text-[13px]">
          {errors.address && (
            <div className="flex items-center gap-1">
              <MdErrorOutline className="text-red-500 w-4 h-4" />
              <span className="text-red-500">{errors.address.message}</span>
            </div>
          )}
          {errors.date && (
            <div className="flex items-center gap-1">
              <MdErrorOutline className="text-red-500 w-4 h-4" />
              <span className="text-red-500">{errors.date.message}</span>
            </div>
          )}
        </div>
      </div>

      <div className={`flex flex-col gap-3 px-3 py-2 text-[18px] w-full border rounded-lg ${errors.address ? "border-red-600 placeholder:text-red-400" : "border-slate-400 "}`}>
        <p className='text-[13px] font-light text-center'>Address</p>

        <input
          {...register("address", { required: "Address is required" })}
          type="text" placeholder={`${errors.address ? "Address is required" : "Where should we deliver your order?"}`}
          className={`cart-input ${errors.address && "placeholder:text-red-400 border-red-200"}`}
        />
      </div>

      <div className={`flex flex-col gap-3 px-3 py-2 text-[18px] w-full border rounded-lg ${errors.date ? "border-red-600 placeholder:text-red-400" : "border-slate-400 "}`}>
        <p className='text-[13px] font-light text-center'>Delivery Time</p>
        
        <input
          type="datetime-local"
          {...register("date", { required: "Date is required", validate: { value: value => new Date(value) > new Date() || "Invalid Date" } })}
          step={60}
          defaultValue={dateTime}
          className={`relative cart-input ${errors.date && " border-red-200"}`}
        />
      </div>

      <div className="flex w-full  gap-2">

        <Link
          to={`/shop/${shopId}`}
          className="rounded-lg bg-white shadow p-3 text-slate-800 text-[15px] logo-font flex items-center justify-center flex-1"
        >
          Forgot Something?
        </Link>

        <button
          type="submit"
          className="p-3 bg-emerald-900 dark:bg-emerald-700 text-white text-[17px] rounded-lg flex-1"
        >
          Checkout
        </button>

      </div>

    </form>
  )
}

export default UserCard