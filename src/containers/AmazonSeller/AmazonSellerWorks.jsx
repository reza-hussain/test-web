import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { howWorksData } from "constant/howWorksData";

import Arrow from "constant/arrow";

const AmazonSellerWorks = () => {
  const [currentStep, setCurrentStep] = useState(-1);

  const handleClick = (number) => {
    setCurrentStep(number === currentStep ? 0 : number);
  };

  useEffect(() => {
    setCurrentStep(0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setCurrentStep((prevStep) =>
          prevStep === howWorksData.length - 1 ? -1 : prevStep + 1
        );
      },
      currentStep === -1 ? 100 : 3000
    );

    return () => {
      clearTimeout(timer);
    };
  }, [howWorksData, currentStep]);

  return (
    <section className="amazonHowWorks">
      <div className="container">
        <div className="amazonHowWorksContainer">
          <div className="amazonHowWorksContent">
            <h2 className="commonHeading amazonHowWorksHeading">
              How It
              <span className="commonGradientHeading amazonHowWorksGradientHeading">
                {" "}
                Works ?
              </span>
            </h2>
            <p>Simple 4 Step Process to Access your Funds</p>
            <Link
              to={
                "https://sellercentral.amazon.com/selling-partner-appstore/dp/amzn1.sp.solution.8929c9a5-7836-49fc-9a92-53ea94c71151"
              }
              target={"_blank"}
            >
              <button className="commonButton amazonHowWorksButton">
                Apply Now <Arrow />
              </button>
            </Link>
          </div>

          <div className="amazonHowWorksProgress">
            {howWorksData.map((data, index) => (
              <div
                className={`amazonHowWorksProgressWrapper ${
                  data.number <= currentStep ? "activeItem" : ""
                }`}
                key={data.number}
              >
                <div className="amazonHowWorksProgressNumber">
                  <img src={data.img} alt="HowOnBoard" />
                </div>
                <div
                  className={`amazonHowWorksProgressContents ${
                    data.number <= currentStep ? "activeTitle" : ""
                  }`}
                  onClick={() => handleClick(data.number)}
                >
                  <h5
                    className={`activeTitle ${
                      data.number <= currentStep ? "active" : ""
                    }`}
                  >
                    {data.title}
                  </h5>
                  <p>{data.content}</p>
                  {/* <p className="amazonHowWorksProgressContentsParaGraph">
                    {data?.para}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmazonSellerWorks;
