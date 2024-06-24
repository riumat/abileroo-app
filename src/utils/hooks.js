import { useEffect, useRef, useState } from "react";
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

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const updateMedia = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return isMobile;
}


export const usePath = () => {
  const [path, setPath] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname.split("/").filter(route => route !== ""));
  }, [location])

  return path;
}

export const useDate = () => {
  const [isEvening, setIsEvening] = useState();

  useEffect(() => {
    const hour = new Date().getHours().toLocaleString("it");
    setIsEvening(hour > 13);
  }, [])
  return isEvening;
}

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains("dark"));
  return [isDarkMode, setIsDarkMode];
}


export const useComponentVisible = (initialIsVisible) => {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
}
