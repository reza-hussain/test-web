import { useEffect } from "react";

import Banner from "containers/Blogs/Banner";
import CardContainer from "containers/Blogs/CardContainer";
import WhitePaper from "components/WhitePaper";

import ReactGA from "react-ga";

const Blogs = () => {
  const TRACKING_ID = "UA-198986171-1";

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
      <Banner />
      <CardContainer />
      <WhitePaper />
    </div>
  );
};

export default Blogs;
