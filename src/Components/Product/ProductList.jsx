import ProductCard from './ProductCard'
import ErrorDisplay from '../ErrorDisplay'
import LoadingDisplay from '../LoadingDisplay'
import { motion } from 'framer-motion'
import { listAnimation } from '../../utils/constants'

const ProductList = ({ productList, error, isLoading }) => {
  if (error) return <ErrorDisplay />
  if (isLoading) return <LoadingDisplay />

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 justify-items-center">
      {productList?.map((product, index) => (
        <motion.div key={`product-card-${index}`} className='border-2 border-transparent p-3 rounded-xl hover:border-orange-900  hover:shadow-xl'
          variants={listAnimation} initial="initial" animate="animate" transition={{ ease: "easeOut", duration: 0.6, delay: 0.2 * index }}
        >
          <ProductCard p={product} />
        </motion.div>
      ))}
    </div>
  )
}

export default ProductList