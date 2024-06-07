export const shopAdder = (favorites, id) => {
  const added = [...favorites, id];
  localStorage.setItem("liked", JSON.stringify(added));
  return added;
}

export const shopRemover = (favorites, id) => {
  const removed = [...favorites]
  const index = favorites.indexOf(id);
  if (index !== -1) {
    removed.splice(index, 1);
  }
  localStorage.setItem("liked", JSON.stringify(removed));
  return removed;
}