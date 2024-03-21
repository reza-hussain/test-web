import { useEffect } from "react";

import ReactGA from "react-ga";

import useScreenMobile from "hooks/useScreenMobile";
import Arrow from "constant/arrow";

import CrediLinqBenefits from "components/CredilinqBenefits";
import Growth from "components/Growth";
import RevenueBusiness from "components/RevenueBusiness";
import Banner from "components/Banner";
import SmeHealthJobs from "components/SmeHealthJobs";
import CredilinqBusiness from "components/credilinqBusiness";
import CustomerStories from "components/CustomerStories/";

import { accordionFinanceData } from "constant/accordion";
import { financeData } from "constant/benefits";

import bannerImage from "assets/images/recurringRevenue/bannerImg.svg";
import bannerImagePhn from "assets/images/recurringRevenue/bannerMobileImg.png";

const RecurringRevenueFinancing = () => {
  const TRACKING_ID = "UA-198986171-1";

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const isMobile = useScreenMobile({ size: 768 });
  const imageSource = isMobile ? bannerImagePhn : bannerImage;

  const render = (
    <h1 className="commonHeading customerHeading">
      Customer
      <span className="commonGradient customerGradient"> Success Stories</span>
    </h1>
  );

  const renderData = (
    <button className="commonButton customerButton">
      View Case Study <Arrow />
    </button>
  );

  const growthData = {
    title: "Leverage Your Recurring Revenue Streams",
    subText:
      "Designed for businesses with Steady revenue streams & Subscription - based business model",
    buttonText: "Connect With Us",
    link: "/get-started"
  };

  const bannerData = {
    title: "Power Your Business With Our ",
    gradientText: " Revenue Finance Solutions",
    paraGraph:
      "Fuel your business growth with revenue-based financing, preserving your equity.",
    bannerImg: imageSource,
    button: "Apply Now",
    link: "https://alexi.credilinq.ai/application/type/recurring"
  };

  const data = {
    heading: "Sky rocket your ",
    specialText: "Revenue Growth",
    para: "Take a deep dive into your organization’s finances and understand your cashflow, top inflow-outflow transactions and much more"
  };

  const customerStoriesData = {
    profileName: "Andrew Romeo",
    position: "Chief Executive Officer, ShopFront",
    button: "View Case Study"
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
        gradientClass={"bannerDataClass"}
      />
      <CrediLinqBenefits
        data={data}
        credilinqBenefits={financeData}
        extraClass={"reasonStatisticsPara"}
        headerClass={"credilinqBenefitsHeaderData"}
        secondClass={"credilinqBenefitsWidth"}
        childClass={"credilinqBenefitsWidthData"}
        displayClass={"credilinqBenefitsClass"}
        newClass={"credilinqBenefitsGap"}
      />
      <Growth growthData={growthData} />
      <RevenueBusiness headingClass={"financeHeaderText"} />
      <CustomerStories
        customerStoriesData={customerStoriesData}
        renderContent={render}
        renderData={renderData}
      />
      <SmeHealthJobs
        accordionData={accordionFinanceData}
        accordionTitle={payLaterDirectTitle}
      />
      <CredilinqBusiness />
    </div>
  );
};

export default RecurringRevenueFinancing;
