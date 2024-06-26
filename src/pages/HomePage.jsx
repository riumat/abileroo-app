import Greetings from "../Components/Home/Greetings";
import BigTitle from "../Components/Home/BigTitle";
import FindShopButton from "../Components/FindShopButton";
import Tutorial from "../Components/Home/Tutorial";
import AnimatedPage from "./AnimatedPage";

const HomePage = () => {

  return (
    <AnimatedPage>
      <div className="main-section flex-col gap-5 ">
        <div className=" bg-gradient-to-r from-black to-95% to-amber-950">
          <div className=" mx-5 my-8 flex flex-col gap-5">

            <Greetings />

            <div className="flex justify-between items-center flex-col md:flex-row md:gap-0 gap-10">

              <div className="flex-1 flex flex-col gap-10">
                <BigTitle />
                <FindShopButton />
              </div>

              <div className="flex-1 flex  justify-center">
                <img src="./images/bg-image.webp" className="h-[400px] scale-[1.5] lg:scale-[2]" alt="" />
              </div>

            </div>

          </div>
        </div>
        <Tutorial />
      </div>
    </AnimatedPage>
  )
}

export default HomePage