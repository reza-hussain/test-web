import FadeUp from "components/FadeUp";

import "components/ReasonStatistics/reasonStatistics.scss";

const reasonStatistics = ({
  reasonData,
  extraClass,
  amazonSellerCardHeading,
  amazonSellerTitleFlex,
  amazonSellerTitleHeading
}) => {
  return (
    <>
      <section className="commonBackground reasonStatistics">
        <div className="container">
          {reasonData.map((data, index) => (
            <h2
              className={
                "commonHeading reasonStatisticsCommonHeading" +
                " " +
                amazonSellerCardHeading
              }
              key={index}
            >
              {data?.heading}{" "}
              <span className="commonGradient reasonStatisticsGradient">
                {data.specialText}
              </span>
            </h2>
          ))}

          <div className="reasonStatisticsWrapper">
            {reasonData.map((data, index) => (
              <div className="reasonStatisticsCard" key={index}>
                <FadeUp>
                  <div className="linear">
                    <div className={"reasonStatisticsFirstCard "}>
                      <div
                        className={
                          "reasonStatisticsTitle " +
                          extraClass +
                          " " +
                          amazonSellerTitleFlex
                        }
                      >
                        <h3 className={amazonSellerTitleHeading}>
                          {data?.title}
                        </h3>
                        <div>
                          <img
                            className="img_png"
                            src={data?.imageSrc.png}
                            alt="payment"
                          />
                          <img
                            className="img_gif"
                            src={data?.imageSrc.gif}
                            alt="payment"
                          />
                        </div>
                      </div>

                      <div className="reasonStatisticsPara">
                        <p>{data?.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default reasonStatistics;
