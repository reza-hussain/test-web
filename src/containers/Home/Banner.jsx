import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { homeBannerData } from "constant/homeBanner";
// import BannerCard from "components/BannerCard";
// TO-DO
// import Lottie from "lottie-react";
// import animation from "assets/json/Banner_animation.json";
import downloadPaper from "assets/images/header/downloadPaper.png";
import successImg from "assets/images/footer/success.svg";
import closeAudio from "assets/images/header/closeAudio.svg";

import Arrow from "constant/arrow";

// import bannerLogo from "assets/images/home/paymentMethod.png";

import "react-circular-progressbar/dist/styles.css";
import audioFile from "../../assets/audio/audio.mp3";
// import audioFile from "assets/audio/354636692-44100-2-2959fe8df330f.mp3";

// import Industry from "components/Industry/index";
import BannerCard from "components/BannerCard";
import WhitePaperForm from "components/WhitePaperForm";
import useScreenMobile from "hooks/useScreenMobile";

const Banner = () => {
  const [duration] = useState(10000);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [items, setItems] = useState(4);
  const [currentAudioTime, setCurrentAudioTime] = useState(0);
  const audioRef = useRef(null);
  const [hideHeader, setHideHeader] = useState(true);
  const [position, setPosition] = useState(0);
  const parentAudioRef = useRef(null);

  const splideRef = useRef();
  // const [showForm, setShowForm] = useState("");
  const [popUpStatus, setPopUpStatus] = useState("form");
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);

  useEffect(() => {
    if (active === 0 && currentAudioTime) {
      parentAudioRef.current.currentTime = currentAudioTime;
      parentAudioRef?.current?.play();
      audioRef.current?.pause();
    }
  }, [active]);

  useEffect(() => {
    let interval;
    if (progress < duration) {
      interval = setInterval(() => {
        setProgress((prevCount) => prevCount + (0.01 * duration) / 100);
      }, 100);
    }
    if (progress === 100) {
      setActive(active + 1);
      setProgress(0);
      splideRef.current.splide.go(active + 1);
    }
    if (active + 1 > items) {
      setActive(0);
      setProgress(0);
      splideRef.current.splide.go(0);
    }
    setItems(4);
    return () => {
      clearInterval(interval);
    };
  }, [progress, active]);

  const handleMove = (index) => {
    setActive(index);
    setProgress(0);
    splideRef.current.splide.go(index);
  };

  const handleDownloadClick = () => {
    setPopUpStatus("form");
  };

  const handleCLick = () => {
    setPopUpStatus(null);
  };

  useEffect(() => {
    const audioClicked = audioRef.current.currentTime > 0;
    if (progress >= 100 && active === 3 && !showAudioPlayer && audioClicked) {
      localStorage.setItem("isAudio", true);
      setShowAudioPlayer(true);
    }
  }, [progress, active, showAudioPlayer]);

  const handleCloseAudio = () => {
    setShowAudioPlayer(false);
    localStorage.setItem("isAudio", false);
    audioRef.current.currentTime = 0;
  };

  const handlePlayTime = (e) => {
    setCurrentAudioTime(e.target.currentTime);
  };

  const isMobile = useScreenMobile({ size: 992 });

  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => {
        const moving = window.pageYOffset;
        if (moving > 100) {
          setHideHeader(position > moving);
        } else {
          setHideHeader(true);
        }
        setPosition(moving);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });
  const cls = hideHeader ? "hiddenClass" : "isHidden";

  return (
    <section className="commonBackground bannerBgImage">
      <div className="container">
        <Splide
          ref={splideRef}
          options={{
            perPage: 1,
            pagination: false
            // interval: 10000,
          }}
          hasTrack={false}
          onMove={({ index }) => handleMove(index)}
          // className={active === 3 ? "splideHeight" : "bannerHeight"}
        >
          <SplideTrack>
            {homeBannerData?.map((data, idx) => (
              <SplideSlide key={data.img}>
                {idx === 3 ? (
                  <BannerCard
                    currentIndex={active}
                    handlePlayTime={handlePlayTime}
                    audioRef={audioRef}
                    showAudioPlayer={showAudioPlayer}
                  />
                ) : (
                  <div className="banner bannerText">
                    <div className="bannerContent">
                      <h1 className="commonBannerHeading bannerHeading">
                        {data.title1}{" "}
                        <span className="commonBannerGradient">
                          {data.title2}
                        </span>
                      </h1>
                      <p className="bannerDesc">{data.content}</p>

                      <Link to={"/get-started"} target="_blank">
                        <button className="commonButton">
                          Get Started <Arrow />
                        </button>
                      </Link>

                      {/* <div className="bannerProgress bannerProgress--web">
                        <CircularProgressbarWithChildren value={progress}>
                          <p className="bannerProgressContent">
                            {active + 1}
                            <span>/{items}</span>
                          </p>
                        </CircularProgressbarWithChildren>
                      </div> */}
                    </div>

                    <div className="bannerLogo">
                      <img src={data.img} alt="bannerLogo" />
                      {/* <Lottie animationData={animation} loop={true} />; */}
                    </div>
                    {/* <div className="bannerProgress bannerProgress--mobile">
                      <CircularProgressbarWithChildren value={progress}>
                        <p className="bannerProgressContent">
                          {active + 1}
                          <span>/{items}</span>
                        </p>
                      </CircularProgressbarWithChildren>
                    </div> */}
                  </div>
                )}
              </SplideSlide>
            ))}
          </SplideTrack>

          <div className="splide__progress">
            {homeBannerData?.map((_, index) => (
              <div
                className={`splide__progress__bar ${
                  active > index && active > 0
                    ? "activeProgressFilled"
                    : (active === index || index === 0) && "activeProgressBar"
                }`}
                key={index}
                onClick={() => handleMove(index)}
              ></div>
            ))}
          </div>
        </Splide>
      </div>

      <div className="fixed" onClick={handleDownloadClick}>
        <img src={downloadPaper} alt="img" />
        <span>
          Download <p>The Whitepaper</p>
        </span>
      </div>
      {popUpStatus === "form" && (
        <WhitePaperForm
          className="activeWhitePaper"
          popUpStatus={popUpStatus}
          setPopUpStatus={setPopUpStatus}
        />
      )}

      {/* popUp */}
      {popUpStatus === "email" && (
        <div className="downloadFormModal" onClick={handleCLick}>
          <div className="downloadFormPopUp">
            <img src={successImg} alt="successImg" />
            <h5 className="downloadFormPopUpText">Email Sent Successfully.</h5>
          </div>
        </div>
      )}

      {showAudioPlayer && (
        <>
          {isMobile ? (
            <div className={`audioTag ${cls}`} id="audioPlayerSticky">
              <audio
                controls
                loop
                src={audioFile}
                id="audio"
                className="customAudio"
                controlsList="nodownload noplaybackrate"
                ref={parentAudioRef}
              />
              {/* <source src={audioFile} type="audio/mpeg" /> */}
              {/* </audio> */}
              <img
                src={closeAudio}
                alt="closeAudio"
                className="closeAudio"
                onClick={handleCloseAudio}
              />
            </div>
          ) : (
            <div className="audioPlayer" id="audioPlayerSticky">
              <span>Credit, Tech, & How Technologies...</span>
              <audio
                controls
                loop
                src={audioFile}
                id="audio"
                className="customAudio"
                controlsList="nodownload noplaybackrate"
                ref={parentAudioRef}
              />
              {/* <source src={audioFile} type="audio/mpeg" /> */}
              {/* </audio> */}
              <img
                src={closeAudio}
                alt="closeAudio"
                className="closeAudio"
                onClick={handleCloseAudio}
              />
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Banner;
