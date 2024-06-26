export const translateOptions = [
  { "lang": "English", value: "us", country: "US" },
  { "lang": "Italiano", value: "it", country: "IT" },
]

export const settingsOptions = [
  { "name": "user", "path": "/home" },
  { "name": "favorites", "path": "/favorites" },
  { "name": "orders", "path": "/orders" }
];

export const imageReplacer = "https://www.mangiosenza.it/wp-content/plugins/userpro/img/placeholder.jpg";

export const registerMock = "https://run.mocky.io/v3/fcefb1dd-1fcc-4b4a-98a6-595b83b3e837";
export const orderMock="https://run.mocky.io/v3/4a343ddb-1feb-4dda-bc90-158d052a755d"

export const darkColor = "#431407";
export const lightColor = "#fff7ed"

export const dropdownsAnimation = {
  initial: { opacity: 0, y: -5 },
  animate: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.3 } },
  exit: { opacity: 0, y: -5 },
}

export const pagesAnimation = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
  exit: { opacity: 0, y: 20, transition: { ease: "easeOut", duration: 0.5 } },
}

export const listAnimation = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
}