import { ClipLoader } from 'react-spinners'
import ProductCard from './ProductCard'

const ProductList = ({ productList, error, isLoading, addToCart }) => {
  if (error){
    return(
      <div className='w-full h-full flex justify-center items-center'>
        <p>Failed to fetch data</p>
      </div>
    )
  }
  if (isLoading){
    return(
      <div className='w-full h-full flex justify-center items-center'>
        <ClipLoader/>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 justify-items-center">
      {productList?.map((product, index) => (
        <div key={`product-card-${index}`}>
          <ProductCard p={product} addToCart={addToCart} />
        </div>
      ))}
    </div>
  )
}

export default ProductList