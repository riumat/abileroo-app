import { Link } from 'react-router-dom'

const FindShopButton = () => {
  return (
    <Link to={"/find"} className="p-2 rounded-lg bg-emerald-900 text-slate-100 text-[14px] font-bold">Start browsing</Link>
  )
}

export default FindShopButton