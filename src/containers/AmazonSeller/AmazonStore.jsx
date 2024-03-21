import FadeUp from "components/FadeUp";

import { AmazonStoreData } from "constant/amazonStore";
import Arrow from "constant/arrow";
import { Link } from "react-router-dom";

const AmazonStore = () => {
  return (
    <section className="commonBackground store">
      <div className="container">
        <FadeUp>
          {AmazonStoreData.map((data, index) => (
            <div className="storeData" key={index}>
              <div className="storeContent">
                <h2 className="commonHeading storeHeading">
                  Scale Your
                  <label className="storeGradient"> Amazon Store </label>To New
                  Heights
                </h2>

                <div className="storeMobileImage">
                  <img src={data?.img} alt="image" />
                </div>

                {data?.description.map((dataPoints, i) => (
                  <div className="storeFrameImg" key={i}>
                    <img src={data?.image} alt="frameIcon" />
                    <p>{dataPoints}</p>
                  </div>
                ))}
                <Link
                  to={
                    "https://sellerfinancing.credilinq.ai/?hsCtaTracking=3d876b1b-fe85-4b0f-9d28-120a79c7e906%7C00af0297-9ae8-42ac-b832-87e634483f8c"
                  }
                  target="_blank"
                >
                  <button className="commonButton storeButton">
                    Apply Now <Arrow />
                  </button>
                </Link>
              </div>

              <div className="storeImage">
                <img src={data?.img} alt="image" />
              </div>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
};

export default AmazonStore;
