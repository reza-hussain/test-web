import { useEffect, useState } from "react";
// context
const useScreenMobile = ({
  size = 768,
  mobileFunc = () => {},
  desktopFunc = () => {}
}) => {
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    // onPage Resize change check
    const handleResize = () => {
      if (innerWidth <= size) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (innerWidth <= size) {
      mobileFunc();
    } else {
      desktopFunc();
    }
  }, [isMobileView]);
  return isMobileView;
};
export default useScreenMobile;
