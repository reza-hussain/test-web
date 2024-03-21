import FadeUp from "components/FadeUp";

import { ChallengeData } from "constant/caseStudyChallenge";

const CaseStudyChallenge = () => {
  return (
    <section className="commonBackground challenge">
      <div className="container">
        <div className="challengeHeader">
          <FadeUp>
            <h2 className="commonHeading">
              The{" "}
              <span className="commonGradient challengeHeaderText">
                Challenges
              </span>
            </h2>
            <p className="challengePara">
              To enter this new & competitive industry, the team would need to
              address the following challenges
            </p>
          </FadeUp>
        </div>

        <div className="challengeWrapper">
          {ChallengeData.map((data, index) => (
            <div className="challengeCard" key={index}>
              <FadeUp>
                <div className="linear">
                  <div className="challengeFirstCard">
                    <div className="challengeTitle">
                      <h3>{data?.title}</h3>
                      <div>
                        <img
                          className="img_png"
                          src={data?.image}
                          alt="payment"
                        />
                        <img
                          className="img_gif"
                          src={data?.gifImg}
                          alt="payment"
                        />
                      </div>
                    </div>

                    <div className="challengePara">
                      <p>{data?.description}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyChallenge;
