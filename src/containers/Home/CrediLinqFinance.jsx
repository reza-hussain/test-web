import { Link } from "react-router-dom";
import FinancePayment from "assets/images/financeSection/financePayment.gif";
import FinancePayNow from "assets/images/financeSection/financePayNow.gif";
import IntegrationIcon from "assets/images/integration/integrationIcon.svg";
import ColorArrow from "constant/colorArrow";

const CrediLinqFinance = () => {
  return (
    <>
      <section className="commonBackground">
        <div className="container">
          <div className="commonHeading financeCommonHeading">
            <p>
              Discover Embedded Finance Solutions With <span>CrediLinq</span>
            </p>
          </div>
          <div className="financeSection">
            <div className="financeImage">
              <img src={FinancePayment} alt="FinancePayment" />
            </div>
            <div className="financeHeading">
              <span>B2B PayLater</span>
              <p className="financeHeadingDescription">
                Leverage our merchant financing solution and empower sellers on
                your platform to restock inventory faster, while conveniently
                settling their invoices at a later date.
              </p>

              <div className="financeContents">
                <img src={IntegrationIcon} alt="IntegrationIcon" />
                <p>Boost average cart value.</p>
              </div>
              <div className="financeContents">
                <img src={IntegrationIcon} alt="IntegrationIcon" />
                <p>Attract more buyers.</p>
              </div>
              <div className="financeContents">
                <img src={IntegrationIcon} alt="IntegrationIcon" />
                <p>Increase platform stickiness.</p>
              </div>
              <div className="financeButton">
                <Link to={"/"}>
                  Learn More
                  <ColorArrow />
                </Link>
              </div>
            </div>
          </div>
          <div className="financeSection financeSectionTwo">
            <div className="financeImage">
              <img src={FinancePayNow} alt="FinancePayNow" />
            </div>
            <div className="financeHeading">
              <span>B2B PayNow</span>
              <p className="financeHeadingDescription">
                Empower buyers on your platform with instant and affordable
                access to capital by integrating our business financing
                solution.
              </p>

              <div className="financeContents">
                <img src={IntegrationIcon} alt="IntegrationIcon" />
                <p>Enable sellers to sell more.</p>
              </div>
              <div className="financeContents">
                <img src={IntegrationIcon} alt="IntegrationIcon" />
                <p>Grow seller base.</p>
              </div>
              <div className="financeContents">
                <img src={IntegrationIcon} alt="IntegrationIcon" />
                <p>Maintain positive cashflow.</p>
              </div>
              <div className="financeButton">
                <Link to={"/"}>
                  Learn More
                  <ColorArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CrediLinqFinance;
