import FadeUp from "components/FadeUp";

import { RightArrowHoverBtn } from "constant/rightArrowHover";

import "components/credilinqBusiness/credilinqBusiness.scss";
import { Link } from "react-router-dom";

const CredilinqBusiness = () => {
  return (
    <section className="commonBackground connectWithUsBackground">
      <div className="container">
        <div className="connectWithUs">
          <div className="connectWithUsData">
            <FadeUp>
              <p className="connectWithUsPara">
                Unleash Your Business Potential with CrediLinq
              </p>
            </FadeUp>

            <div className="connectWithUsBtn">
              <FadeUp>
                <Link to={"/get-started"} target="_blank">
                  <div className="connectWithUsButton">
                    <a>Sign up our mailing list</a>
                    <RightArrowHoverBtn />
                  </div>
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredilinqBusiness;
