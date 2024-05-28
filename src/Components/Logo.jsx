import { SiDeliveroo } from "react-icons/si"

const Logo = () => {
  return (
    <div className='flex items-center justify-center gap-3'>
          <SiDeliveroo className='w-5 h-5 dark:text-slate-100' />
          <p className='text-[0px] md:text-[17px] lg:text-[20px] logo-font dark:text-slate-100'>Abileroo</p>
        </div>
  )
}

export default Logo