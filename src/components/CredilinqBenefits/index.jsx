import FadeUp from "components/FadeUp";

import "components/CredilinqBenefits/credilinqBenefits.scss";

const CrediLinqBenefits = ({
  data,
  credilinqBenefits,
  dynamicClass,
  extraClass,
  headerClass,
  secondClass,
  childClass,
  displayClass,
  newClass
}) => {
  return (
    <section className={"commonBackground credilinqBenefits " + dynamicClass}>
      <div className="container">
        <div className="credilinqBenefitsSection">
          <div className={childClass}>
            <FadeUp>
              <h1
                className={"commonHeading credilinqBenefitsHeading " + newClass}
              >
                {data?.heading}
                <span
                  className={
                    "commonGradient credilinqBenefitsGradientText " +
                    displayClass
                  }
                >
                  {data?.specialText}
                </span>
              </h1>
            </FadeUp>

            <FadeUp>
              <p className="credilinqBenefitsFullPara">{data?.para}</p>
            </FadeUp>
          </div>

          <FadeUp>
            <div className={"credilinqBenefitsMultipleCards " + secondClass}>
              {/* firstSetCard */}
              <div className="credilinqBenefitsCard ">
                {credilinqBenefits.map(
                  (item, index) =>
                    index % 2 !== 0 && (
                      <div key={index} className="linear">
                        <div className="credilinqBenefitsFirstCard">
                          <div
                            className={"credilinqBenefitsTitle " + extraClass}
                          >
                            <h3 className={headerClass}>{item.title}</h3>
                            <div>
                              <img
                                src={item.image}
                                alt="payment"
                                className="img_png"
                              />
                              <img
                                src={item.gifImg}
                                alt="payment"
                                className="img_gif"
                              />
                            </div>
                          </div>

                          <div className="credilinqBenefitsTitlePara">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>

              {/* secondSetCard */}
              <div className="credilinqBenefitsCard">
                {credilinqBenefits.map(
                  (item, index) =>
                    index % 2 === 0 && (
                      <div key={index} className="linear">
                        <div className="credilinqBenefitsFirstCard">
                          <div
                            className={"credilinqBenefitsTitle " + extraClass}
                          >
                            <h3 className={headerClass}>{item.title}</h3>
                            <div>
                              <img
                                src={item.image}
                                alt="payment"
                                className="img_png"
                              />
                              <img
                                src={item.gifImg}
                                alt="payment"
                                className="img_gif"
                              />
                            </div>
                          </div>

                          <div className="credilinqBenefitsTitlePara">
                            <p className="credilinqBenefitsTitleParaGraph">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default CrediLinqBenefits;
