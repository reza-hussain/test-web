import React, { useEffect, useState } from "react";

import ProgressAccordion from "components/ProgressAccordion";

import { eligibilityData } from "constant/amazonSellerAccordion";

const EverythingToKnow = () => {
  const [accordionOpen, setAccordionOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".everythingToKnow");
      const top = container.getBoundingClientRect().top;

      if (top < 120) {
        setAccordionOpen(0);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="commonBackground everythingToKnow">
      <div className="container">
        <div className="everythingToKnowMain">
          <h3 className="description">
            Everything You Need To Know About <br />
            <span>PayLater Direct</span>
          </h3>

          <div className="everythingToKnowAccordion">
            {eligibilityData.map((item, index) => (
              <ProgressAccordion
                key={item.title}
                item={item}
                index={index}
                onClick={() => setAccordionOpen(index)}
                open={accordionOpen === index}
                next={() =>
                  setAccordionOpen(
                    index === eligibilityData.length - 1 ? 0 : index + 1
                  )
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EverythingToKnow;
