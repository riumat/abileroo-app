import { useEffect, useState } from "react"
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import Greetings from "../Components/Home/Greetings";
import Carousel from "../Components/Home/Carousel";
import { Link } from "react-router-dom";
import History from "../Components/Home/History";
import FavoritesCard from "../Components/Home/FavoritesCard";

const HomePage = () => {
  const [isSideOpen, setIsSideOpen] = useState(window.innerWidth > 768);

  useEffect(() => {

  }, [])

  const updateSidebar = () => {
    setIsSideOpen(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSidebar);
    return () => window.removeEventListener("resize", updateSidebar);
  });

  return (
    <div className="flex flex-col gap-5 flex-grow overflow-hidden">
      {isSideOpen && window.innerWidth < 768 && (
        <div className="absolute top-0 left-0 bg-black/60 h-screen w-screen" onClick={() => setIsSideOpen(prev => !prev)}></div>
      )}
      <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} />
      <div className="flex gap-3 flex-grow overflow-hidden">
        <Sidebar isSideOpen={isSideOpen} />

        <div className="flex flex-col gap-16 flex-1 bg-emerald-50 dark:bg-emerald-950/70 rounded-t-lg p-3 overflow-y-auto overflow-x-hidden ">

          <Greetings />

          <div className="flex flex-col gap-12 ">

            <Link to={"/find"} className="flex flex-col items-start hover:scale-[1.01] duration-500">
              <div className="bg-white rounded-t-lg shadow py-1 px-3 text-[13px] dark:bg-slate-950 dark:text-white">
                <p>Search and Find Shops</p>
              </div>
              <Carousel />
            </Link>

            <div className="flex flex-col md:flex-row gap-5 ">

              <Link to={"/orders"} className="flex flex-col items-start flex-1 hover:scale-[1.01] duration-500">
                <div className="bg-white rounded-t-lg shadow py-1 px-3 text-[13px] dark:bg-slate-950 dark:text-white">
                  <p>Your Orders</p>
                </div>
                <History />
              </Link>

              <Link to={"/favorites"} className="flex flex-col items-start flex-1  hover:scale-[1.01] duration-500">
                <div className="bg-white rounded-t-lg shadow py-1 px-3 text-[13px]  dark:bg-slate-950 dark:text-white">
                  <p>Your Shops</p>
                </div>
                <FavoritesCard />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default HomePage