
const ProductCard = ({ p, addToCart }) => {
  return (
    <div className="flex items-center justify-between p-2 rounded-2xl bg-slate-800 text-white">
      <div className="flex-1 flex items-center gap-4">
        <img src={p?.img} alt="" width={90} height={90} className="rounded-full border border-black" />
        <div className="flex flex-col gap-2">
          <div className="flex gap-5 ">
            <p className="text-[19px]">{p?.name}</p>
            <p className="text-[19px]">{p?.price}€</p>
          </div>
          <p>{p?.description}</p>
        </div>
      </div>
      <button className="p-3 bg-white text-black rounded-xl" onClick={() => addToCart(p.id, p.name, p.price)}>Add to Cart</button>
    </div>

  )
}

export default ProductCard