import Greetings from "../Components/Home/Greetings";
import Carousel from "../Components/Home/Carousel";
import { Link } from "react-router-dom";
import History from "../Components/Home/History";
import FavoritesCard from "../Components/Home/FavoritesCard";


const HomePage = () => {

  //todo vedere bene gli overflow e h-full di ogni pagina
  return (
        <div className="flex flex-col  flex-1 bg-home rounded-t-lg  overflow-y-auto overflow-x-hidden relative">
          <div className='absolute bg-gradient-to-t from-emerald-50 from-30% to-black/70 dark:from-emerald-950 dark:from-0% dark:to-black/50  w-full h-full ' />

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
  )
}

export default HomePage