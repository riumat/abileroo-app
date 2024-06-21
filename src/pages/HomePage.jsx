import Greetings from "../Components/Home/Greetings";
import Carousel from "../Components/Home/Carousel";
import { Link } from "react-router-dom";
import History from "../Components/Home/History";
import FavoritesCard from "../Components/Home/FavoritesCard";
import { useTranslation } from "react-i18next";
import BigTitle from "../Components/Home/BigTitle";
import FindShopButton from "../Components/FindShopButton";
import Section from "../Components/Home/Section";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import Tutorial from "../Components/Home/Tutorial";

const HomePage = () => {

  return (
    <div className="flex flex-col gap-5 main-section w-full">
      <div className=" bg-gradient-to-r from-black to-95% to-amber-950">
        <div className=" mx-5 flex flex-col gap-5">

          <Greetings />
          <div className="flex justify-between items-center">
            <div className="flex-1 flex flex-col gap-10">
              <BigTitle />
              <FindShopButton />
            </div>
            <div className="flex-1 flex justify-center">
              <img src="bg-image.png" className="h-[400px] scale-[2]" alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-10 p-3 z-10">
            <div className="flex flex-col md:flex-row gap-5 ">

            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-center">

        <Tutorial/>

      </div>
    </div>

  )
}

export default HomePage