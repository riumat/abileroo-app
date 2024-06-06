import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

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

export const useOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("orders")) || []);
  }, [])

  return [orders, setOrders];
}

export const useLogged = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogged(JSON.parse(localStorage.getItem("logged")) || false);
  }, [])

  useEffect(() => {
    const path = isLogged ? "/home" : "/";
    navigate(path);
  }, [isLogged])

  return [isLogged, setIsLogged];
}
