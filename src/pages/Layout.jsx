import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar";
import { useSidebar } from "../utils/hooks";

const Layout = ({ Prop }) => {
  const [isSideOpen, setIsSideOpen] = useSidebar();

  return (
    <div className="flex flex-col gap-5 overflow-hidden h-full">
      {isSideOpen && window.innerWidth < 768 && (
        <div className="bg-mobile" onClick={() => setIsSideOpen(prev => !prev)}></div>
      )}
      <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} />
      <div className="flex gap-3 overflow-hidden h-full">
        <Sidebar isSideOpen={isSideOpen} />
        {Prop}
      </div>
    </div>
  )
}

export default Layout