import { useLocation } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";

const Layout = ({ Prop }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col  overflow-hidden h-full bg-light dark:bg-dark" >
      <Navbar />
      <AnimatePresence mode="wait">
        <div key={location.pathname} className="flex gap-3 overflow-hidden h-full">
          {Prop}
        </div>
      </AnimatePresence>
    </div>
  )
}

export default Layout