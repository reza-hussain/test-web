import FadeUp from "components/FadeUp";

const Banner = () => {
  return (
    <section className="commonBackground  Banner">
      <div className="container BannerContainer">
        <FadeUp>
          <h2 className="commonBannerHeading BannerHeading">
            How CrediLinq helped an Australian SAAS Marketing Platform{" "}
            <label className="commonBannerGradient BannerGradient">
              Increase Revenue by 20%
            </label>
          </h2>
        </FadeUp>
      </div>
    </section>
  );
};

export default Banner;
