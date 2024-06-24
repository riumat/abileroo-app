import Greetings from "../Components/Home/Greetings";
import BigTitle from "../Components/Home/BigTitle";
import FindShopButton from "../Components/FindShopButton";
import Tutorial from "../Components/Home/Tutorial";

const HomePage = () => {

  return (
    <div className="flex flex-col gap-5 main-section w-full">
      <div className=" bg-gradient-to-r from-black to-95% to-amber-950">
        <div className=" mx-5 my-8 flex flex-col gap-5">

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

        </div>
      </div>
      <Tutorial />
    </div>

  )
}

export default HomePage