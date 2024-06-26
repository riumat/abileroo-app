import React from 'react'
import { motion } from 'framer-motion'
import { pagesAnimation } from '../utils/constants'

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={pagesAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className='flex w-full'
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage