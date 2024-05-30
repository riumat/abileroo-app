import axios from "axios";
export const axiosBase = axios.create({
  baseURL: "https://1752-93-61-90-162.ngrok-free.app",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

export const translateOptions = [
  { "lang": "English", "desc": "(USA)" },
  { "lang": "Chinese", "desc": "(Cantonese)" },
  { "lang": "Spanish", "desc": "" },
  { "lang": "French", "desc": "" }
]

export const settingsOptions = [
  { "name": "Account Settings", "path": "/home" },
  { "name": "Favorites", "path": "/favorites" },
  { "name": "Order History", "path": "/orders" },
  { "name": "Logout", "path": "/" }
];





