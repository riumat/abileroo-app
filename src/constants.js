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
  "Account Settings",
  "Privacy",
  "Invite Friends",
  "Logout"
];

export const sidebarDiscover = {
  "shops": [
    "Trending Shops",
    "Shops Near You",
    "All Shops"
  ],
  "products": [
    "All products",
    "50% Discount"
  ]
}

export const sidebarUser = [
  "Account Settings",
  "Your Orders",
  "Payment Methods",

]

