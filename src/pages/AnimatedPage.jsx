import React from 'react'
import { motion } from 'framer-motion'

const animation = {
  initial: { opacity: 0, y: -15 },
  animate: { opacity: 1, y: 0 },
  transition: { ease: "linear", duration: 1, opacity: { duration: 2 } },
  exit: { opacity: 0, y: -15 },
}

const AnimatedPage = ({ children }) => {
  return (
    <motion.div variants={animation} initial="initial" animate="animate" exit="exit" transition="transition" className='flex w-full'>
      {children}
    </motion.div>
  )
}

export default AnimatedPage