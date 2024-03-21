import FadeUp from "components/FadeUp";

import CaseStudyCardVision from "assets/images/caseStudy/caseStudyCardVision.png";

const CaseStudyVision = () => {
  return (
    <section className="commonBackground vision">
      <div className="container">
        <FadeUp>
          <div className="visionSection">
            <div className="visionImage">
              <img src={CaseStudyCardVision} alt="CaseStudyCardVision" />
            </div>
            <div className="visionContent">
              <h2 className="commonHeading visionHeading">
                The <span className="commonGradient">Vision</span>
              </h2>
              <p className="visionContentFirstText">
                Having established itself in the Australian pharmaceutical
                industry, Shopfront wanted to expand its services & enter a new
                market – consumer retail.
              </p>
              <p>
                The Shopfront team wanted to leverage its experience & design a
                data-driven marketing solution for retail store owners. Their
                new online ticketing module would enable business owners to
                educate & guide customers along the buying journey with
                informative content, resulting in a positive sales performance.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default CaseStudyVision;
