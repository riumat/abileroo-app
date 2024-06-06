export const cartRemover = (cart, id) => {
  const index = cart.list.findIndex(item => item.id === id);
  if (index !== -1) {
    const removed = [...cart.list];
    removed.splice(index, 1);
    const shopId = removed.length === 0 ? "" : cart.id;
    localStorage.setItem("cart", JSON.stringify({ ...{ id: shopId }, list: [...removed] }));
    return { ...{ id: shopId }, list: [...removed] };
  }
}

export const cartAdder = (cart, { id, name, price, product_image, shop }) => {
  const added = [...cart.list, { id: id, name: name, price: price, product_image: product_image, shop: shop }];
  localStorage.setItem("cart", JSON.stringify({ ...{ id: shop }, list: [...added] }));
  return { ...{ id: shop }, list: [...added] };
}