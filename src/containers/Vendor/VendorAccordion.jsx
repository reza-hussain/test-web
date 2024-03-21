import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import FadeUp from "components/FadeUp";

import upArrow from "assets/images/vendor/upArrow.svg";
import downArrow from "assets/images/vendor/downArrow.svg";
import { accordionData } from "constant/accordionData";

const VendorAccordion = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="commonBackground vendorAccordion" id="vendorEligible">
      <div className="container vendorAccordionContainer">
        <h2 className={"commonHeading vendorAccordionHeading "}>
          All You Need to Know About
          <p className="commonGradient vendorAccordionGradient">
            {" "}
            Working Capital Financing
          </p>
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
    <div key={index} className="vendorAccordionItem">
      <div
        className={`vendorAccordionTitle ${
          isActive === index ? "isActive" : ""
        }`}
        onClick={() => setIsActive(isActive === index ? null : index)}
      >
        <h3>{data?.title}</h3>

        {isActive === index ? (
          <img src={upArrow} alt="upArrow" className="vendorAccordionMobile" />
        ) : (
          <img
            src={downArrow}
            alt="downArrow"
            className="vendorAccordionMobile"
          />
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
        <div className="vendorAccordionContents" ref={jobs}>
          <p>
            {data.description}
            {data?.termsLink && (
              <Link to={data.termsLink} target="_blank">
                <label className="vendorAccordionInvestorData">
                  Download Fund Terms
                </label>
              </Link>
            )}
          </p>
          {data.list && (
            <div>
              <ul className="vendorAccordionListStyles">
                {data.list.map((listData, listIndex) => (
                  <li key={listIndex}>{listData}</li>
                ))}
              </ul>

              <ul className="vendorAccordionAdditionalClass">
                {data?.listItem?.map(
                  (additionalListItem, additionalListIndex) => (
                    <li key={additionalListIndex}>{additionalListItem}</li>
                  )
                )}
              </ul>
            </div>
          )}
          <span className="vendorAccordionContent">{data?.content}</span>
        </div>
      </div>
    </div>
  );
};

export default VendorAccordion;
