import { Link } from "react-router-dom";
import useScreenMobile from "hooks/useScreenMobile";

import FadeUp from "components/FadeUp";

import Arrow from "constant/arrow";

import infoGraph from "assets/images/home/infograph.png";
import infoGraphMobileImg from "assets/images/home/infoGraphMobileImg.png";

const PaymentMethod = () => {
  const isMobile = useScreenMobile({ size: 768 });
  const imageSource = isMobile ? infoGraphMobileImg : infoGraph;

  return (
    <section className="commonBackground paymentBgImage">
      <div className="container">
        <div className="banner payment">
          <div>
            <FadeUp>
              <h1 className="commonHeading paymentHeading">
                Enhance your Business with our{" "}
                <span className="commonGradient">
                  {" "}
                  Credit & Checkout Solutions
                </span>
              </h1>
            </FadeUp>

            <FadeUp>
              <p className="paymentPara">
                Focus on driving revenue while we simplify B2B payments by
                enabling flexible terms based lending orchestration at checkout.
              </p>
            </FadeUp>

            <FadeUp>
              <Link to={"/get-started"} target="_blank">
                <button className="commonButton">
                  Request a Demo <Arrow />
                </button>
              </Link>
            </FadeUp>
          </div>

          <div className="paymentLogo">
            <FadeUp>
              <img src={imageSource} alt="infoGraph" />
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
