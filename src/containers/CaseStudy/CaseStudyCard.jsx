import FadeUp from "components/FadeUp";

import "containers/CaseStudy/caseStudy.scss";

const CaseStudyCard = () => {
  return (
    <section className="caseStudyCard">
      <div className="container">
        <div className="caseStudyCardContainer">
          <FadeUp>
            <p>
              To surmount these challenges, the Shopfront team would need to
              infuse new funds. The founding team wanted to do so without
              diluting equity or pledging personal collateral.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCard;
