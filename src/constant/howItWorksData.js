import GetApproval from "assets/images/howItWorks/getAnApproval.png";
import GetEmpowered from "assets/images/howItWorks/getEmpowered.png";
import FlexibleRepayment from "assets/images/howItWorks/flexibleRepayment.png";
import StepOne from "assets/images/howItWorks/stepNum1.svg";
import StepTwo from "assets/images/howItWorks/stepNum2.svg";
import StepThree from "assets/images/howItWorks/stepNum3.svg";

import solution from "assets/images/howItWorks/solution.gif";
import outcome from "assets/images/howItWorks/outcome.gif";

export const howItWorksData = [
  {
    processImg: GetApproval,
    stepNum: StepOne,
    heading: "Onboarding",
    paragraph:
      "Download and submit the following documents (1) last 12 months of each store’s settlement report and (2) latest Amazon Health Report. "
  },
  {
    processImg: GetEmpowered,
    stepNum: StepTwo,
    heading: "Approval",
    paragraph:
      "Receive up to USD 500,000* in growth capital to supercharge your business.",
    content:
      "Single Service Fee between 1% to 3% per month with no other charges, for the loan tenure"
  },
  {
    processImg: FlexibleRepayment,
    stepNum: StepThree,
    heading: "Flexible Repayment Options",
    paragraph:
      "Choose from 3 tenures to suit your working capital requirement as you scale."
  }
];

// secondData
export const solutionData = [
  {
    processImg: solution,
    heading: "The",
    specialText: " Solution",
    paragraph:
      "The Shopfront team approached CrediLinq & applied for Recurring Revenue Financing. Post due diligence & expert analysis of their past revenues, a capital amount was approved. The Shopfront team could use this capital to meet its current challenges & share a portion of future revenue as repayment."
  },
  {
    processImg: outcome,
    heading: "The ",
    specialText: "Outcome",
    paragraph:
      "By leveraging the collateral free capital, Shopfront was able to successfully hire new talent, start designing new technology from scratch & most significantly, onboard a new client, which will boost their revenue by more than 20%. Additionally, the founding team was able to extend their runway, preserve their equity & successfully increase their valuation for more investments in the future."
  }
];
