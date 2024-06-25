import { useState } from 'react';
import { ClipLoader } from 'react-spinners'
import { darkColor, lightColor } from '../utils/constants';

const LoadingDisplay = () => {
  const [isDarkMode] = useState(document.documentElement.classList.contains("dark"));
  
  return (
    <div className='w-full h-full flex justify-center items-center '>
      <ClipLoader className='w-8 h-8' color={isDarkMode ? lightColor : darkColor} />
    </div>
  )
}

export default LoadingDisplay