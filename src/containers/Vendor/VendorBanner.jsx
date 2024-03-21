import { Link } from "react-router-dom";
import BannerImage from "assets/images/vendor/bannerImg.png";

const VendorBanner = () => {
  return (
    <section className="vendorBanner">
      <div className="container">
        <div className="vendorBannerWrapper">
          <div className="vendorBannerContents">
            <h1 className="commonBannerHeading vendorBannerHeading">
              A Simple and Flexible Financing Solution For
              <label className="commonBannerGradient">
                {""} Singapore Government Vendors to access Working Capital
              </label>
            </h1>
            <p>
              Catalyzing Financial Agility: Tailored Funding Solution for
              Vendors to fund your Invoices or Purchase orders.
            </p>
            <div className="vendorBannerButtons">
              <Link
                to={
                  "https://alexi.credilinq.ai/sg-vendors-onboarding/type?partner=4ad42d20-bda2-45e1-8334-2014f6424441"
                }
                target="_blank"
              >
                <button className="commonButton vendorBannerButtonsApply">
                  Apply Now
                </button>
              </Link>
              <a href="#vendorEligible">
                <button className="vendorBannerButtonsEligi">Eligibilty</button>
              </a>
            </div>
          </div>
          <div className="vendorBannerImage">
            <img src={BannerImage} alt="BannerImage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorBanner;
