import { useEffect, useRef, useState } from "react";

import "components/AsiaLinqGrowth/asiaLinqGrowth.scss";
import { AsiaLinq } from "constant/asiaLinqGrowth";

const AsiaLinqGrowth = () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let interval;
    const handleScroll = () => {
      if (ref?.current?.getBoundingClientRect()?.top < 350) {
        interval = setInterval(() => {
          setCounter((prevCount) => prevCount + 1);
        }, 10);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //  function
  const counterDisplay = (index) => {
    switch (index) {
      case 0:
        return counter > 47 ? "47+" : counter;
      case 1:
        return counter > 233 ? "233+" : counter;
      case 2:
        return counter > 61 ? "61K" : counter;
      default:
        return counter;
    }
  };

  return (
    <section className="commonBackground asiaLinq" ref={ref}>
      <div className="container">
        <div className="asiaLinqGrowth">
          <h3>Future Potential of Growth With AsiaLinq</h3>

          <div className="asiaLinqGrowthData">
            {AsiaLinq.map((data, index) => (
              <div className="asiaLinqGrowthDataText" key={index}>
                <span className="asiaLinqGrowthNumber">
                  {counterDisplay(index)}
                </span>
                <p className="asiaLinqGrowthPara">{data?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsiaLinqGrowth;
