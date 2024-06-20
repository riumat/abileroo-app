import { useEffect } from "react"
import SortControls from "../Components/Sort/SortControls";
import ProductList from "../Components/Product/ProductList";
import PathViewer from "../Components/Navbar/PathViewer";
import { useTranslation } from "react-i18next";
import { sortList } from "../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { getProductList, orderProductList } from "../redux/product/productSlice";
import { ClipLoader } from "react-spinners";

const ProductsPage = () => {
  const { productList, error, isLoading } = useSelector(state => state.product);
  const { t } = useTranslation("translation", { keyPrefix: "product-page" })
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, [])

  if (error) {
    return (
      <div className='w-full h-full bg-dark flex justify-center items-center'>
        <p>Failed to fetch data</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='w-full h-full flex justify-center items-center bg-dark '>
        <ClipLoader />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5 flex-1 bg-dark rounded-t-lg overflow-auto">
      <div className="flex flex-col gap-3 flex-1 rounded-t-lg px-3 overflow-y-auto overflow-x-hidden bg-dark ">

        <div className="flex gap-3 justify-between">
          <SortControls sortShops={(isAscending) => dispatch(orderProductList(sortList(productList, isAscending)))} />
          <PathViewer />
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-7 w-full">
            <p className="logo-font text-[30px] text-center dark:text-slate-100">{t("title")}</p>
            <ProductList productList={productList} error={error} isLoading={isLoading} />
          </div>
        </div>
      </div>


    </div>
  )
}

export default ProductsPage