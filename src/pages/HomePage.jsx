import Greetings from "../Components/Home/Greetings";
import Carousel from "../Components/Home/Carousel";
import { Link } from "react-router-dom";
import History from "../Components/Home/History";
import FavoritesCard from "../Components/Home/FavoritesCard";
import { useSidebar } from "../utils/hooks";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import { useTranslation } from "react-i18next";



const HomePage = () => {
  const [isSideOpen, setIsSideOpen] = useSidebar();
  const { t } = useTranslation("translation", { keyPrefix: "home-page" })

  return (
    <>
      <div className="flex flex-col gap-5 overflow-hidden h-full">
        {isSideOpen && window.innerWidth < 768 && (
          <div className="bg-mobile" onClick={() => setIsSideOpen(prev => !prev)}></div>
        )}
        <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} />
        <div className="flex gap-3 overflow-hidden h-full">
          <Sidebar isSideOpen={isSideOpen} />
          <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">


            <div className="flex flex-col flex-1 bg-home rounded-t-lg main-section">
              <div className='img-filter' />

              <Greetings />

              <div className="flex flex-col gap-12 p-3 z-10">

                <Link to={"/find"} className="flex flex-col items-start  duration-500">
                  <div className=" rounded-t-lg  py-1 px-3 text-[13px] bg-light">
                    <p>{t("search")}</p>
                  </div>
                  <Carousel />
                </Link>

                <div className="flex flex-col md:flex-row gap-5 ">

                  <Link to={"/orders"} className="flex flex-col items-start flex-1 duration-500">
                    <div className=" rounded-t-lg  py-1 px-3 text-[13px] bg-light">
                      <p>{t("orders")}</p>
                    </div>
                    <History />
                  </Link>

                  <Link to={"/favorites"} className="flex flex-col items-start flex-1 duration-500">
                    <div className="rounded-t-lg py-1 px-3 text-[13px] bg-light">
                      <p>{t("shops")}</p>
                    </div>
                    <FavoritesCard />
                  </Link>
                </div>

              </div>

            </div>



          </div>
        </div>
      </div>


    </>

  )
}

export default HomePage