import { useEffect } from "react";

import ReactGA from "react-ga";

import Advantage from "containers/PayFinance/Advantage";

import ReasonStatistics from "components/ReasonStatistics";
import EmbeddedScroll from "containers/PayFinance/EmbeddedScroll";
import CredilinqBusiness from "components/credilinqBusiness";

import useScreenMobile from "hooks/useScreenMobile";
import Banner from "components/Banner";

import payFinanceBanner from "assets/images/payFinance/payFinanceBanner.png";
import payFinanceBannerRes from "assets/images/payFinance/payFinanceBannerRes.png";
import Growth from "components/Growth";

import { reasonData } from "constant/reasonData";

const index = () => {
  const TRACKING_ID = "UA-198986171-1";

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const isMobile = useScreenMobile({ size: 768 });

  const imageSource = isMobile ? payFinanceBannerRes : payFinanceBanner;

  const bannerData = {
    title: "Empower Sellers On Your Platform With Our",
    gradientText: " Seller Financing Plugins",
    paraGraph:
      "With CrediLinq APIs, marketplaces can configure innovative financial products for online sellers",
    bannerImg: imageSource,
    button: "Get Started",
    link: "/get-started"
  };

  const growthData = {
    title: "Empower your business with CrediLinq's B2B PayNow Solution",
    subText:
      "Don't let payments on your platform be just transactional, turn them into a revenue accelerator for your platform.",
    buttonText: "Get Started Today",
    link: "/get-started"
  };

  return (
    <>
      <Banner
        bannerData={bannerData}
        extraClass={"bannerDataHeader"}
        secondClass={"bannerDataGradient"}
      />
      <ReasonStatistics reasonData={reasonData} />
      <Growth growthData={growthData} />
      <EmbeddedScroll />
      <Advantage />
      <CredilinqBusiness />
    </>
  );
};

export default index;
