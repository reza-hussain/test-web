import React, { useEffect, useState } from "react";

import ProgressAccordion from "components/ProgressAccordion";

import { everythingToKnow } from "constant/amazonSellerAccordion";

const EverythingToKnow = () => {
  const [accordionOpen, setAccordionOpen] = useState(null);

  useEffect(() => {
    setAccordionOpen(0);
  }, []);

  return (
    <div className="commonBackground">
      <div className="container">
        <div className="everythingToKnowMain">
          <h3 className="description">
            Everything You Need To Know About Financing For{" "}
            <span>Amazon Seller</span>
          </h3>

          <div className="everythingToKnowAccordion">
            {everythingToKnow.map((item, index) => (
              <ProgressAccordion
                key={item.title}
                item={item}
                index={index}
                onClick={() => setAccordionOpen(index)}
                open={accordionOpen === index}
                next={() =>
                  setAccordionOpen(
                    index === everythingToKnow.length - 1 ? 0 : index + 1
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
