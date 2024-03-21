import { useEffect, useRef, useState } from "react";

import "components/ProgressAccordion/progressAccordion.scss";

const ProgressAccordion = ({ item, onClick, open, index, next }) => {
  const [accordionPadding] = useState(32);
  const [height, setHeight] = useState(0);
  const ref = useRef([]);

  useEffect(() => {
    if (ref.current.length) {
      const height =
        ref.current?.reduce((total, curr, idx) => {
          const element = document.querySelectorAll(".accordionCardItem");
          const lastElement = element[element.length - 1];
          return (
            total +
            curr.clientHeight +
            (curr.tagName === "DIV" && curr === lastElement
              ? 80 // for margin bottom of div element
              : 0)
          );
        }, 0) + accordionPadding;
      setHeight(open ? height : 0);
    }
  }, [open]);

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 6000);

    if (!open) {
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [open]);

  const renderNestedItems = (data, mainIndex, shouldAddRef) => {
    return data.content.map((item, idx) =>
      typeof item === "object" ? (
        <div
          className="accordionCardItem"
          ref={(ele) => (ref.current[mainIndex] = ele)}
          key={idx}
        >
          {item.title && <h3>{item.title}</h3>}
          {item.para && <p key={item}>{item.para}</p>}
          {renderNestedItems(item, mainIndex + idx * 12, false)}
        </div>
      ) : (
        <p
          style={{ marginLeft: mainIndex }}
          ref={(ele) => shouldAddRef && (ref.current[mainIndex + idx] = ele)}
          key={item}
        >
          {item}
        </p>
      )
    );
  };

  return (
    <div
      onClick={onClick}
      className={`accordionCard ${open ? "accordionCard--active" : ""}`}
      key={item.title}
    >
      <div
        className="accordionCardTitle"
        style={{ paddingBottom: open ? 40 : 0 }}
      >
        <h3>{item.title}</h3>
        <img src={item.img} alt="" />
      </div>
      <div
        style={{
          height: open ? `${height}px` : "0px"
        }}
        className={`accordionCardContent accordionCardContent--${index} `}
      >
        {renderNestedItems(item, 0, true)}
      </div>
    </div>
  );
};

export default ProgressAccordion;
