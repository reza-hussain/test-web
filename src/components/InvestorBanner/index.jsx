import { Link } from "react-router-dom";

import Arrow from "constant/arrow";
import InvestorBannerImg from "assets/images/investor/investorBanner.png";

import "components/InvestorBanner/investorBanner.scss";

const InvestorBanner = () => {
  return (
    <section className="commonBackground investorBanner">
      <div className="container">
        <div className="investorBannerContainer">
          <div className="investorBannerSection">
            <h1 className="commonBannerHeading investorBannerHeading">
              Capital-As-a-Service Is a New Financial Market Worth
              <span className="commonBannerGradient investorBannerGradient">
                {" "}
                Over $540 Billion USD
              </span>
            </h1>
            <p>
              Through an integration of AI & Data Analytics, we&apos;re creating
              a more inclusive, accessible, digital-first and frictionless
              experience for businesses to accelerate their access to capital
              for growth regulated by Monetary Authority of Singapore RMFC
              license.
            </p>

            <Link to={"/investor-inquiry "} target="_blank">
              <button className="commonButton">
                Discover & Invest Today <Arrow />{" "}
              </button>
            </Link>
          </div>

          <div className="investorBannerImage">
            <img src={InvestorBannerImg} alt="InvestorBannerImg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorBanner;
