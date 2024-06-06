export const addOrder = (orders, order, date, total) => {
  const added = [...orders, { order: order, date: date, total: total }];
  localStorage.setItem("orders", JSON.stringify(added));
  return added;
}