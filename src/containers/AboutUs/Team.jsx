// import TeamView from "assets/images/aboutUs/teamView.svg";

import { teamData } from "constant/teamData";
import { Link } from "react-router-dom";
import { linkedInIcon } from "constant/team";

import "containers/AboutUs/aboutUs.scss";

const Team = () => {
  return (
    <>
      <section className="commonBackground team">
        <div className="container">
          <div className="teamContent">
            <h1 className="commonHeading teamHeading">
              <span className="commonGradient teamGradient">
                {" "}
                Meet the Team
              </span>
            </h1>
            <p>
              Headquartered in Singapore, CrediLinq.Ai is supported by a
              globally distributed team of professionals with more than 100
              years of collective experience in financial technology.
            </p>
          </div>

          <div className="teamContainer">
            {teamData.map((data, index) => (
              <div className="linear" key={index}>
                <div className="teamSection">
                  <img src={data.image} alt="TeamCeo" />
                  <div className="teamProfile">
                    <div className="teamPosition">
                      <span>{data.title} </span>
                      <p>{data.position} </p>
                    </div>
                    <Link to={data.profile} target={"_blank"}>
                      {linkedInIcon()}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="teamViewMore">
            <p>View More</p>
            <img src={TeamView} alt="TeamView" />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Team;
