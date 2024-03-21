// images
import payment from "assets/images/home/payment.svg";
import verification from "assets/images/home/verification.svg";
import credit from "assets/images/home/credit.svg";
import rotate from "assets/images/home/rotate.svg";
import ReasonGraphImg from "assets/images/payFinance/reasonGraphImg.png";
import safetyLockImg from "assets/images/payFinance/safetyLockImg.png";
import noteImg from "assets/images/smeHealth/noteImg.png";
import circleImg from "assets/images/payLaterDirect/circleImg.png";

// gifImages
import paymentGif from "assets/images/home/payment.gif";
import verificationGif from "assets/images/home/verification.gif";
import creditGif from "assets/images/home/credit.gif";
import rotateGif from "assets/images/home/rotate.gif";
import ReasonGraph from "assets/images/payFinance/reasonGraph.gif";
import safetyLock from "assets/images/payFinance/safetyLock.gif";
import noteImgGif from "assets/images/smeHealth/noteImgGif.gif";
import circleImgGif from "assets/images/payLaterDirect/circleGif.gif";

// firstData
export const credilinqBenefits = [
  {
    title: "Seamless onboarding",
    image: verification,
    gifImg: verificationGif,
    description:
      "Our instant verification and decisioning allows a seamless onboarding experience."
  },
  {
    title: "Flexible Payment Terms",
    image: payment,
    gifImg: paymentGif,
    description:
      "Choose payment terms for your customers from 14 to 120 days - according to the needs of your company."
  },
  {
    title: "Low code Integration",
    image: rotate,
    gifImg: rotateGif,
    description:
      "We offer plug and play options suitable to multiple business use cases."
  },
  {
    title: "Transaction analysis and monitoring",
    image: credit,
    gifImg: creditGif,
    description:
      "Credit limit based on platform business data. Continuous monitoring to assess financial health."
  }
];

// secondData
export const benefitsData = [
  {
    title: "Top Inflow-Outflow Transactions",
    image: rotate,
    gifImg: rotateGif,
    description: "Discover your top 10 inflow-outflow transactions."
  },
  {
    title: "Comprehensive Summary",
    image: ReasonGraphImg,
    gifImg: ReasonGraph,
    description:
      "Acquire a quick glance into your business's most significant financial metrics."
  },

  {
    title: "Actionable Feedback",
    image: noteImg,
    gifImg: noteImgGif,
    description: "Understand and take steps to improve financial health."
  },
  {
    title: "Daily EOD Balances",
    image: safetyLockImg,
    gifImg: safetyLock,
    description: "Understand and take steps to improve financial health."
  }
];

// thirdData
export const financeData = [
  {
    title: "Grow Equity",
    image: rotate,
    gifImg: rotateGif,
    description:
      "Grow your equity while avoiding the need for additional funding."
  },
  {
    title: "Increase Revenue",
    image: ReasonGraphImg,
    gifImg: ReasonGraph,
    description: "Increase your revenue by unlocking new opportunities."
  },

  {
    title: "Competitive Edge",
    image: noteImg,
    gifImg: noteImgGif,
    description:
      "By embracing innovation you can scale ahead of your competitors."
  },
  {
    title: "Daily EOD Balances",
    image: safetyLockImg,
    gifImg: safetyLock,
    description: "Instantly access a working capital line of credit."
  }
];

// Fourth Data
export const payLaterDirectUseCaseData = [
  {
    title: "Receivable Financing",
    image: credit,
    gifImg: creditGif,
    description:
      "Convert outstanding capital that is tied up in unpaid invoices into cash. Accounts receivable financing speeds up cash flow while waiting for customers to pay.",
    list: [
      "Quick source of cashflow",
      "Revenue stability",
      "Effectively manage working capital cycle"
    ]
  },
  {
    title: "Payable Financing",
    image: circleImg,
    gifImg: circleImgGif,
    description:
      "Plug in readymade financing features to the payment infra and add any payable to a “pay now” workflow",
    list: [
      "Integrated lending workflow with payments",
      "Increase platform engagement",
      "Easier compliance and monitoring"
    ]
  },

  {
    title: "Payroll Financing",
    image: ReasonGraphImg,
    gifImg: ReasonGraph,
    description:
      "Earned wage access or flexible pay opens possibilities for companies to pay their employees on-demand. Basis how much employees have earned, they can draw down when they need it",
    list: [
      "High value benefit at relatively low cost",
      "Talent retention",
      "Improve employee productivity"
    ]
  }
];
