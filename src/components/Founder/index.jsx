import "components/Founder/founder.scss";

// import bgImg from "assets/images/founder/bgImg.svg";
import calendar from "assets/images/founder/calendar.svg";
import time from "assets/images/founder/time.svg";
import playIcon from "assets/images/founder/playIcon.svg";

import audioFile from "../../assets/audio/audio.mp3";
// import audioFile from "../../../public/audio.mp3";

import { founderData } from "constant/founderData";
import useScreenMobile from "hooks/useScreenMobile";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// import ReactAudioPlayer from "react-audio-player";

const Founder = () => {
  const isMobile = useScreenMobile({ size: 992 });
  const [isAudioMounted, setIsAudioMounted] = useState(false);

  console.log(isAudioMounted);

  useEffect(() => {
    const handleScroll = () => {
      const isAudio = document.getElementById("audioPlayerSticky");

      isAudio ? setIsAudioMounted(true) : setIsAudioMounted(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="commonBackground founder">
      <div className="container">
        <div className="commonHeading">
          <h1>From The Visionaries Who Started It All</h1>
        </div>

        <div className="founderCard">
          <div className="founderCardList">
            {founderData.map((data, index) => (
              <div className="founderCardBg" key={index}>
                <div className="founderDetails">
                  <h1>{data?.heading}</h1>

                  <div className="founderDateTime">
                    <div className="founderYear">
                      <img src={calendar} alt="calendar" />
                      <span>{data?.year}</span>
                    </div>

                    <div className="founderYear">
                      <img src={time} alt="time" />
                      <span>{data?.time}</span>
                    </div>
                  </div>

                  <Link to={data?.linkTo} target="_blank">
                    <div className="founderPodcast">
                      <img src={playIcon} alt="playIcon" />
                      <span>Play Podcast</span>
                    </div>
                  </Link>
                </div>
                <div className={data?.className}>
                  <img
                    src={isMobile ? data?.mobileImg : data?.founderImg}
                    alt="image"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="founderDescription">
            <div>
              <h2>
                Deep and Vikram: Credit, Tech, And How Technologies Like
                Credilinq Can Transform The Future Of Work
              </h2>

              <p>
                While many experts agree that the freelance economy is the
                future of work, access to credit is a leading barrier for
                solopreneurs, freelancers, and freelance marketplaces. While
                large, traditional companies can leverage credit to grow their
                business, freelancers as ...
              </p>

              <div className="founderDateTime">
                <div className="founderYear">
                  <img src={calendar} alt="calendar" />
                  <span>Nov , 2023</span>
                </div>
                <div className="founderYear">
                  <img src={time} alt="time" />
                  <span>55 Min</span>
                </div>
              </div>
            </div>

            <div className="audioContainer">
              <audio
                controls
                // loop
                src={audioFile}
                // className={`customAudio ${
                //   isAudioMounted ? "disableAudio" : ""
                // }`}
                // controlsList="nodownload noplaybackrate"
              />
              {/* <source src={audioFile} type="audio/mpeg" /> */}
              {/* </audio> */}

              {/* <ReactAudioPlayer src={audioFile} autoPlay controls /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
