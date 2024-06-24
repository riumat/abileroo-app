import { useState } from 'react';
import { ClipLoader } from 'react-spinners'

const LoadingDisplay = () => {
  const [isDarkMode] = useState(document.documentElement.classList.contains("dark"));
  const darkColor = "#431407";
  const lightColor = "#fff7ed"

  return (
    <div className='w-full h-full flex justify-center items-center '>
      <ClipLoader className='w-8 h-8' color={isDarkMode ? lightColor : darkColor} />
    </div>
  )
}

export default LoadingDisplay