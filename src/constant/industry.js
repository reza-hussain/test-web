import navigatorImg from "assets/images/home/navigator.svg";
import card1Img from "assets/images/home/cards1.png";
import card2Img from "assets/images/home/cards2.png";
import card3Img from "assets/images/home/cards3.png";
import cardImg from "assets/images/home/cards.png";

export const industryCards = [
  {
    heading: "Procurement Platforms",
    navigatorImg: navigatorImg,
    cardImg: cardImg,
    linkTo: "/pay-later",
    content:
      "Empower buyers with one-click financing at checkout to provide a great buying experience"
  },
  {
    heading: "E-Commerce Platforms",
    navigatorImg: navigatorImg,
    cardImg: card1Img,
    linkTo: "/pay-finance",
    content:
      "Sellers can access their funds immediately by advancing their receivables"
  },
  {
    heading: "Freelance Marketplaces",
    navigatorImg: navigatorImg,
    cardImg: card2Img,
    linkTo: "/pay-finance",
    content:
      "Freelancers can choose to get paid for the milestones achieved or task completed without having to wait for The platform’s settlement date"
  },
  {
    heading: "Accounting Softwares",
    navigatorImg: navigatorImg,
    cardImg: card3Img,
    linkTo: "/pay-later",
    content:
      "Businesses on accounting and supply- chain platforms can distribute larger invoices over 3-6 months in equal monthly instalments for easier cash flow"
  }
];
