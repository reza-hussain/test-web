import { useEffect } from "react";

import ReactGA from "react-ga";

import HowItWorks from "components/HowItWorks";
import CredilinqBusiness from "components/credilinqBusiness/";
import CustomerStories from "components/CustomerStories/";

import Banner from "containers/CaseStudy/Banner";
import CaseStudyChallenge from "containers/CaseStudy/CaseStudyChallenge";
import AboutCaseStudy from "containers/CaseStudy/AboutCaseStudy";
import CaseStudyCard from "containers/CaseStudy/CaseStudyCard";
import CaseStudyVision from "containers/CaseStudy/CaseStudyVision";

import { solutionData } from "constant/howItWorksData";

import "containers/CaseStudy/caseStudy.scss";

const CaseStudy = () => {
  const TRACKING_ID = "UA-198986171-1";

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const render = (
    <h1 className="commonHeading customerSpecialText">
      <span className="commonGradient customerGradient">Founder’s Quotes</span>
    </h1>
  );

  const customerStoriesData = {
    subTitle: "Founder’s Quotes",
    profileName: "Andrew Romeo",
    position: "Chief Executive Officer, ShopFront"
  };

  return (
    <div className="caseStudy">
      <Banner />
      <AboutCaseStudy />
      <CaseStudyVision />
      <CaseStudyChallenge />
      <CaseStudyCard />
      <HowItWorks
        howItWorksData={solutionData}
        secondClass={"howItWorksStudy"}
        thirdClass={"howItWorksStepDetailsColor"}
        childClass={"howItWorksStepsHeight"}
        newClass={"howItWorksStepDetailsParaColor"}
      />
      <CustomerStories
        customerStoriesData={customerStoriesData}
        renderContent={render}
        extraClass={"customerNewData"}
        secondClass={"customerPosition"}
        customerClass={"customerBackground"}
      />
      <CredilinqBusiness />
    </div>
  );
};

export default CaseStudy;
