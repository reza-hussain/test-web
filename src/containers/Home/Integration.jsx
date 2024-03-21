import { Link } from "react-router-dom";

import FadeUp from "components/FadeUp";

import Arrow from "constant/arrow";

import IntegrationInfo from "assets/images/integration/integrationInfo.png";
import IntegrationGif from "assets/images/integration/integrationGif.gif";

// TO-DO
// import Lottie from "lottie-react";
// import animation from "assets/json/animation_llp0ue7f (2).json";

const Integration = () => {
  return (
    <>
      <section className="commonBackGround integration">
        <div className="container">
          <FadeUp>
            <h3 className="commonHeading">
              Elevate Your Business With{" "}
              <label className="integrationGradient">Our APIs </label>
            </h3>
          </FadeUp>

          <div className="integrationContainer">
            <FadeUp>
              <div className="integrationImage">
                <img
                  src={IntegrationInfo}
                  alt="IntegrationInfograph"
                  className="integrationInfograph"
                />
                <img
                  src={IntegrationGif}
                  alt="IntegrationGif"
                  className="integrationGif"
                />

                {/* <Lottie animationData={animation} loop={true} />; */}
              </div>
            </FadeUp>

            <FadeUp>
              <div className="integrationHeading">
                <span>API Integration</span>

                <FadeUp>
                  <p className="sideHeading">
                    Our developer-friendly APIs are designed for simple
                    integration and connect seamlessly to your tech stack.
                  </p>
                </FadeUp>

                <div className="integrationSections">
                  <FadeUp>
                    <div className="integrationContents">
                      <p>
                        Clear documentation provides developers with the
                        information they need to understand the API&apos;s
                        functionality.
                      </p>
                    </div>
                  </FadeUp>

                  <FadeUp>
                    <div className="integrationContents">
                      <p>
                        API keys, tokens, OAuth, etc., and guide developers
                        through the authentication process.
                      </p>
                    </div>
                  </FadeUp>

                  <FadeUp>
                    <div className="integrationContents">
                      <p>
                        Offering client libraries or SDKs in popular programming
                        languages can simplify the integration process.
                      </p>
                    </div>
                  </FadeUp>

                  <FadeUp>
                    <div>
                      <Link to={"https://docs.credilinq.ai/"} target="_blank">
                        <button className="commonButton integrationButton">
                          View Documentation <Arrow />
                        </button>
                      </Link>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
};

export default Integration;
