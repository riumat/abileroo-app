import { ClipLoader } from 'react-spinners'

const LoadingDisplay = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-dark '>
      <ClipLoader className='w-8 h-8' />
    </div>
  )
}

export default LoadingDisplay