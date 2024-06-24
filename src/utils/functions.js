export const sortList = (shops, isAscending) => {
  return shops.slice().sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (isAscending) {
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
    } else {
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
    }
    return 0;
  });
};

export const formBuilder = (email, password) => {
  const body = new FormData();
  body.append("username", email);
  body.append("password", password);
  return body;
}

export const getCartFormatted = (list) => {
  const counter = list?.reduce((obj, product) => {
    if (!obj[product.id]) {
      obj[product.id] = { ...product, count: 0 };
    }
    obj[product.id].count++;
    return obj;
  }, {}) ?? {};
  return Object.values(counter);
}

export const getTotal = (list) => {
  return list?.reduce((current, product) => current + product.price, 0);
}

export const setDateString = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() < 10 ? `0${parseInt(now.getMonth()) + 1}` : now.getMonth();
  const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
  const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
  const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
  return `${year}-${month}-${day}T${parseInt(hour) + 1}:${minute}`
}

export const setShopImage = (url) => {
  if (url) {
    return process.env.REACT_APP_BASE_URL + url;
  }
  return null;
}

export const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
  return document.documentElement.classList.contains("dark");
}