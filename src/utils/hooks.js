import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { axiosBase } from "./constants";
import { useSelector } from "react-redux";

export const useSidebar = () => {
  const [isSideOpen, setIsSideOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const updateSidebar = () => setIsSideOpen(window.innerWidth > 768);
    window.addEventListener("resize", updateSidebar);
    return () => window.removeEventListener("resize", updateSidebar);
  });

  return [isSideOpen, setIsSideOpen];
}

export const useLogged = () => {
  const isLogged = useSelector(state => state.auth.isLog);
  const navigate = useNavigate();
  const location = useLocation();

  /* useEffect(() => {
    console.log(isLogged);
    const path = isLogged ? location.pathname : "/";
    navigate(path);
  }, [isLogged]) */
}

export const usePath = () => {
  const [path, setPath] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname.split("/").filter(route => route !== ""));
  }, [location])

  return path;
}
