import { useEffect } from "react";

import ReactGA from "react-ga";

import InvestorBanner from "components/InvestorBanner";
import ReasonStatistics from "components/ReasonStatistics";
import SmeHealthJobs from "components/SmeHealthJobs/";
import AsiaLinqGrowth from "components/AsiaLinqGrowth";
import AsiaLinqPartner from "components/AsiaLnqPartner";

import { investorCardData } from "constant/reasonData";
import { investorAccordionData } from "constant/accordion";

const Investor = () => {
  const TRACKING_ID = "UA-198986171-1";

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const payLaterDirectTitle = {
    title: "Frequently Asked ",
    subTitle: "Questions"
  };

  return (
    <div>
      index
      <InvestorBanner />
      <ReasonStatistics reasonData={investorCardData} />
      <AsiaLinqPartner secondClass={"partnerDividerDataHeading"} />
      <SmeHealthJobs
        accordionData={investorAccordionData}
        accordionTitle={payLaterDirectTitle}
      />
      <AsiaLinqGrowth />
    </div>
  );
};

export default Investor;
