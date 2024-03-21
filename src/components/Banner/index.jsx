import { Link, useLocation } from "react-router-dom";

import FadeUp from "components/FadeUp";

import Arrow from "constant/arrow";

import "components/Banner/banner.scss";

const Banner = ({
  bannerData,
  extraClass,
  extraPara,
  childClass,
  secondClass,
  aboutClass,
  gradientClass,
  dynamicData,
  childData,
  newClass,
  amazonSellerBannerData,
  payLaterDirectRemoveTextTransform,
  amazonSellerBannerParaData,
  amazonSellerBannerImage,
  amazonSellerSpecialText,
  amazonSellerClickingText
}) => {
  const location = useLocation();

  const isAboutPage = location.pathname === "/about-us";

  return (
    <section className="commonBackground bannerData">
      <div className="container">
        <FadeUp>
          <div className="bannerDataGrouping">
            <div className={"bannerDataContent " + amazonSellerBannerData}>
              <h1
                className={
                  "commonBannerHeading " +
                  childClass +
                  " " +
                  extraClass +
                  " " +
                  aboutClass +
                  " " +
                  payLaterDirectRemoveTextTransform
                }
              >
                {bannerData?.title}
                <label
                  className={
                    "commonBannerGradient " +
                    secondClass +
                    " " +
                    gradientClass +
                    " " +
                    dynamicData
                  }
                >
                  {bannerData?.gradientText}
                </label>
              </h1>
              <span
                style={{ paddingRight: "10px" }}
                className={"amazonSellerSpecialText"}
              >
                {/* SIMPLE  |  FAST  |  FLEXIBLE */}
                {bannerData.specialText}
              </span>

              <span
                className={
                  "bannerDataParaGraph " +
                  extraPara +
                  " " +
                  amazonSellerBannerParaData
                }
              >
                {bannerData.paraGraph}
              </span>

              {isAboutPage ? null : (
                <Link to={bannerData.link} target="_blank">
                  <button className="commonButton">
                    {bannerData.button} <Arrow />
                  </button>
                </Link>
              )}

              <span className={"amazonSellerClickingText"}>
                {bannerData.clickingText}
              </span>
            </div>
            {/* </FadeUp> */}
            {/* <FadeUp> */}
            <div
              className={
                "bannerDataImage " +
                childData +
                " " +
                newClass +
                " " +
                amazonSellerBannerImage
              }
            >
              <img src={bannerData?.bannerImg} alt="bannerImage" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Banner;
