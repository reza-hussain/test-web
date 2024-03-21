import { useEffect } from "react";

import ReactGA from "react-ga";

import useScreenMobile from "hooks/useScreenMobile";

import Banner from "components/Banner";
import CrediLinqCompaniesSlider from "components/CrediLinqCompaniesSlider";
// TODO import BusinessPayments from "components/BusinessPayments";
import CredilinqBusiness from "components/credilinqBusiness";

import { CompanyLogos } from "constant/credilinqCompanies";

// import TeamMeet from "containers/AboutUs/TeamMeet";
import OurFounders from "containers/AboutUs/OurFounders";
// import Mission from "containers/AboutUs/Mission";

import "containers/AboutUs/aboutUs.scss";

import Team from "containers/AboutUs/Team";
// TODO import OurJourney from "containers/Home/OurJourney";

import bannerImage from "assets/images/aboutUs/aboutUsBanner.png";
import bannerMbImage from "assets/images/aboutUs/aboutUsBannerMob.png";
// TODO import BussinessLeft from "assets/images/aboutUs/aboutUsStartLeft.png";
// import BussinessRight from "assets/images/aboutUs/aboutUsStartRight.png";

const AboutUs = () => {
  const TRACKING_ID = "UA-198986171-1";

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const isMobile = useScreenMobile({ size: 768 });
  const imageSource = isMobile ? bannerMbImage : bannerImage;

  const bannerData = {
    title: "Transforming Businesses Through ",
    gradientText: "Embedded Finance Technology",
    paraGraph:
      "CrediLinq is a Singapore-headquartered global technology infrastructure company offering plug-and-play embedded finance solutions to businesses.",
    bannerImg: imageSource,
    link: "/get-started"
  };
  const sliderData = {
    title: "Backed by",
    gradientText: "Amazing investors"
  };
  // TODO const bussinessData = {
  //   text: "Start Your Career At",
  //   gradientText: "CrediLinq",
  //   content:
  //     "You want to join our journey and create what's next with us? On our jobs page you will find more information about what it's like to work at CrediLinq and our current open positions. Take your next career step with us and join the team.",
  //   button: "Join Us",
  //   leftImage: BussinessLeft,
  //   rightImage: BussinessRight
  //   // TODO link:"/get-started"
  // };

  return (
    <>
      <Banner
        bannerData={bannerData}
        extraClass={"bannerDataHeader"}
        extraPara={"bannerDataExtra"}
        secondClass={"bannerDataGradient"}
        aboutClass={"BannerDataAbout"}
      />
      {/* <Mission /> */}
      {/* TODO <OurJourney /> */}
      <OurFounders />
      {/* <TeamMeet /> */}
      <Team />
      <CrediLinqCompaniesSlider
        sliderData={sliderData}
        sliderHeading={"sliderHeading"}
        CompaniesImages={CompanyLogos}
      />
      {/* TODO <BusinessPayments bussinessData={bussinessData} /> */}
      <CredilinqBusiness />
    </>
  );
};

export default AboutUs;
