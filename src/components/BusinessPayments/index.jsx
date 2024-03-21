import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

import FadeUp from "components/FadeUp";
// TODO import Arrow from "constant/arrow";

import "components/BusinessPayments/businessPayments.scss";

const BusinessPayments = ({ bussinessData, extraClass }) => {
  // TODO const location = useLocation();
  // TODO const isLocate = location.pathname === "/about-us";

  const payment = useRef();
  const paymentIsView = useInView(payment, { amount: 0.6 });

  return (
    <section className="commonBackground payments" ref={payment}>
      <img
        style={{
          top: paymentIsView ? "-70px" : "-250px",
          transition: "all 0.6s ease-in-out",
          maxWidth: "309px"
        }}
        src={bussinessData.leftImage}
        alt="bgImg"
        className="paymentsLeftImg"
      />
      <img
        style={{
          bottom: paymentIsView ? "-70px" : "-250px",
          transition: "all 0.6s ease-in-out",
          maxWidth: "309px"
        }}
        src={bussinessData.rightImage}
        alt="bgImg"
        className="paymentsRightImg"
      />
      <div className="container">
        <div className="paymentsData">
          <div className="paymentsContent">
            <FadeUp>
              <h2 className="commonHeading">
                {bussinessData.text}{" "}
                <label className="commonGradient paymentsGradient">
                  {bussinessData.gradientText}
                </label>
              </h2>
            </FadeUp>

            <FadeUp>
              <p className={extraClass}>{bussinessData.content}</p>
            </FadeUp>
          </div>
          {/* TODO {isLocate ? (
            <Link to={"/get-started"}>
              <button className="commonButton paymentsBtn">
                {bussinessData.button} <Arrow />
              </button>
            </Link>
          ) : (
            <button className="commonButton paymentsBtn">
              {bussinessData.button}
            </button>
          )} */}
          <Link to={"/get-started"}>
            <button className="commonButton paymentsBtn">
              {bussinessData.button}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BusinessPayments;
