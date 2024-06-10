import { useEffect, useState } from "react"
import SortControls from "../Components/Sort/SortControls";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import { useSearchParams } from "react-router-dom";
import FindShopButton from "../Components/FindShopButton";
import { MdErrorOutline } from "react-icons/md";
import ProductCard from "../Components/Product/ProductCard";
import { axiosBase } from "../utils/constants";
import ProductList from "../Components/Product/ProductList";
import PathViewer from "../Components/Navbar/PathViewer";
import { usePath, useSidebar } from "../utils/hooks";

const sortList = (shops, isAscending) => {
  return shops.slice().sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (isAscending) {
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
    } else {
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
    }
    return 0;
  });
};


const ProductsPage = ({ addToCart, logHandle }) => {
  const path = usePath();
  const [isSideOpen, setIsSideOpen] = useSidebar();
  const [productList, setProductList] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [params] = useSearchParams();

  /* useEffect(() => {
    const liked = JSON.parse(localStorage.getItem("liked")) || [];
    localStorage.setItem("liked", JSON.stringify(liked));
    //getShops(""); // /shops/shops
  }, []) */

  useEffect(() => {
    setIsLoading(true)
    axiosBase.get("product/products/") //product/products/ //bd55ef2d-4ef9-41f7-bdb2-f69023d2a772
      .then(res => res.data)
      .then(data => {
        setProductList([...data])
        setIsLoading(false)
      })
      .catch(error => {
        setError(true);
        console.log(error);
      })

  }, [])

 /*  const getShops = (url) => {
    setIsLoading(true);
    axiosBase.get(url)
      .then(res => {
        setProductList(res.data)
        setIsLoading(false);
      })
      .catch(error => {
        setError(true);
        console.log(error);
      })
  } */

  const sortShops = (isAscending) => {
    setProductList(sortList(productList, isAscending));
  };

  return (
    <>
      <div className="flex flex-col gap-5 overflow-hidden h-full">
        {isSideOpen && window.innerWidth < 768 && (
          <div className="bg-mobile" onClick={() => setIsSideOpen(prev => !prev)}></div>
        )}
        <Navbar toggleSidebar={() => setIsSideOpen(prev => !prev)} logHandle={logHandle} />
        <div className="flex gap-3 overflow-hidden h-full">
          <Sidebar isSideOpen={isSideOpen} logHandle={logHandle} />
          <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">

            <div className="flex flex-col gap-3 flex-1 rounded-t-lg px-3 overflow-y-auto overflow-x-hidden bg-dark ">

              <div className="flex gap-3 justify-between">
                <SortControls sortShops={sortShops} />
                <PathViewer path={path} />
              </div>
              <div className="flex flex-col items-center gap-8">

                {productList?.length === 0 ? (
                  <div className="flex flex-col items-center gap-10">
                    <MdErrorOutline className="text-black dark:text-slate-100 w-6 h-6" />
                    <p className="text-center text-slate-800 dark:text-slate-200 text-[18px]">No products found.</p>
                    <FindShopButton />
                  </div>
                ) : (
                  <div className="flex flex-col gap-7 w-full">
                    <p className="logo-font text-[30px] text-center dark:text-slate-100">Products</p>
                    <ProductList productList={productList} error={error} isLoading={isLoading} addToCart={addToCart} />
                  </div>
                )}
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsPage