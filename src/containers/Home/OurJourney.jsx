import React, { useEffect, useState } from "react";
import { motion as m, useAnimationControls } from "framer-motion";

import useScreenMobile from "hooks/useScreenMobile";

import card1 from "assets/images/about-us/card1.png";
import card2 from "assets/images/about-us/card2.png";
import card3 from "assets/images/about-us/card3.png";
import card4 from "assets/images/about-us/card4.png";
import card5 from "assets/images/about-us/card5.png";
import card6 from "assets/images/about-us/card6.png";

// mobileImage
import card1Img from "assets/images/about-us/card1Mobile.png";
import card2Img from "assets/images/about-us/card2Mobile.png";
import card3Img from "assets/images/about-us/card3Mobile.png";
import card4Img from "assets/images/about-us/card4Mobile.png";
import card5Img from "assets/images/about-us/card4Mobile.png";
// TODO import card6Img from "assets/images/about-us/card4Mobile.png";

const data = [
  {
    year: "2023",
    images: [
      card1,
      card2,
      card3,
      card4,
      card5,
      card6,
      card2,
      card3,
      card4,
      card5,
      card6
    ]
  },
  {
    year: "2022",
    images: [card5, card3, card2, card1, card4, card6, card5, card3, card2]
  },
  {
    year: "2021",
    images: [
      card3,
      card2,
      card1,
      card6,
      card5,
      card4,
      card2,
      card3,
      card4,
      card5,
      card6
    ]
  }
];

const mobileData = [
  {
    year: "2023",
    images: [card1Img, card2Img, card3Img, card4Img]
  },
  {
    year: "2022",
    images: [card5Img, card3Img, card2Img, card1Img]
  },
  {
    year: "2021",
    images: [card3Img, card2Img, card1Img]
  }
];

const OurJourney = () => {
  const [activeCards, setActiveCards] = useState(0);
  const [activeYear, setActiveYear] = useState("2021");
  const [imageSource, setImageSource] = useState();
  const controls = useAnimationControls();
  const isMobile = useScreenMobile({ size: 768 });

  useEffect(() => {
    isMobile ? setImageSource(mobileData) : setImageSource(data);
  }, [isMobile]);

  const variantsEven = {
    hidden: {
      opacity: 0,
      y: window.innerWidth < 768 ? 0 : -300,
      x: window.innerWidth < 768 ? -300 : 0,
      transition: { ease: "linear", duration: 0.01 }
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { ease: "easeInOut", duration: 0.8 }
    }
  };
  const variantsOdd = {
    hidden: {
      opacity: 0,
      y: window.innerWidth < 768 ? 0 : 300,
      x: window.innerWidth < 768 ? 300 : 0,
      transition: { ease: "linear", duration: 0.01 }
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { ease: "easeInOut", duration: 0.8 }
    }
  };

  useEffect(() => {
    controls.start("hidden");

    setTimeout(() => {
      controls.start("visible");
    }, 500);
  }, [activeYear]);

  const handleActive = (year, cards) => {
    setActiveCards(cards);
    setActiveYear(year);
  };

  return (
    <div className="ourJourney">
      <div className="ourJourneyHeading">
        <h3>Our Journey</h3>
        <p className="ourJourneyPara">
          Our journey has been a winding path filled with both challenges and
          triumphs, shaping us into the resilient and determined individuals we
          are today.
        </p>
      </div>

      <div className="ourJourneyMain">
        <div className="ourJourneyYears">
          <button
            className={activeYear === "2021" && "selectedYear"}
            onClick={() => handleActive("2021", 0)}
          >
            2021
          </button>
          <button
            className={activeYear === "2022" && "selectedYear"}
            onClick={() => handleActive("2022", 1)}
          >
            2022
          </button>
          <button
            className={activeYear === "2023" && "selectedYear"}
            onClick={() => handleActive("2023", 2)}
          >
            2023
          </button>
        </div>
        <div className="ourJourneyCards">
          {imageSource &&
            imageSource[activeCards].images.map((img, idx) => (
              <m.span
                variants={idx % 2 === 0 ? variantsEven : variantsOdd}
                initial="hidden"
                animate={controls}
                key={idx}
              >
                <div className="card">
                  <img src={img} alt="" />
                </div>
              </m.span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
