import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const useSidebar = () => {
  const [isSideOpen, setIsSideOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const updateSidebar = () => setIsSideOpen(window.innerWidth > 768);
    window.addEventListener("resize", updateSidebar);
    return () => window.removeEventListener("resize", updateSidebar);
  });

  return [isSideOpen, setIsSideOpen];
}



export const usePath = () => {
  const [path, setPath] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname.split("/").filter(route => route !== ""));
  }, [location])

  return path;
}
