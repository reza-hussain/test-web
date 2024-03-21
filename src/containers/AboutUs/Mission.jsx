import MissionEye from "assets/images/aboutUs/missionEye.gif";
import MissionClock from "assets/images/aboutUs/missionClock.gif";

import "containers/AboutUs/aboutUs.scss";

const Mission = () => {
  return (
    <>
      <section className="commonBackground  mission">
        <div className="container">
          <div className="missionContainer">
            <div className="missionSection">
              <div className="missionImage">
                <img src={MissionEye} alt="MissionEye" />
              </div>
              <h1 className="commonHeading missionHeading">
                Our
                <span className="commonGradient missionGradient"> Vision</span>
              </h1>
              <p>
                Drive credit empowerment for underserved SMEs by being the
                Credit-as-a-Service provider for Asia.
              </p>
            </div>
            <div className="missionSection">
              <div className="missionImage">
                <img src={MissionClock} alt="MissionClock" />
              </div>
              <h1 className="commonHeading missionHeading">
                Our
                <span className="commonGradient missionGradient"> Mission</span>
              </h1>
              <p>
                Partner with platform ecosystems to deliver hassle-free and fair
                access to capital at the point of need that enables
                entrepreneurs to achieve their dreams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
