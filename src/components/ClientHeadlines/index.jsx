import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRef, useState } from "react"; // Import useState hook
import { articleBlog } from "constant/articleBlog";
import { Link } from "react-router-dom";

import navigateRight from "assets/images/founder/navigatorRight.svg";
import nextIcon from "assets/images/founder/nextIcon.svg";
import prevIcon from "assets/images/founder/previousIcon.svg";

import "components/ClientHeadlines/clientHeadlines.scss";

import "@splidejs/react-splide/css";
import useScreenMobile from "hooks/useScreenMobile";

const ClientHeadlines = () => {
  const isMobile = useScreenMobile({ size: 992 });

  const splideRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const splideOptions = {
    fixedWidth: !isMobile ? 396 : "100%",
    start: 0,
    perPage: !isMobile ? 4 : 1,
    gap: 24,
    rewind: false,
    pagination: false,
    arrows: false,
    rewindByDrag: true,
    focus: "left",
    classes: {
      arrows: "splide__arrows your-class-arrows",
      arrow: "splide__arrow splideArrow",
      prev: "splide__arrow--prev previousArrow",
      next: "splide__arrow--next nextArrow",
      pagination: "splide__pagination your-class-pagination", // container
      page: "splide__pagination__page your-class-page" // each button
    },
    breakpoints: {
      1440: {
        perPage: 4
      },
      1190: {
        perPage: 3,
        gap: "18px"
      },
      992: {
        perPage: 2,
        gap: "18px"
      },
      800: {
        perPage: 2,
        gap: "18px"
      },
      450: {
        perPage: 1
      }
    }
  };

  const goToNextSlide = () => {
    if (splideRef.current) {
      splideRef.current.go("+1");
    }
  };

  const goToPrevSlide = () => {
    if (splideRef.current) {
      splideRef.current.go("-1");
    }
  };

  const handleMove = (_, newIndex) => {
    setCurrentPage(newIndex + 1);
  };

  return (
    <section className="commonBackground cardsData">
      <div className="container">
        <h3 className="commonHeading">
          We keep{" "}
          <label className="integrationGradient">Making Headlines!</label>
        </h3>
      </div>

      <div className="homeSliderContainer">
        <Splide
          aria-label="My Favorite Images"
          options={splideOptions}
          onFirstMount={() => setCurrentPage(1)}
          onMove={handleMove}
          ref={splideRef}
        >
          {articleBlog.map((data, index) => (
            <SplideSlide key={index}>
              <Link to={data?.linkTo} target="_blank">
                <div className="articleSingleBlog">
                  <div className="articleSingleBlogCard">
                    <div className="articleDate">
                      <span>{data?.read}</span>
                      <span className="articleDateLine">|</span>
                      <span>{data?.date}</span>
                    </div>
                    <h3>{data?.header}</h3>
                    <p>{data?.para}</p>
                  </div>
                  <img
                    src={data?.brand}
                    alt="image"
                    className="articleLogoImg"
                  />
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className="counter">
        <span>
          <img
            src={prevIcon}
            alt="prevImg"
            className={`counterImg ${currentPage === 1 ? "disabled" : ""}`}
            onClick={goToPrevSlide}
          />
          {/* {Math.ceil(currentPage / 3)} / {articleBlog?.length / 3} */}
          {Math.ceil(currentPage)} / {articleBlog?.length}
          <img
            src={nextIcon}
            alt="nextImg"
            className={`counterImg ${
              currentPage === articleBlog?.length ? "disabled" : ""
            }`}
            onClick={goToNextSlide}
            // style={{
            //   visibility:
            //     currentPage === articleBlog.length ? "hidden" : "visible"
            // }}
          />
        </span>
        <Link to={"/articles"}>
          <div className="counterNavigator">
            <p>View All News</p>
            <img src={navigateRight} alt="image" />
          </div>
        </Link>
      </div>

      <div className="counterResponsive">
        <Link to={"/articles"}>
          <div className="counterResponsiveNavigator">
            <p>View All News</p>
            <img src={navigateRight} alt="image" />
          </div>
        </Link>

        <span>
          <img
            src={prevIcon}
            alt="prevImg"
            className={`counterImg ${currentPage === 1 ? "disabled" : ""}`}
            onClick={goToPrevSlide}
          />
          {/* {Math.ceil(currentPage / 3)} / {articleBlog?.length / 3} */}
          {Math.ceil(currentPage)} / {articleBlog?.length}
          <img
            src={nextIcon}
            alt="nextImg"
            className={`counterImg ${
              currentPage === articleBlog?.length ? "disabled" : ""
            }`}
            onClick={goToNextSlide}
            // style={{
            //   visibility:
            //     currentPage === articleBlog.length ? "hidden" : "visible"
            // }}
          />
        </span>
      </div>
    </section>
  );
};

export default ClientHeadlines;
