import { payLaterDirectUseCaseData } from "constant/benefits";

import "containers/PayLaterDirect/payLaterDirect.scss";

const UseCase = () => {
  return (
    <section className="useCase">
      <div className="container">
        <h2 className="commonHeading smeJobsHeading">
          Use <label className="commonGradient">Cases</label>
        </h2>
        <div className="useCaseContainer">
          <div className="credilinqBenefitsCard useCaseCard">
            {payLaterDirectUseCaseData.map((useCaseItem, useCaseIndex) => (
              <div key={useCaseIndex} className="linear useCaseCardLinear">
                <div className="credilinqBenefitsFirstCard useCaseCardTotal">
                  <div className={"credilinqBenefitsTitle useCaseCardTitle"}>
                    <h3>{useCaseItem.title}</h3>
                    <div>
                      <img
                        src={useCaseItem.image}
                        alt="payment"
                        className="img_png"
                      />
                      <img
                        src={useCaseItem.gifImg}
                        alt="payment"
                        className="img_gif"
                      />
                    </div>
                  </div>

                  <div className="credilinqBenefitsTitlePara useCaseCardTitlePara">
                    <p>{useCaseItem.description}</p>
                  </div>

                  {useCaseItem.list && (
                    <ul className="useCaseCustomListStyles">
                      {useCaseItem.list.map((listItem, listIndex) => (
                        <li key={listIndex}>{listItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCase;
