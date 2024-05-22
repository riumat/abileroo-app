import axios from "axios";
//la connessione viene prima bloccata da una pagina di avviso e poi errore CORS
export const axiosBase = axios.create({
  baseURL: "https://1752-93-61-90-162.ngrok-free.app",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})
