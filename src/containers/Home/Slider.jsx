import SliderImage from "assets/images/slider/sliderImage.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import SliderQuotation from "assets/images/slider/sliderQuotaion.svg";

const Slider = () => {
  return (
    <>
      <section className="commonBackGround slider" style={{ display: "none" }}>
        <div className="container">
          <div>
            <h3 className="commonHeading">
              Hear From Our{" "}
              <span className="commonGradient sliderGradient">
                Delighted Clients
              </span>{" "}
            </h3>
          </div>
          <Splide
            options={{
              perPage: 1,
              autoplay: true,
              interval: 4000,
              type: "loop"
            }}
            aria-label="React Splide Example"
          >
            <SplideSlide>
              <div className="sliderContainer">
                <div className="sliderImage">
                  <img src={SliderImage} alt="SliderImage" />
                </div>
                <div className="sliderContents">
                  <div className="sliderContentsImage">
                    <img src={SliderQuotation} alt="SliderQuotaion" />
                  </div>
                  <p>
                    <span>
                      I would definitely recommend other businesses to apply for
                      Recurring Revenue Financing,
                    </span>{" "}
                    as it is the best way to extend your runway & address
                    immediate spends. It is best suited for short timelines,
                    ideally 6 to 12 months & this makes it perfect for
                    increasing your valuation for upcoming funding rounds.
                  </p>
                  <div className="sliderContentsProfile">
                    <span className="ProfileName">Vikram Kotibhaskar</span>
                    <span className="ProfilePosition">
                      Chief Executive Officer
                    </span>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="sliderContainer">
                <div className="sliderImage">
                  <img src={SliderImage} alt="SliderImage" />
                </div>

                <div className="sliderContents">
                  <div className="sliderContentsImage">
                    <img src={SliderQuotation} alt="SliderQuotaion" />
                  </div>
                  <p>
                    <span>
                      I would definitely recommend other businesses to apply for
                      Recurring Revenue Financing,
                    </span>{" "}
                    as it is the best way to extend your runway & address
                    immediate spends. It is best suited for short timelines,
                    ideally 6 to 12 months & this makes it perfect for
                    increasing your valuation for upcoming funding rounds.
                  </p>
                  <div className="sliderContentsProfile">
                    <span className="ProfileName">Vikram Kotibhaskar</span>
                    <span className="ProfilePosition">
                      Chief Executive Officer
                    </span>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="sliderContainer">
                <div className="sliderImage">
                  <img src={SliderImage} alt="SliderImage" />
                </div>

                <div className="sliderContents">
                  <div className="sliderContentsImage">
                    <img src={SliderQuotation} alt="SliderQuotaion" />
                  </div>
                  <p>
                    <span>
                      I would definitely recommend other businesses to apply for
                      Recurring Revenue Financing,
                    </span>{" "}
                    as it is the best way to extend your runway & address
                    immediate spends. It is best suited for short timelines,
                    ideally 6 to 12 months & this makes it perfect for
                    increasing your valuation for upcoming funding rounds.
                  </p>
                  <div className="sliderContentsProfile">
                    <span className="ProfileName">Vikram Kotibhaskar</span>
                    <span className="ProfilePosition">
                      Chief Executive Officer
                    </span>
                  </div>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </>
  );
};

export default Slider;
