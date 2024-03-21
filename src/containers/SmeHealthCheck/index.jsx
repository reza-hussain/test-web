import { useEffect } from "react";

import ReactGA from "react-ga";

import useScreenMobile from "hooks/useScreenMobile";

import Banner from "components/Banner";
import SmeHealthJobs from "components/SmeHealthJobs";
import CredilinqBusiness from "components/credilinqBusiness";
import CrediLinqBenefits from "components/CredilinqBenefits";

import { benefitsData } from "constant/benefits";
import { accordionData } from "constant/accordion";

import bannerImage from "assets/images/smeHealth/bannerImg.png";
import bannerImagePhn from "assets/images/smeHealth/bannerMobileImg.png";

const SmeHealthCheck = () => {
  const TRACKING_ID = "UA-198986171-1";

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const isMobile = useScreenMobile({ size: 768 });
  const imageSource = isMobile ? bannerImagePhn : bannerImage;

  const data = {
    heading: "Business finance management, ",
    specialText: "Analysis & Reporting",
    para: "Take a deep dive into your organization’s finances and understand your cashflow, top inflow-outflow transactions and much more."
  };

  const bannerData = {
    title: "Dive Into Your Organisations Finances And",
    gradientText: " Understand Cashflow And More",
    paraGraph:
      "Integrate our proprietary credit scoring and underwriting technologies and empower buyers on your platform",
    button: "Get Started",
    bannerImg: imageSource,
    link: "/get-started"
  };

  const payLaterDirectTitle = {
    title: "Frequently Asked ",
    subTitle: "Questions"
  };

  return (
    <div>
      <Banner
        bannerData={bannerData}
        childClass={"bannerDataHeading"}
        dynamicData={"bannerDataSpecialText"}
      />
      <CrediLinqBenefits
        data={data}
        credilinqBenefits={benefitsData}
        extraClass={"credilinqBenefitsSecondData"}
        newClass={"credilinqBenefitsGap"}
      />
      <SmeHealthJobs
        accordionData={accordionData}
        accordionTitle={payLaterDirectTitle}
      />
      <CredilinqBusiness />
    </div>
  );
};

export default SmeHealthCheck;
