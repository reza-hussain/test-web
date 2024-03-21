import { useEffect } from "react";

import ReactGA from "react-ga";

import useScreenMobile from "hooks/useScreenMobile";

import Banner from "components/Banner";
import AmazonSellerWorks from "containers/AmazonSeller/AmazonSellerWorks";
import ReasonStatistics from "components/ReasonStatistics";
import SmeHealthJobs from "components/SmeHealthJobs";
import { amazonSellerAccordion } from "constant/accordion";
import { sellerCardData } from "constant/reasonData";

// import HowItWorks from "components/HowItWorks";
// import CredilinqBusiness from "components/credilinqBusiness";
// import Growth from "components/Growth";
// import WhyChoose from "containers/AmazonSeller/WhyChoose";

// import AmazonStore from "containers/AmazonSeller/AmazonStore";
// TODO  import EverythingToKnow from "containers/AmazonSeller/EverythingToKnow";

// import { howItWorksData } from "constant/howItWorksData";

import bannerImage from "assets/images/amazonSeller/amazonSellerBanner.png";
import bannerImagePhn from "assets/images/amazonSeller/amazonSellerBannerPhn.png";

import "containers/AmazonSeller/amazonSeller.scss";

const AmazonSeller = () => {
  const TRACKING_ID = "UA-198986171-1";

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const isMobile = useScreenMobile({ size: 768 });
  const imageSource = isMobile ? bannerImagePhn : bannerImage;

  // const growthData = {
  //   title: "You Focus on your Business. We Will Handle Your Financing",
  //   subText:
  //     "Scale ahead of your peers by leveraging CrediLinq.Ai’s Amazon seller financing today.",
  //   buttonText: "Apply Now",
  //   link: "https://sellerfinancing.credilinq.ai/?hsCtaTracking=3d876b1b-fe85-4b0f-9d28-120a79c7e906%7C00af0297-9ae8-42ac-b832-87e634483f8c"
  // };

  const bannerData = {
    title: "",
    gradientText: "Working Capital For Amazon Sellers",
    paraGraph:
      "Qualified sellers can get a credit line up to US$2 million.You can invest funds back into the business, which could be inventory purchase, pay bills, marketing etc. Pay only when you use funds. You decide.",
    specialText: "SIMPLE  |  FAST  |  FLEXIBLE",
    // clickingText: "* By clicking this, you will be redirected to Amazon Seller Central.",
    clickingText: (
      <span>
        <span style={{ color: "#9B3581", paddingRight: "5px" }}>*</span>
        By clicking this, you will be redirected to Amazon Seller Central.
      </span>
    ),
    bannerImg: imageSource,
    button: "Apply Now",
    link: "https://sellercentral.amazon.com/selling-partner-appstore/dp/amzn1.sp.solution.8929c9a5-7836-49fc-9a92-53ea94c71151"
  };

  const payLaterDirectTitle = {
    title: "Frequently Asked ",
    subTitle: "Questions"
  };

  return (
    <div className="amazonSeller">
      <Banner
        bannerData={bannerData}
        amazonSellerBannerData={"amazonSellerBannerData"}
        amazonSellerBannerParaData={"amazonSellerBannerParaData"}
        amazonSellerBannerImage={"amazonSellerBannerImage"}
        amazonSellerSpecialText={"amazonSellerSpecialText"}
        amazonSellerCardHeading={"amazonSellerCardHeading"}
        amazonSellerClickingText={"amazonSellerClickingText"}
      />
      <ReasonStatistics
        reasonData={sellerCardData}
        amazonSellerCardHeading={"amazonSellerCardHeading"}
        amazonSellerTitleFlex={"amazonSellerTitleFlex"}
        amazonSellerTitleHeading={"amazonSellerTitleHeading"}
      />
      <AmazonSellerWorks />
      {/* <HowItWorks howItWorksData={howItWorksData} /> */}
      {/* <Growth growthData={growthData} childClass={"growthStatisticsText"} /> */}
      {/* <AmazonStore /> */}
      {/* TODO <EverythingToKnow /> */}
      {/* <WhyChoose /> */}
      <SmeHealthJobs
        accordionData={amazonSellerAccordion}
        accordionTitle={payLaterDirectTitle}
        amazonSellerBackground={"amazonSellerBackground"}
        amazonSellerFaqBottomGap={"amazonSellerFaqBottomGap"}
      />
      {/* <CredilinqBusiness /> */}
    </div>
  );
};

export default AmazonSeller;
