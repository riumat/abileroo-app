import { useEffect } from "react"
import SortControls from "../Components/Sort/SortControls";
import ProductList from "../Components/Product/ProductList";
import { useTranslation } from "react-i18next";
import { sortList } from "../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { getProductList, orderProductList } from "../redux/product/productSlice";
import AnimatedPage from "./AnimatedPage";

const ProductsPage = () => {
  const { productList, error, isLoading } = useSelector(state => state.product);
  const { t } = useTranslation("translation", { keyPrefix: "product-page" })
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, [])
//todo finire responsive

  return (
    <AnimatedPage>
      <div className="flex flex-col gap-5 flex-1 bg-dark overflow-auto">
        <div className="flex flex-col gap-3 flex-1 overflow-y-auto overflow-x-hidden bg-dark ">

          <div className="flex flex-col items-center gap-5 bg-gradient-to-r from-black to-95% to-amber-950 py-10">
            <p className="text-gradient from-white via-yellow-200 to-orange-200 text-[50px] text-center">{t("title")}</p>
            <p className="text-orange-50 text-center w-[800px]">{t("desc")}</p>
          </div>

          <div className="flex flex-col items-center gap-8">
            <SortControls sortShops={(isAscending) => dispatch(orderProductList(sortList(productList, isAscending)))} />
            <div className="flex flex-col gap-7 w-full">
              <ProductList productList={productList} error={error} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default ProductsPage