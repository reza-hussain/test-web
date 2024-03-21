// import blogImg from "assets/images/header/Blog-1.png";
// import blogImg1 from "assets/images/header/Blog-2.png";
import calendarImg from "assets/images/header/calendar.svg";
import timeLogo from "assets/images/header/time.svg";
import forbes from "assets/images/header/Forbes.svg";
import rightArrowImg from "assets/images/header/rightArrowImage.svg";
import rightArrow from "assets/images/header/rightArw.svg";
import theEdge from "assets/images/header/theEdge.svg";

import "components/BannerCard/bannerCard.scss";

import audioFile from "../../assets/audio/audio.mp3";
// import audioFile from "assets/audio/354636692-44100-2-2959fe8df330f.mp3";

import { Link } from "react-router-dom";
// import ReactAudioPlayer from "react-audio-player";

const BannerCard = ({
  handlePlayTime = () => {},
  audioRef,
  showAudioPlayer
}) => {
  return (
    <section className="blogBanner">
      {/* <div className="container"> */}
      <div className="blogBannerCards">
        {/* <div className="blogBannerBorder"> */}
        <div className="blogBannerPlatform">
          <div className="blogBannerHeader">
            <div className="blogBannerHeading">
              <img src={forbes} alt="image" />
              <h3>Reinventing Access To Growth Capital For Platform SMEs</h3>

              <div className="blogBannerSchedule">
                <div className="blogBannerCalendar">
                  <img src={calendarImg} alt="calendarImg" />
                  <span>Nov 7, 2023</span>
                </div>
                <div className="blogBannerCalendar">
                  <img src={timeLogo} alt="calendarImg" />
                  <span>44 Min</span>
                </div>
              </div>
            </div>

            <Link
              to="https://www.forbes.com/sites/jonyounger/2023/11/07/credilinqai-reinventing-access-to-growth-capital-for-platform-smes/?sh=11645be1df99"
              target="_blank"
            >
              <div className="blogBannerButton">
                <span>Read Full Article</span>
                <img src={rightArrowImg} alt="image" />
                {/* </div> */}
              </div>
            </Link>
          </div>
        </div>

        <div className="blogBannerPlatform secondCard">
          <div className="blogBannerHeader">
            <div className="blogBannerHeading">
              <img src={theEdge} alt="image" />
              <h3>Bridging The SME Financing Gap With Tech</h3>

              <div className="blogBannerSchedule">
                <div className="blogBannerCalendar">
                  <img src={calendarImg} alt="calendarImg" />
                  <span>Oct 5, 2021</span>
                </div>
                <div className="blogBannerCalendar">
                  <img src={timeLogo} alt="calendarImg" />
                  <span>6 Min</span>
                </div>
              </div>
            </div>

            <Link
              to="https://www.theedgesingapore.com/digitaledge/focus/bridging-sme-financing-gap-tech"
              target="_blank"
            >
              <div className="blogBannerButton">
                <span>Read Full Article</span>
                <img src={rightArrow} alt="image" />
                {/* </div> */}
              </div>
            </Link>
          </div>
        </div>

        <div className="blogBannerPlatform  thirdCard">
          <div className="blogBannerHeader">
            <div className="blogBannerHeading">
              <h3>
                Credit, Tech, & How Technologies Like Credilinq Can Transform
                The Future Of Work
              </h3>

              <div className="blogBannerSchedule">
                <div className="blogBannerCalendar">
                  <img src={calendarImg} alt="calendarImg" />
                  <span>May 25, 2023</span>
                </div>
                <div className="blogBannerCalendar">
                  <img src={timeLogo} alt="calendarImg" />
                  <span>44 Min</span>
                </div>
              </div>
            </div>

            <div className="audioContainer">
              <audio
                controls
                loop
                src={audioFile}
                id="audioPlayer"
                onTimeUpdate={handlePlayTime}
                className={`customAudio ${
                  showAudioPlayer ? "disableAudio" : ""
                }`}
                ref={audioRef}
                controlsList="nodownload noplaybackrate"
              />
              {/* <source src={audioFile} type="audio/mpeg" /> */}
              {/* </audio> */}
              {/* <ReactAudioPlayer src={audioFile} autoPlay controls /> */}
            </div>
          </div>
        </div>

        <div className="blogBannerPlatform fourthCard">
          <div className="blogBannerHeader">
            <div className="blogBannerHeading">
              <img src={forbes} alt="image" />
              <h3>
                Three Unique Embedded Fintech Distribution Models Growing Fast
              </h3>

              <div className="blogBannerSchedule">
                <div className="blogBannerCalendar">
                  <img src={calendarImg} alt="calendarImg" />
                  <span>Jan 31, 2024</span>
                </div>
                <div className="blogBannerCalendar">
                  <img src={timeLogo} alt="calendarImg" />
                  <span>44 Min</span>
                </div>
              </div>
            </div>

            <Link
              to="https://www.forbes.com/sites/alexlazarow/2023/01/28/three-unique-embedded-fintech-distribution-models-growing-fast/?sh=1b76f9ba9c95"
              target="_blank"
            >
              <div className="blogBannerButton">
                <span>Read Full Article</span>
                <img src={rightArrowImg} alt="image" />
                {/* </div> */}
              </div>
            </Link>
          </div>
        </div>

        <Link to="/articles">
          <div className="blogBannerArticle">
            <span>View All News & Articles</span>
            <img src={rightArrow} alt="rightArrow" />
          </div>
        </Link>
        {/* </div> */}
      </div>
    </section>
  );
};

export default BannerCard;
