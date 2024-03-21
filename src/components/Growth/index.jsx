import FadeUp from "components/FadeUp";

import { RightArrowHoverBtn } from "constant/rightArrowHover";

import "components/Growth/growth.scss";
import { Link } from "react-router-dom";

const Growth = ({ growthData, childClass }) => {
  return (
    <section className="commonBackground">
      <div className="container">
        <div className="growth">
          <div className="growthStatistics">
            <FadeUp>
              <h2 className="commonHeading">{growthData?.title}</h2>
              <p className={"growthStatisticsParaGraph " + childClass}>
                {growthData?.subText}
              </p>
            </FadeUp>
          </div>

          <div className="growthBtn">
            <FadeUp>
              {/* <div className="growthButton"> */}
              <Link
                to={growthData?.link}
                target={"_blank"}
                className="growthButton"
              >
                <label>{growthData?.buttonText}</label>
                <RightArrowHoverBtn />
              </Link>

              {/* </div> */}
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
