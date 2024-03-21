import { useEffect } from "react";

import ReactGA from "react-ga";

import useScreenMobile from "hooks/useScreenMobile";

import Banner from "components/Banner";
import ReasonStatistics from "components/ReasonStatistics";
import CredilinqBusiness from "components/credilinqBusiness";
import SmeHealthJobs from "components/SmeHealthJobs";
import Growth from "components/Growth";
import UseCase from "containers/PayLaterDirect/UseCase";

import { payLaterDirect } from "constant/reasonData";
import { accordionDataList } from "constant/accordion";

import bannerImage from "assets/images/payLaterDirect/bannerImg.svg";
import bannerImagePhn from "assets/images/payLaterDirect/bannerMobileImg.png";
// TODO import EverythingToKnow from "containers/PayLaterDirect/EverythingToKnow";

const PayLaterDirect = () => {
  const TRACKING_ID = "UA-198986171-1";

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const isMobile = useScreenMobile({ size: 768 });
  const imageSource = isMobile ? bannerImagePhn : bannerImage;

  const growthData = {
    title: "Instant, short-term financing for urgent business spends",
    subText:
      "Elevate your business to new heights by restocking your inventory, consistently meeting market demands, and improving your cash flow and finances.",
    buttonText: "Apply Now",
    link: "https://alexi.credilinq.ai/application/type"
  };

  const bannerData = {
    title:
      "Create and Orchestrate Short Term Business Financing Solutions with ",
    gradientText: "CrediLinq’s PayLater Direct",
    paraGraph:
      "Configure short term financing options for your customers based on their working capital cycle and requirements",
    bannerImg: imageSource,
    button: "Apply Now",
    link: "https://alexi.credilinq.ai/application/type"
  };

  const payLaterDirectTitle = {
    title: "Your Ultimate Guide to",
    subTitle: " PayLater Direct"
  };

  return (
    <div>
      <Banner
        bannerData={bannerData}
        dynamicData={"bannerDataSpecialText"}
        newClass={"bannerDataPayLaterDirect"}
        payLaterDirectRemoveTextTransform={"payLaterDirectRemoveTextTransform"}
      />
      <ReasonStatistics
        reasonData={payLaterDirect}
        extraClass={"credilinqBenefitsSecondData"}
      />
      <SmeHealthJobs
        accordionData={accordionDataList}
        accordionTitle={payLaterDirectTitle}
        payLaterDirectReduceFontSize={"payLaterDirectReduceFontSize"}
      />
      <Growth growthData={growthData} />
      {/* TODO <EverythingToKnow /> */}
      <UseCase />
      <CredilinqBusiness />
    </div>
  );
};

export default PayLaterDirect;
