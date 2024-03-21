import { useLocation } from "react-router-dom";

import FadeUp from "components/FadeUp";

import "components/HowItWorks/howItWorks.scss";

const HowItWorks = ({
  howItWorksData,
  secondClass,
  thirdClass,
  childClass,
  newClass
}) => {
  const location = useLocation();
  const isLocate = location.pathname === "/case-study";

  return (
    <section className={"howItWorks commonBackground " + secondClass}>
      <FadeUp>
        <div className="container">
          {isLocate ? null : (
            <h3 className="commonHeading">
              How It <span className="commonGradient">works</span>
            </h3>
          )}
          <div className={"howItWorksSteps " + childClass}>
            {howItWorksData.map((data, i) => (
              <div className="howItWorksStep" key={i}>
                <div className="howItWorksStepImg">
                  <img src={data.processImg} alt="GetApproval" />
                </div>
                <div className="howItWorksStepDetails">
                  {data.stepNum && (
                    <img className="stepNum" src={data.stepNum} alt="StepOne" />
                  )}
                  <h3 className={thirdClass}>
                    <img src={data.stepNum} alt="StepOne" />
                    {data.heading}{" "}
                    <label className="commonGradient howItWorksStepDetailsSpecialText">
                      {data?.specialText}
                    </label>
                  </h3>
                  <p className={newClass}>{data.paragraph}</p>
                  <span className="howItWorksSellerContent">
                    {data?.content}
                  </span>
                  {data?.heading == "Approval" && (
                    <p className="howItWorksSellerNotice">
                      *Funded by{" "}
                      <a
                        href="https://eservices.mas.gov.sg/fid/institution/detail/249882-ASIALINQ-INVESTMENTS-PTE-LTD"
                        style={{ textDecoration: "underline" }}
                      >
                        Asialinq Investment Pte. Ltd
                      </a>
                      , a MAS regulated company.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
};

export default HowItWorks;
