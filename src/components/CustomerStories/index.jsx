import { Link } from "react-router-dom";

import customerPhoto from "assets/images/recurringRevenue/customerPhoto.png";
import customerQuotes from "assets/images/recurringRevenue/customerQuotes.png";

import "components/CustomerStories/customerStories.scss";

const CustomerStories = ({
  customerStoriesData,
  renderContent,
  renderData,
  extraClass,
  secondClass,
  customerClass
}) => {
  return (
    <section className={"commonBackground customer " + customerClass}>
      <div className="container">
        <h1>{renderContent}</h1>
        <div className={"customerContainer " + extraClass}>
          <div className="customerImage">
            <img src={customerPhoto} alt="customerPhoto" />
          </div>
          <div className="customerSection">
            <img src={customerQuotes} alt="customerQuotes" />
            <p className="customerContent">
              &quot;I would <span> definitely recommend</span> other businesses
              to apply for
              <span> Recurring Revenue Financing ,</span> as it is the best way
              to extend your runway &amp; address immediate spends. It is best
              suited for short timelines, ideally 6 to 12 months & this makes it
              perfect for increasing your valuation for upcoming funding
              rounds.&quot;
            </p>
            <div>
              <span> {customerStoriesData?.profileName}</span>
              <p className={secondClass}>{customerStoriesData?.position}</p>
            </div>
            {renderData && (
              <Link to={"/case-study"} target="_blank">
                <div>{renderData}</div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
