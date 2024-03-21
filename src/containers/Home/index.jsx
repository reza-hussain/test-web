import { useEffect } from "react";

import ReactGA from "react-ga";

// TODO
// import CounterCard from "containers/Home/counterCard";
// import Integration from "containers/Home/Integration";

import { credilinqBenefits } from "constant/benefits";
import Arrow from "constant/arrow";
import { CompaniesImages } from "constant/credilinqCompanies";

// TODO
// import CrediLinqFinance from "containers/Home/CrediLinqFinance";

import Slider from "containers/Home/Slider";
import Banner from "containers/Home/Banner";
// import PaymentMethod from "containers/Home/PaymentMethod";

import CrediLinqBenefits from "components/CredilinqBenefits";
import CustomerStories from "components/CustomerStories";
import CredilinqBusiness from "components/credilinqBusiness";
import CrediLinqCompaniesSlider from "components/CrediLinqCompaniesSlider";
import Industry from "components/Industry";
import Founder from "components/Founder";
// import BannerCard from "components/BannerCard";
import ClientHeadlines from "components/ClientHeadlines";

import "containers/Home/home.scss";

const Home = () => {
  const TRACKING_ID = "UA-198986171-1";

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const sliderData = {
    title: "Leading companies trust ",
    gradientText: "CrediLinq"
  };

  const data = {
    heading: "Power Your Lending Stack with our Plug-&-Play, Low Code",
    specialText: " Embedded Finance Modules",
    para: "Scale your business to new heights by leveraging alternative financing solutions designed for today’s businesses."
  };

  const renderData = (
    <button className="commonButton customerButton">
      View Case Study <Arrow />
    </button>
  );

  const render = (
    <h1 className="commonHeading customerHeading">
      Our
      <span className="commonGradient customerGradient">
        {" "}
        Delighted Clients
      </span>
    </h1>
  );

  const customerStoriesData = {
    profileName: "Andrew Romeo",
    position: "Chief Executive Officer, ShopFront Solutions Pty. Ltd.",
    button: "View Case Study"
  };

  return (
    <div className="home">
      <Banner />
      {/* <BannerCard /> */}
      <Industry />
      <CrediLinqCompaniesSlider
        CompaniesImages={CompaniesImages}
        sliderData={sliderData}
      />

      {/* TODO */}
      {/* <CrediLinqFinance /> */}
      {/* <CounterCard /> */}
      <CrediLinqBenefits
        data={data}
        credilinqBenefits={credilinqBenefits}
        dynamicClass={"credilinqBenefitsGradient"}
        newClass={"credilinqBenefitsGap"}
      />
      {/* <PaymentMethod /> */}
      <Founder />
      {/* <Integration /> */}
      <ClientHeadlines />
      <Slider />
      <CustomerStories
        customerStoriesData={customerStoriesData}
        renderContent={render}
        renderData={renderData}
      />
      <CredilinqBusiness />
    </div>
  );
};

export default Home;
