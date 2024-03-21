import Marquee from "react-fast-marquee";

import FadeUp from "components/FadeUp";

import "components/CrediLinqCompaniesSlider/crediLinqCompaniesSlider.scss";

const CrediLinqCompanies = ({ sliderData, sliderHeading, CompaniesImages }) => {
  return (
    <section className={"commonBackground companyBg " + sliderHeading}>
      <div className="container">
        <p className="commonHeading company">
          {sliderData.title}
          {""}{" "}
          <label className="companySliderGradient">
            {sliderData.gradientText}
          </label>
        </p>
        <FadeUp>
          <Marquee direction="left" play="true" speed="100">
            <div className="companyMarqueeImg">
              {CompaniesImages.map((data, index) => (
                <img src={data?.image} alt="algoBuls" key={index} />
              ))}
            </div>
          </Marquee>
        </FadeUp>
      </div>
    </section>
  );
};

export default CrediLinqCompanies;
