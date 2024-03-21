import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollOnTop = () => {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    window.addEventListener("load", scrollToTop);
  }, []);
  useEffect(() => {
    scrollToTop();
  }, [pathname]);
};

export default ScrollOnTop;
