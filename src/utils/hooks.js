import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { axiosBase } from "./constants";

export const useSidebar = () => {
  const [isSideOpen, setIsSideOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const updateSidebar = () => setIsSideOpen(window.innerWidth > 768);
    window.addEventListener("resize", updateSidebar);
    return () => window.removeEventListener("resize", updateSidebar);
  });

  return [isSideOpen, setIsSideOpen];
}

export const useCart = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || { id: "", list: [] });
  }, [])

  return [cart, setCart];
}

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("liked")) || []);
  }, [])

  return [favorites, setFavorites];
}

export const useOrders = (isLogged) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("orders")) || []);

    if (isLogged) {
      const username = JSON.parse(localStorage.getItem("credentials")).username;
      const token = JSON.parse(localStorage.getItem("token"));

      axiosBase.get(`order/orders/?client_email=${username}`, {
        headers: {
          "Authorization": `Token ${token}`
        }
      })
        .then(res => {
          setOrders(res.data)
          console.log(res.data)
        })
        .catch(error => console.log(error))
    }
  }, [isLogged])

  return [orders, setOrders];
}

export const useLogged = () => {
  const [isLogged, setIsLogged] = useState(JSON.parse(localStorage.getItem("logged")) || false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLogged(JSON.parse(localStorage.getItem("logged")) || false);
  }, [])

  useEffect(() => {
    const path = isLogged ? location.pathname : "/";
    navigate(path);
  }, [isLogged])

  return [isLogged, setIsLogged];
}

export const usePath = () => {
  const [path, setPath] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname.split("/").filter(route => route !== ""));
  }, [location])

  return path;
}
