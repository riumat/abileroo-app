import { SiDeliveroo } from "react-icons/si"

const Logo = () => {
  return (
    <div className='flex items-center justify-center gap-3 text-orange-900 dark:text-orange-50'>
          <SiDeliveroo className='w-5 h-5 ' />
          <p className='text-[0px] md:text-[17px] lg:text-[20px] logo-font '>Abileroo</p>
        </div>
  )
}

export default Logo