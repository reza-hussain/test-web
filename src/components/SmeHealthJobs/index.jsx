import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import FadeUp from "components/FadeUp";

import upArrow from "assets/images/smeHealth/upArrow.svg";
import downArrow from "assets/images/smeHealth/downArrow.svg";

import "components/SmeHealthJobs/smeJobs.scss";

const SmeHealthJobs = ({
  accordionData,
  accordionTitle,
  payLaterDirectReduceFontSize,
  amazonSellerBackground,
  amazonSellerFaqBottomGap
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className={`commonBackground smeJobs ${amazonSellerBackground}`}>
      <div className="container smeJobsContainer">
        <h2
          className={`commonHeading smeJobsHeading ${payLaterDirectReduceFontSize} ${amazonSellerFaqBottomGap}`}
        >
          {accordionTitle.title}
          <label
            className={`commonGradient smeJobsText ${payLaterDirectReduceFontSize}`}
          >
            {accordionTitle.subTitle}
          </label>
        </h2>

        <FadeUp>
          {accordionData.map((data, index) => (
            <AccordionItem
              data={data}
              index={index}
              key={index}
              accordionData={accordionData}
              setIsActive={setIsActive}
              isActive={isActive}
            />
          ))}
        </FadeUp>
      </div>
    </section>
  );
};

const AccordionItem = ({
  data,
  index,
  accordionData,
  isActive,
  setIsActive
}) => {
  const jobs = useRef();
  return (
    <div key={index} className="smeJobsItem">
      <div
        className={`smeJobsTitle ${isActive === index ? "isActive" : ""}`}
        onClick={() => setIsActive(isActive === index ? null : index)}
      >
        <h3>{data?.title}</h3>

        {isActive === index ? (
          <img src={upArrow} alt="upArrow" className="smeJobsMobile" />
        ) : (
          <img src={downArrow} alt="downArrow" className="smeJobsMobile" />
        )}
      </div>

      <div
        style={{
          height: isActive === index ? jobs?.current.clientHeight : "0",
          overflow: "hidden",
          transition: "all 0.2s ease-in",
          borderBottom:
            index === accordionData.length - 1 ? "" : "1px solid #E8E8E4"
        }}
      >
        <div className="smeJobsContents" ref={jobs}>
          <p>
            {data.description}
            {data?.termsLink && (
              <Link to={data.termsLink} target="_blank">
                <label className="smeJobsInvestorData">
                  Download Fund Terms
                </label>
              </Link>
            )}
          </p>
          {data.list && (
            <ul className="payLaterDirectAccordionListStyles">
              {data.list.map((listData, listIndex) => (
                <li key={listIndex}>{listData}</li>
              ))}
            </ul>
          )}
          <span className="payLaterDirectAccordionContent">
            {data?.content}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SmeHealthJobs;
