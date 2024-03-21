import { useEffect } from "react";

import ReactGA from "react-ga";

import useScreenMobile from "hooks/useScreenMobile";

import Banner from "components/Banner";
import Growth from "components/Growth";
import CredilinqBusiness from "components/credilinqBusiness";
import ReasonStatistics from "components/ReasonStatistics";

import { payLaterData } from "constant/reasonData";

// TODO
// import BusinessPayments from "components/BusinessPayments";
// import bgImgLeft from "assets/images/payLater/paymentBgImg.png";
// import bgImgRight from "assets/images/payLater/paymentBgImg.png";

// TODO
// import PayLaterFinance from "containers/PayLater/PayLaterFinance";

import PayLaterBuyer from "containers/PayLater/PayLaterBuyer";

import bannerImage from "assets/images/payLater/bannerImg.png";
import bannerMbImage from "assets/images/payLater/mobileImg.png";

import "containers/PayLater/payLater.scss";

const PayLater = () => {
  const TRACKING_ID = "UA-198986171-1";

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const isMobile = useScreenMobile({ size: 768 });

  const imageSource = isMobile ? bannerMbImage : bannerImage;

  const bannerData = {
    title: "Power buyer financing with CrediLinq's ",
    gradientText: "B2B PayLater plugin",
    paraGraph:
      "With CrediLinq's embedded finance toolkit, marketplaces can offer buyer financing products that provide a more comprehensive and customer-centric shopping experience",
    bannerImg: imageSource,
    button: "Get Started",
    link: "/get-started"
  };

  const growthData = {
    title: "Empower Your Buyers With One-Click Checkout",
    subText:
      "Offer your buyers a seamless one-click checkout experience and empower them with instant and affordable access to capital.",
    buttonText: "Connect With Us",
    link: "/get-started"
  };

  // TODO
  // const paymentContentData = {
  //   text: "B2B BNPL is set to change",
  //   gradientText: " business payments",
  //   content:
  //     "As we know it. With the global business payments industry set to surpass USD 1,563.5 billion in valuation, B2B BNPL will empower businesses of tomorrow with a better lending experience. Download our latest whitepaper to know how.",
  //   button: "Download Whitepaper",
  //   leftImage: bgImgLeft,
  //   rightImage: bgImgRight
  // };

  return (
    <div className="payLater">
      <Banner
        bannerData={bannerData}
        extraClass={"bannerDataHeading"}
        childData={"bannerDataNewImg"}
      />
      <ReasonStatistics
        reasonData={payLaterData}
        extraClass={"reasonStatisticsPara"}
        headerClass={"text"}
      />
      <Growth growthData={growthData} />
      {/* TODO */}
      {/* <PayLaterFinance /> */}
      <PayLaterBuyer />
      {/* TODO <BusinessPayments
        bussinessData={paymentContentData}
        extraClass={"paymentsParaGraph"}
      /> */}
      <CredilinqBusiness />
    </div>
  );
};

export default PayLater;
