import { useEffect, useState } from "react"
import SortControls from "../Components/Sort/SortControls";
import FindShopButton from "../Components/FindShopButton";
import { MdErrorOutline } from "react-icons/md";
import { axiosBase } from "../utils/constants";
import ProductList from "../Components/Product/ProductList";
import PathViewer from "../Components/Navbar/PathViewer";
import { usePath } from "../utils/hooks";
import { useTranslation } from "react-i18next";
import { sortList } from "../utils/functions";

const ProductsPage = () => {
  const path = usePath();
  const [productList, setProductList] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation("translation", { keyPrefix: "product-page" })

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


  return (
    <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">
      <div className="flex flex-col gap-3 flex-1 rounded-t-lg px-3 overflow-y-auto overflow-x-hidden bg-dark ">

        <div className="flex gap-3 justify-between">
          <SortControls sortShops={(isAscending) => setProductList(sortList(productList, isAscending))} />
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
              <p className="logo-font text-[30px] text-center dark:text-slate-100">{t("title")}</p>
              <ProductList productList={productList} error={error} isLoading={isLoading} />
            </div>
          )}
        </div>
      </div>


    </div>
  )
}

export default ProductsPage