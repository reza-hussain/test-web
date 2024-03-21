import FadeUp from "components/FadeUp";

import shopFront from "assets/images/caseStudy/shopFront.png";
import { Link } from "react-router-dom";

const AboutCaseStudy = () => {
  return (
    <section className="commonBackground shopFront">
      <div className="container">
        <div className="shopFrontContents">
          <FadeUp>
            <div className="shopFrontGradient">
              <h3 className="commonHeading shopFrontGradientHead">
                About{" "}
                <label className="commonGradient shopFrontGradientText">
                  Shopfront
                </label>
              </h3>

              <FadeUp>
                <div className="shopFrontImg">
                  <img src={shopFront} alt="shopFront" />
                </div>
              </FadeUp>

              <p className="shopFrontParaGraph">
                Founded in{" "}
                <label className="shopFrontParaGraphWeight">2017</label> by{" "}
                <Link
                  to={"https://www.linkedin.com/in/adromeo"}
                  target="_blank"
                >
                  <span className="shopFrontParaGraphColor">Andrew Romeo,</span>{" "}
                </Link>
                Shopfront is an established SaaS marketing platform in the{" "}
                <label className="shopFrontParaGraphWeight">
                  pharmaceutical industry.
                </label>
              </p>

              <p className="shopFrontParaGraph">
                At its core,{" "}
                <Link to={"https://shopfrontsolutions.com.au/"} target="_blank">
                  <span className="shopFrontParaGraphColor">Shopfront</span>{" "}
                </Link>
                specializes in designing & executing data-driven marketing
                campaigns to drive customer engagement. The company offers a
                bespoke platform that empowers business owners to efficiently
                manage their digital & print marketing collateral. The holistic
                platform integrates with the store’s point-of-sale system (POS)
                & empowers business owners to increase sales & revenue via
                in-store promotional campaigns
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="shopFrontImage">
              <img src={shopFront} alt="shopFront" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default AboutCaseStudy;
