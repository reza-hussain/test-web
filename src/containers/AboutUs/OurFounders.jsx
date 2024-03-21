import AboutCEO from "assets/images/aboutUs/aboutCEO.png";
import AboutFounder from "assets/images/aboutUs/aboutFounder.png";
import AboutLinkedIn from "assets/images/aboutUs/teamLinkedIn.svg";

import "containers/AboutUs/aboutUs.scss";

import { Link } from "react-router-dom";

const OurFounders = () => {
  return (
    <section className="commonBackground ourFounder">
      <div className="container">
        <h1 className="commonHeading ourFounderHeading">Our Founders</h1>
        <div className="ourFounderContainer">
          <div className="ourFounderSection">
            <div className="ourFounderImage">
              <div className="ourFounderImageCard">
                <img src={AboutFounder} alt="AboutFounder" />
                <Link
                  to={"https://www.linkedin.com/in/deep-singh-credilinq-ai/"}
                  target="_blank"
                >
                  <img
                    src={AboutLinkedIn}
                    alt="AboutLinkedIn"
                    className="ourFounderImageCardLinkedIn"
                  />
                </Link>
              </div>
              <div className="ourFounderImageCard">
                <img src={AboutCEO} alt="AboutCEO" />
                <Link
                  to={"https://www.linkedin.com/in/vikram-kotibhaskar-42a1022/"}
                  target="_blank"
                >
                  <img
                    src={AboutLinkedIn}
                    alt="AboutLinkedIn"
                    className="ourFounderImageCardLinkedIn"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="ourFounderDescription">
            <p>
              Having seen the lack of technology infrastructure to provide
              contextual credit based on alternate data, they started{" "}
              <Link to={"https://www.credilinq.ai/"} target="_blank">
                {" "}
                <span className="ourFounderDescriptionColor">
                  CrediLinq.Ai{" "}
                </span>{" "}
              </Link>{" "}
              to reimagine the way credit is underwritten and serviced.
            </p>
            <p className="ourFounderDescriptionContent">
              With a vision to enable every business to become a lender by
              embedding credit products within their platform,{" "}
              <b className="ourFounderDescriptionContentBold">
                the idea of CrediLinq was born.
              </b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFounders;
