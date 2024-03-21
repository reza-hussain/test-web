import { Link } from "react-router-dom";

import Arrow from "constant/arrow";

import { AsiaLinqPartnerGrowth } from "constant/asiaLinqPartner";

import "components/AsiaLnqPartner/asiaLinqPartner.scss";

const AsiaLinqPartner = ({ secondClass }) => {
  return (
    <section className="commonBackground partner">
      <div className="container">
        <div className="partnerDivider">
          {/* firstPart */}
          <div className="partnerDividerData">
            <h2 className={"commonHeading " + secondClass}>
              Partner with AsiaLinq to Diversify Your{" "}
              <span className="commonGradient">Investment Strategy</span>
            </h2>

            <p className="partnerDividerPara">
              AsiaLinq Investments and CrediLinq.Ai are leading a revolution in
              financial technology for Lending-As-A Service.
            </p>
            <Link to={"/investor-inquiry"} target="_blank">
              <button className="commonButton">
                Let’s Do This <Arrow />
              </button>
            </Link>
          </div>

          {/* secondPart */}
          <div className="partnerDividerContent">
            {AsiaLinqPartnerGrowth.map((item, index) => (
              <div key={index} className="partnerDividerContentPart">
                <img src={item?.img} alt="image" />
                <p className="partnerDividerContentDescription">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsiaLinqPartner;
