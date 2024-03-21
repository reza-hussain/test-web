import FadeUp from "components/FadeUp";

import paymentBuyer from "assets/images/payLater/infograph.gif";
import frameIcon from "assets/images/payLater/paymentFrameIcon.svg";

const PayLaterBuyer = () => {
  const buyers = [
    {
      image: frameIcon,
      text: "No need of chasing payments",
      para: "Our embedded finance toolkit seamlessly integrates with your platform, providing buyers easy access to capital as needed."
    },
    {
      image: frameIcon,
      text: "No need of holding accounts",
      para: "Enhanced capital access speeds inventory restocking and cultivates new revenue through a seamless platform experience."
    },
    {
      image: frameIcon,
      text: "No bad debts",
      para: "Offer your buyers a comprehensive and customer-centric shopping experience by empowering them with instant and affordable access to capital."
    },
    {
      image: frameIcon,
      text: "No damaged business relationships"
    }
  ];

  return (
    <section className="commonBackground paymentBuyer">
      <div className="container">
        <FadeUp>
          <h2 className="commonHeading">
            Orchestrate a One-Click checkout with{" "}
            <p className="commonGradientHeading">our low code components</p>
          </h2>
        </FadeUp>

        <div className="paymentBuyerContent">
          <div className="paymentBuyerImage">
            <FadeUp>
              <img src={paymentBuyer} alt="paymentBuyer" />
            </FadeUp>
          </div>

          <div className="paymentBuyerData">
            <FadeUp>
              {buyers.map((data, index) => (
                <h4 className="paymentBuyerSpecialText" key={index}>
                  {data?.para}
                </h4>
              ))}
            </FadeUp>

            <FadeUp>
              <p className="paymentBuyerSpecialText">
                With our merchant financing solution now you,
              </p>
            </FadeUp>

            <FadeUp>
              {buyers.map((data, index) => (
                <div key={index} className="paymentBuyerFrameIcon">
                  <img src={data.image} alt="frameIcon" />
                  <p className="paymentBuyerSpecialText">{data.text}</p>
                </div>
              ))}
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayLaterBuyer;
