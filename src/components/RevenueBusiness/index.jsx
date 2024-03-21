import { RevenueData } from "constant/revenueFinancing";

import "components/RevenueBusiness/revenueBusiness.scss";

const RevenueBusiness = ({ headingClass }) => {
  return (
    <section className="commonBackground finance">
      <div className="container">
        <h2 className={"commonHeading " + headingClass}>
          B2B Finance For{" "}
          <label className="commonGradient financeSpecialText">
            Recurring Revenue Businesses
          </label>
        </h2>

        {/* firstCard */}
        {RevenueData.map((data, index) => (
          <div className="financeCards" key={index}>
            <div className="financeCardsData">
              <h4>{data?.title}</h4>

              {data?.description.map((dataPoints, i) => (
                <div className="financeCardsFrameIcon" key={i}>
                  <img src={data?.frameIcon} alt="frameIcon" />
                  <p>{dataPoints}</p>
                </div>
              ))}
            </div>

            <div className="financeCardsImage">
              <img src={data?.image} alt="infoGraph" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RevenueBusiness;
