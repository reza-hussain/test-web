import { useEffect, useState } from "react";
import useScreenMobile from "hooks/useScreenMobile";
import { NavLink, useLocation } from "react-router-dom";
import HeaderLogo from "assets/images/header/headerLogo.svg";
import HeaderArrow from "assets/images/header/headerArrow.svg";
import HeaderHamburger from "assets/images/header/headerHamburger.svg";
import HeaderClose from "assets/images/header/headerClose.svg";
import payLater from "assets/images/header/payLater.svg";
import news from "assets/images/header/news.svg";
import blogs from "assets/images/header/blogs.svg";
import apiDocs from "assets/images/header/api.svg";
import payNow from "assets/images/header/payNow.svg";
import amazonSeller from "assets/images/header/amazonSeller.svg";
import smeHealth from "assets/images/header/smeHealth.svg";
import Arrow from "constant/arrow";
import DropDown from "constant/dropDown";
// Styles
import "components/Header/header.scss";
const index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(true);
  const [position, setPosition] = useState(0);
  // const [insight, setInsight] = useState(false);
  const [product, setProduct] = useState(false);
  const [resource, setResource] = useState(false);
  const { pathname } = useLocation();

  const isSolutionsActive =
    pathname.startsWith("/pay-later") ||
    pathname.startsWith("/pay-finance") ||
    pathname.startsWith("/seller-financing") ||
    pathname.startsWith("/pay-later-direct");

  const isResourceActive =
    pathname.startsWith("/blogs") ||
    pathname.startsWith("/news") ||
    pathname.startsWith("/articles");

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;
      if (moving > 100) {
        setHideHeader(position > moving);
      } else {
        setHideHeader(true);
      }
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const cls = hideHeader ? "" : "hidden";
  const isMobile = useScreenMobile({ size: 875 });
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  // const onInsight = () => {
  //   setInsight(!insight);
  //   setProduct(false);
  // };
  const onProduct = () => {
    setProduct(!product);
    // setInsight(false);
  };

  const onResource = () => {
    setResource(!resource);
  };

  const onMouseLeave = () => {
    setProduct(false);
    setResource(false);
    // setInsight(false);
  };
  const dropDownOptions = (
    <div className="headerDropDownData">
      <div className="headerCharacter">
        <div className="headerText">
          <p className="headerSpecialText">Use case for buyer financing</p>
          <div
            className={`linear ${
              pathname === "/pay-later" ? "dropDownActive" : ""
            }`}
          >
            <div className="headerTextContent">
              <div>
                <img src={payLater} alt="image" />
              </div>
              <NavLink
                to="/pay-later"
                onClick={() => {
                  onProduct();
                  closeMenu();
                }}
              >
                <div>
                  <h5 className="headerHeadingText">B2B PayLater</h5>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="headerText">
          <div className="headerContent">
            <p className="headerSpecialText">Use cases for seller financing</p>
            <div
              className={`linear ${
                pathname === "/pay-finance" ? "dropDownActive" : ""
              }`}
            >
              <div className="headerTextContent">
                <div>
                  <img src={payNow} alt="image" />
                </div>
                <NavLink
                  to={"/pay-finance"}
                  onClick={() => {
                    onProduct();
                    closeMenu();
                  }}
                >
                  <div>
                    <h5 className="headerHeadingText">B2B PayNow</h5>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="headerContent">
            <div
              className={`linear ${
                pathname === "/seller-financing" ? "dropDownActive" : ""
              }`}
            >
              <div className="headerTextContent">
                <div>
                  <img src={amazonSeller} alt="image" />
                </div>
                <NavLink
                  to={"/seller-financing"}
                  onClick={() => {
                    onProduct();
                    closeMenu();
                  }}
                >
                  <div>
                    <h5 className="headerHeadingText">
                      Amazon Seller Financing
                    </h5>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="headerText">
          <div className="headerContent">
            <p className="headerSpecialText">Use case for business financing</p>
            <div
              className={`linear ${
                pathname === "/pay-later-direct" ? "dropDownActive" : ""
              }`}
            >
              <div className="headerTextContent">
                <div>
                  <img src={smeHealth} alt="image" />
                </div>
                <NavLink
                  to={"/pay-later-direct"}
                  onClick={() => {
                    onProduct();
                    closeMenu();
                  }}
                >
                  <div>
                    <h5 className="headerHeadingText">PayLater Direct</h5>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const dropdownResources = (
    <div className="headerDropDownData">
      <div className="headerCharacter headerResources">
        <div className="headerText">
          <div
            className={`linear ${
              pathname === "/articles" ? "dropDownActive" : ""
            }`}
          >
            <div className="headerTextContent">
              <div>
                <img src={news} alt="image" />
              </div>
              <NavLink
                to="/articles"
                onClick={() => {
                  onResource();
                  closeMenu();
                }}
              >
                <div>
                  <h5 className="headerHeadingText">News</h5>
                </div>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="headerText">
          <div
            className={`linear ${
              pathname === "/blogs" ? "dropDownActive" : ""
            }`}
          >
            <div className="headerTextContent">
              <div>
                <img src={blogs} alt="image" />
              </div>
              <NavLink
                to="/blogs"
                onClick={() => {
                  onResource();
                  closeMenu();
                }}
              >
                <div>
                  <h5 className="headerHeadingText">Blogs</h5>
                </div>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="headerText">
          <div className={`linear ${pathname === " " ? "dropDownActive" : ""}`}>
            <div className="headerTextContent">
              <div>
                <img src={apiDocs} alt="image" />
              </div>
              <NavLink
                to=" "
                onClick={() => {
                  onResource();
                  closeMenu();
                }}
              >
                <div>
                  <h5 className="headerHeadingText">API Documentation</h5>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className={`header ${cls}`}>
        <div className="container headerNewContainer">
          <div className="headerContainer">
            <div className="headerSection">
              <div className="headerLogo">
                <a href={"/"}>
                  <img src={HeaderLogo} alt="HeaderLogo" />
                </a>
              </div>
              <ul className={`headerLinks ${isMenuOpen ? "headerOpen" : ""}`}>
                <div className="headerWrapper">
                  <li>
                    <NavLink
                      to={"/"}
                      onClick={isMobile ? closeMenu : ""}
                      className={`${isMobile ? "" : "null"} 
                      ${pathname === ("/" || "") ? "isActive" : ""}
                    `}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li
                    className="headerDropDown"
                    onMouseEnter={isMobile ? undefined : onProduct}
                    onMouseLeave={onMouseLeave}
                    onClick={isMobile ? onProduct : undefined}
                  >
                    <NavLink
                      to={""}
                      className={`headerNavLink ${
                        isSolutionsActive ? "isActive" : ""
                      }`}
                      onClick={(e) => e.preventDefault()}
                    >
                      Solutions
                      <div
                        style={{
                          transform: product ? "rotate(180deg)" : "",
                          display: "flex",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <DropDown />
                      </div>
                    </NavLink>
                    {product ? dropDownOptions : null}
                  </li>

                  {/* <li>
                    <NavLink
                      to={"/blogs"}
                      onClick={isMobile ? closeMenu : ""}
                      className={`
                          ${pathname === "/blogs" ? "isActive" : ""}
                        `}
                    > 
                      Resources
                    </NavLink>
                  </li> */}

                  <li
                    className="headerDropDown"
                    onMouseEnter={isMobile ? undefined : onResource}
                    onMouseLeave={onMouseLeave}
                    onClick={isMobile ? onResource : undefined}
                  >
                    <NavLink
                      to={""}
                      className={`headerNavLink ${
                        isResourceActive ? "isActive" : ""
                      }`}
                      onClick={(e) => e.preventDefault()}
                    >
                      Resources
                      <div
                        style={{
                          transform: resource ? "rotate(180deg)" : "",
                          display: "flex",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <DropDown />
                      </div>
                    </NavLink>
                    {resource ? dropdownResources : null}
                  </li>

                  <li>
                    <NavLink
                      to={"/about-us"}
                      onClick={isMobile ? closeMenu : ""}
                      className={`
                        ${pathname === "/about-us" ? "isActive" : ""}
                      `}
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/investor"}
                      onClick={isMobile ? closeMenu : ""}
                    >
                      Investors
                    </NavLink>
                  </li>
                </div>
                <div className="headerWrapperButton">
                  <NavLink
                    to={"/get-started"}
                    activeClassName="isActive"
                    onClick={isMobile ? closeMenu : ""}
                  >
                    <button className="headerButton headerButtonMobile">
                      Get Started <img src={HeaderArrow} alt="" />
                    </button>
                  </NavLink>
                </div>
              </ul>
            </div>
            <div className="headerButton">
              <NavLink to={"/get-started"} target="_blank">
                <button className="headerButtonBtn">
                  Get Started <Arrow />
                </button>
              </NavLink>
            </div>
            <div className="headerHamburger">
              {isMenuOpen ? (
                <div className="headerHamburger" onClick={closeMenu}>
                  <img src={HeaderClose} alt="HeaderClose" />
                </div>
              ) : (
                <div className="headerHamburger" onClick={toggleMenu}>
                  <img src={HeaderHamburger} alt="HeaderHamburger" />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default index;
