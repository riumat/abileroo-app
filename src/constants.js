import axios from "axios";
export const axiosBase = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
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





