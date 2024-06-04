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
        <div className="bg-mobile" onClick={() => setIsSideOpen(prev => !prev)}></div>
      )}
      <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} />
      <div className="flex gap-3 flex-grow overflow-hidden">
        <Sidebar isSideOpen={isSideOpen} />

        <div className="flex flex-col  flex-1 bg-home rounded-t-lg  overflow-y-auto overflow-x-hidden relative">
        <div className='absolute bg-gradient-to-t from-emerald-50 from-30% to-black/70 dark:from-emerald-950 dark:from-0% dark:to-black/50  w-full h-full '/>

          <Greetings />

          <div className="flex flex-col gap-12 p-3 z-10">

            <Link to={"/find"} className="flex flex-col items-start  duration-500">
              <div className=" rounded-t-lg  py-1 px-3 text-[13px] bg-light">
                <p>Search and Find Shops</p>
              </div>
              <Carousel />
            </Link>

            <div className="flex flex-col md:flex-row gap-5 ">

              <Link to={"/orders"} className="flex flex-col items-start flex-1 duration-500">
                <div className=" rounded-t-lg  py-1 px-3 text-[13px] bg-light">
                  <p>Your Orders</p>
                </div>
                <History />
              </Link>

              <Link to={"/favorites"} className="flex flex-col items-start flex-1 duration-500">
                <div className="rounded-t-lg py-1 px-3 text-[13px] bg-light">
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