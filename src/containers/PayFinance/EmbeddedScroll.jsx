import { embeddedData } from "constant/embeddedData";

const index = () => {
  return (
    <section className="commonBackground embedded">
      <div className="container">
        <div className="embeddedContainer">
          <div className="embeddedSection">
            <div className="embeddedHeading">
              <h2>
                Scale Your Platform to New Heights With{" "}
                <span>Our B2B PayNow Solution</span>{" "}
              </h2>
              <p>Witness B2B PayNow in Action</p>
            </div>

            <div className="embeddedContents">
              {embeddedData.map((data, index) => (
                <div className="embeddedContent" key={index}>
                  <div className="embeddedContentsImage">
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

export default index;
