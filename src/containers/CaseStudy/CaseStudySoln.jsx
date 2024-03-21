import FadeUp from "components/FadeUp";

import { solutionData } from "constant/caseStudySolution";

const CaseStudySoln = () => {
  return (
    <section>
      <div className="container">
        <FadeUp>
          <div className="howItWorksSteps">
            {solutionData.map((data, i) => (
              <div className="howItWorksStep" key={i}>
                <div className="howItWorksStepImg">
                  <img src={data?.processImg} alt="GetApproval" />
                </div>
                <div className="howItWorksStepDetails">
                  <img className="stepNum" src={data?.stepNum} alt="StepOne" />
                  <h3>
                    <img src={data?.stepNum} alt="StepOne" />
                    {data?.heading}
                  </h3>
                  <p>{data.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default CaseStudySoln;
