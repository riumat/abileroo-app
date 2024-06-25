import Navbar from "../Components/Navbar/Navbar";

const Layout = ({ Prop }) => {

  return (
    <div className="flex flex-col  overflow-hidden h-full bg-light dark:bg-dark">
      <Navbar />
      <section className="flex gap-3 overflow-hidden h-full">
        {Prop}
      </section>
    </div>
  )
}

export default Layout