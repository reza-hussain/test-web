import { whyChooseData } from "constant/whyChooseData";

const WhyChoose = () => {
  return (
    <section className="whyChoose">
      <div className="container">
        <h2 className="commonHeading whyChooseHeading">
          Why Choose
          <span className="commonGradientHeading whyChooseGradientHeading">
            {" "}
            CrediLinq?
          </span>
        </h2>

        <div className="whyChooseWrapperParent">
          <div className="whyChooseWrapperFirst">
            {whyChooseData.section1.map((data, index) => (
              <>
                <div className="whyChooseFirstContent" key={index}>
                  <div className="whyChooseFirstContentImg">
                    <img
                      src={data.img}
                      alt="TrustFastGif"
                      className="img_png"
                    />
                    <img
                      src={data.gif}
                      alt="TrustFastGif"
                      className="img_gif"
                    />
                  </div>
                  <div className="whyChooseFirstContentPara">
                    <p>{data.content}</p>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="whyChooseWrapperSecond">
            {whyChooseData.section2.map((data, index) => (
              <>
                <div className="whyChooseFirstContent" key={index}>
                  <div className="whyChooseFirstContentImg">
                    <img
                      src={data.img}
                      alt="TrustFastGif"
                      className="img_png"
                    />
                    <img
                      src={data.gif}
                      alt="TrustFastGif"
                      className="img_gif"
                    />
                  </div>
                  <div className="whyChooseFirstContentPara">
                    <p>{data.content}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
