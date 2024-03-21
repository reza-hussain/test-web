import { payAdvantage } from "constant/payFinanceAdvantage";

import "containers/PayFinance/payFinance.scss";

const Advantage = () => {
  return (
    <>
      <section className="commonBackground advantage">
        <div className="container">
          <h2 className="commonHeading advantageCommonHeading">
            Benefits of{" "}
            <span className="commonGradient advantageGradient">B2B PayNow</span>{" "}
          </h2>
          <div className="advantageWrapper">
            {payAdvantage.map((data, index) => (
              <div className="advantageSection" key={index}>
                <div className="advantageImage">
                  <img src={data.image} alt="AdvantageSeller" />
                </div>
                <div className="advantageContents">
                  <h3>{data.heading}</h3>
                  <p>{data.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Advantage;
