import { Link } from "react-router-dom";

import cardImg from "assets/images/home/cards.png";
import card1Img from "assets/images/home/cards1.png";
import card2Img from "assets/images/home/cards2.png";
import card3Img from "assets/images/home/cards3.png";
import navigatorImg from "assets/images/home/navigator.svg";

import "components/Industry/industry.scss";

const Industry = () => {
  return (
    <section className="industry">
      <div className="container">
        <div className="commonHeading">
          <h1>We Power Platforms Across Multiple Industries</h1>
          <p>
            Enabling embedding credit for underserved customers to get faster
            and frictionless access to capital
          </p>
        </div>

        <div className="industryCards">
          <div className="industryBorder">
            <Link to={"/pay-later"}>
              <div className="industryPlatform">
                <div className="industryHeader">
                  <div className="industryHeading">
                    <h3>Procurement Platforms</h3>
                    <div className="navigatorImg">
                      <img src={navigatorImg} alt="image" />
                    </div>
                  </div>

                  <p>
                    Empower buyers with one-click financing at checkout to
                    provide a great buying experience
                  </p>
                </div>

                <div className="industryLogo">
                  <img src={cardImg} alt="image" />
                </div>

                <div className="industryNavigator">
                  <img src={navigatorImg} alt="image" />
                </div>
              </div>
            </Link>
          </div>

          <div className="industryBorder">
            <Link to={"/pay-finance"}>
              <div className="industryPlatform secondCard">
                <div className="industryHeader">
                  <div className="industryHeading">
                    <h3>E-Commerce Platforms</h3>
                    <div className="navigatorImg">
                      <img src={navigatorImg} alt="image" />
                    </div>
                  </div>
                  <p>
                    Sellers can access their funds immediately by advancing
                    their receivables
                  </p>
                </div>

                <div className="industryLogo">
                  <img src={card1Img} alt="image" />
                </div>

                <div className="industryNavigator">
                  <img src={navigatorImg} alt="image" />
                </div>
              </div>
            </Link>
          </div>

          <div className="industryBorder">
            <Link to={"/pay-finance"}>
              <div className="industryPlatform thirdCard">
                <div className="industryHeader">
                  <div className="industryHeading">
                    <h3>Freelance Marketplaces</h3>
                    <div className="navigatorImg">
                      <img src={navigatorImg} alt="image" />
                    </div>
                  </div>
                  <p>
                    Freelancers can choose to get paid for the milestones
                    achieved or task completed without having to wait for The
                    platform’s settlement date
                  </p>
                </div>

                <div className="industryLogo">
                  <img src={card2Img} alt="image" />
                </div>

                <div className="industryNavigator">
                  <img src={navigatorImg} alt="image" />
                </div>
              </div>
            </Link>
          </div>

          <div className="industryBorder">
            <Link to={"/pay-later"}>
              <div className="industryPlatform fourthCard">
                <div className="industryHeader">
                  <div className="industryHeading">
                    <h3>Accounting Softwares</h3>
                    <div className="navigatorImg">
                      <img src={navigatorImg} alt="image" />
                    </div>
                  </div>
                  <p>
                    Businesses on accounting and supply- chain platforms can
                    distribute larger invoices over 3-6 months in equal monthly
                    instalments for easier cash flow
                  </p>
                </div>

                <div className="industryLogo">
                  <img src={card3Img} alt="image" />
                </div>

                <div className="industryNavigator">
                  <img src={navigatorImg} alt="image" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
