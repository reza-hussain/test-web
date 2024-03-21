import FadeUp from "components/FadeUp";

import { counters } from "constant/counter";

import "containers/Home/home.scss";
import { useEffect, useRef, useState } from "react";
// TODO import { BackgroundImage } from "constant/BackgroundImage";

const counterCard = () => {
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
        return counter > 64 ? "+64%" : counter;
      case 1:
        return counter > 18 ? "+18%" : counter;
      case 2:
        return counter > 90 ? "+90%" : counter;
      case 3:
        return counter > 24 ? "+24%" : counter;
      default:
        return counter;
    }
  };

  return (
    <>
      <section className="commonBackground counterCard" ref={ref}>
        <div className="container">
          <div className="counterCardSection">
            <FadeUp>
              <div className="counterCardHeading">
                <p>Accelerate growth potential with CrediLinq</p>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="counterCardContainer">
                {counters.map((dataItem, index) => (
                  <div className="counterCardValues" key={index}>
                    <span>{counterDisplay(index)}</span>
                    <p>{dataItem.description}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
};

export default counterCard;
