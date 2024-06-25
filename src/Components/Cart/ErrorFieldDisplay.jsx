import { MdErrorOutline } from 'react-icons/md'

const ErrorFieldDisplay = ({ message }) => {
  return (
    <div className="flex items-center gap-1">
      <MdErrorOutline className="text-red-500 w-4 h-4" />
      <span className="text-red-500">{message}</span>
    </div>
  )
}

export default ErrorFieldDisplay