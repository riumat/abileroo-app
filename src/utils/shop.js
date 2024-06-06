export const shopLiker=(favorites,id)=>{
  const added = [...favorites, id];
    localStorage.setItem("liked", JSON.stringify(added));
    return added;
}

export const shopDisliker=(favorites,id)=>{
  const removed = [...favorites]
    const index = favorites.indexOf(id);
    if (index != -1) {
      removed.splice(index, 1);
    }
    localStorage.setItem("liked", JSON.stringify(removed));
    return removed;
}