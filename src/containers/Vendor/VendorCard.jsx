import { vendorCardData } from "constant/vendorCardData";

const VendorCard = () => {
  return (
    <>
      <section className="commonBackground vendorCard">
        <div className="container">
          {vendorCardData.map((data, index) => (
            <h2 className="commonHeading vendorCardCommonHeading" key={index}>
              {data?.heading}{" "}
              <span className="commonGradient vendorCardGradient">
                {data.specialText}
              </span>
            </h2>
          ))}

          <div className="vendorCardWrapper">
            {vendorCardData.map((data, index) => (
              <div className="vendorCardCard" key={index}>
                <div className="linear">
                  <div className={"vendorCardFirstCard "}>
                    <div className={"vendorCardTitle "}>
                      <h3>{data?.title}</h3>
                      <div>
                        <img
                          className="img_png"
                          src={data?.imageSrc.png}
                          alt="payment"
                        />
                        <img
                          className="img_gif"
                          src={data?.imageSrc.gif}
                          alt="payment"
                        />
                      </div>
                    </div>

                    <div className="vendorCardPara">
                      <p>{data?.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorCard;
