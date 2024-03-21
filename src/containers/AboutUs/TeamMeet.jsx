import AboutTeam from "assets/images/aboutUs/aboutTeam.png";

import "containers/AboutUs/aboutUs.scss";

const TeamMeet = () => {
  return (
    <section className="commonBackground meetTeam">
      <div className="container">
        <div className="meetTeamSection">
          <h1 className="commonGradientHeading meetTeamHeading">
            Meet the Team
          </h1>
          <p>
            Headquartered in Singapore, CrediLinq.Ai is supported by a globally
            distributed team of professionals with more than 100 years of
            collective experience in financial technology.
          </p>
          <div className="meetTeamImage">
            <img src={AboutTeam} alt="AboutTeam" />
          </div>
          <p className="meetTeamContent">
            Supported by a globally distributed team of experienced
            professionals, we leverage machine-learning and artificial
            intelligence to design our proprietary credit algorithms. Our
            underwriting approach leverages alternative data primarily as
            opposed to the traditional income documents to assess a
            borrower&apos;s creditworthiness. This enables us to bridge the
            financing gap for the underserved SMEs through an end-to-end
            embedded financing solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamMeet;
