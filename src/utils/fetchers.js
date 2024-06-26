import axios from "axios";
import { axiosBase } from "./axios.config";
import { formBuilder, orderBuilder } from "./functions";
import { registerMock } from "./constants";

export const sendCredentials = async (payload) => {
  return await axiosBase({
    url: "login-token/",
    method: "post",
    data: formBuilder(payload.email, payload.password),
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}
export const sendCredentialsRegister = async (payload) => {
  return await axios({
    url: registerMock,
    method: "post",
    data: formBuilder(payload.email, payload.password),
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}


export const getShopFromId = async (shopId) => {
  return await axiosBase.get(`shop/shop/${shopId}`)
}

export const getOrdersFromEmail = async (email, token) => {
  return await axiosBase(`order/orders/?client_email=${email}`, {
    method: "get",
    headers: {
      "Authorization": `Token ${token}`
    }
  })
}

export const getProducts = async () => {
  return await axiosBase.get("product/products/");
}

export const getShopFromQuery = async (query) => {
  return await axiosBase.get(`shop/shops/?search=${query}`)
}

export const postOrder = async (order, delivery, address, email) => {
  return await axiosBase({
    url: "https://run.mocky.io/v3/4a343ddb-1feb-4dda-bc90-158d052a755d ",//https://run.mocky.io/v3/4a343ddb-1feb-4dda-bc90-158d052a755d  order/order-create/
    method: "post",
    data: orderBuilder(order, delivery, address, email),
    headers: {
      "Content-Type": "multipart/form-data", //application/x-www-form-urlencoded
      "Authorization": `Token ${localStorage.getItem("token")}`
    },
  })
}