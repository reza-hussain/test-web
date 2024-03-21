import { vendorScrollData } from "constant/vendorScrollData";

const VendorScroll = () => {
  return (
    <section className="commonBackground vendorScroll">
      <div className="container">
        <div className="vendorScrollContainer">
          <div className="vendorScrollSection">
            <div className="vendorScrollHeading">
              <h2>
                Scale Your
                <span> Business</span>{" "}
              </h2>
              <p>
                Let us understand about the flexible financing solution
                specially designed for SG Government Vendors
              </p>
            </div>

            <div className="vendorScrollContents">
              {vendorScrollData.map((data, index) => (
                <div className="vendorScrollContent" key={index}>
                  <div className="vendorScrollContentsImage">
                    <img src={data.image} alt="scaleImage1" />
                  </div>
                  <p>{data.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorScroll;
