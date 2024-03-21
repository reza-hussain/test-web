import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "components/Footer";
import GetInTouch from "components/GetInTouch";
import Header from "components/Header/";

import AboutUS from "containers/AboutUs";
import AmazonSeller from "containers/AmazonSeller";
import BlogDetails from "containers/BlogDetails/";
import Blogs from "containers/Blogs";
import CaseStudy from "containers/CaseStudy";
import GetStartForm from "containers/GetStartForm";
import Home from "containers/Home/";
import InvestmentInquiry from "containers/InvestmentInquiry/";
import Investor from "containers/Investor";
import PayFinance from "containers/PayFinance/";
import PayLater from "containers/PayLater";
import PayLaterDirect from "containers/PayLaterDirect";
import PrivacyPolicy from "containers/PrivacyPolicy/PrivacyPolicy";
import DataProtection from "containers/DataProtection";
import TermsAndCondition from "containers/TermsAndCondition";
import RevenueFinancing from "containers/RevenueFinancing";
import SmeHealthCheck from "containers/SmeHealthCheck";
import Vendor from "containers/Vendor";
import Articles from "containers/Articles";

import ScrollToTop from "components/ScrollOnTop/";
import { Form } from "containers/Form/inde";
import "styles/common.scss";

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const hideHeaderPaths = [
    "/sg-vendors",
    "/dataprotection",
    "/termsandcondition"
  ];

  return (
    <>
      <BrowserRouter>
        {hideHeaderPaths?.some((item) => item === currentPath) ? null : (
          <Header />
        )}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUS />} />
          <Route path="/pay-later" element={<PayLater />} />
          <Route path="/pay-finance" element={<PayFinance />} />
          <Route path="/sme-health-check" element={<SmeHealthCheck />} />
          <Route path="/pay-later-direct" element={<PayLaterDirect />} />
          <Route path="/seller-financing" element={<AmazonSeller />} />
          <Route
            path="/recurring-revenue-financing"
            element={<RevenueFinancing />}
          />
          <Route path="/get-started" element={<GetInTouch />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/investor-inquiry" element={<InvestmentInquiry />} />
          <Route path="/support" element={<GetStartForm />} />
          <Route path="/sg-vendors" element={<Vendor />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/dataprotection" element={<DataProtection />} />
          <Route path="/termsandcondition" element={<TermsAndCondition />} />
          <Route path="/expression-of-interest" element={<Form />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
        {hideHeaderPaths?.some((item) => item === currentPath) ? null : (
          <Footer />
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
