import FadeUp from "components/FadeUp";

import infoGraph from "assets/images/payLater/infograph.png";

const PayLaterFinance = () => {
  return (
    <section className="commonBackground payLaterFinance">
      <div className="container">
        <FadeUp>
          <h2 className="commonHeading">
            Discover the Power of a Fully Integrated{" "}
            <p className="commonGradientHeading">Embedded Financing Solution</p>
          </h2>
        </FadeUp>

        <div className="payLaterFinanceContent">
          <div className="payLaterFinanceData">
            <FadeUp>
              <p className="payLaterFinanceSpecialText">
                Our proprietary merchant financing and alternative financing
                solution seamlessly integrates with your platform and allows
                your buyers to effortlessly access capital when they need it.
              </p>
            </FadeUp>

            <FadeUp>
              <p className="payLaterFinanceSpecialText">
                This increased accessibility to affordability to capital not
                only empowers your buyers to restock their inventory faster but
                also lets you consistently nurture a new revenue stream, all
                with a native platform experience.
              </p>
            </FadeUp>
          </div>

          <div className="payLaterFinanceImage">
            <FadeUp>
              <img src={infoGraph} alt="infoGraph" />
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayLaterFinance;
