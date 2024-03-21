import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import ReactGA from "react-ga";

import { countries } from "constant/countries";
import { investorInquiryData } from "constant/investorInquiryData";

import "containers/InvestmentInquiry/investmentInquiry.scss";

import successImg from "assets/images/footer/success.svg";

const InvestmentInquiry = () => {
  const TRACKING_ID = "UA-198986171-1";

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const form = useRef();

  const [showPopUp, setShowPopUp] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [values, setValues] = useState({
    email: "",
    fullName: "",
    companyName: "",
    country: "",
    investor: "",
    textArea: ""
  });

  useEffect(() => {
    document.documentElement.style.overflow = showPopUp ? "hidden" : "auto";
  }, [showPopUp]);

  const emailValidation = (email) => {
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return pattern.test(email);
  };

  const handleCLick = () => {
    setShowPopUp(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_92etihi", // serviceID
        "template_wl8230h", // templateID
        form.current,
        "mBnhyxFPRt_2dqB6d" // public Key
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    if (emailValidation(values?.email)) {
      setShowPopUp(true);
      setEmailValid(true);

      const timer = setTimeout(() => {
        setShowPopUp(false);
        setValues({
          email: "",
          fullName: "",
          companyName: "",
          country: "",
          investor: "",
          textArea: ""
        });
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setEmailValid(false);
    }
  };

  return (
    <section className="commonBackground inquiry">
      <div className="container">
        <div className="inquiryPage">
          <h2 className="commonHeading">Investment Inquiry</h2>
          <p>Let&lsquo;s get started now and unlock new possibilities.</p>

          <form ref={form} onSubmit={handleSubmit} className="inquiryFullForm">
            <div className="inquiryFormDetails">
              {/* form */}
              <div className="inquiryForm">
                <div className="inquirySingleForm inputRequired">
                  <label>Email Address</label>
                  <input
                    className={`inquiryFormInput ${
                      emailValid ? "" : "invalid"
                    }`}
                    type="text"
                    name="email"
                    placeholder="eg. name@example.com"
                    required
                    value={values?.email}
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                    onBlur={(e) => {
                      if (!emailValidation(e.target.value))
                        setEmailValid(false);
                      else {
                        setEmailValid(true);
                      }
                    }}
                  />
                  {!emailValid && values?.email?.length > 0 && (
                    <div className="inquiryFormInputError">
                      Enter a valid email
                    </div>
                  )}
                </div>

                <div className="inquirySingleForm inputRequired">
                  <label>Full name</label>
                  <input
                    className="inquiryFormInput"
                    type="text"
                    name="fullName"
                    placeholder="eg. your name"
                    required
                    value={values?.fullName}
                    onChange={(e) =>
                      setValues({ ...values, fullName: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* form */}
              <div className="inquiryForm">
                <div className="inquirySingleForm inputRequired">
                  <label>Company Name</label>
                  <input
                    className="inquiryFormInput"
                    type="text"
                    placeholder="eg. your company name"
                    required
                    name="companyName"
                    value={values?.companyName}
                    onChange={(e) =>
                      setValues({ ...values, companyName: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* form */}
              <div className="inquiryForm">
                <div className="inquirySingleForm">
                  <label>Investor Type</label>
                  <div className="inquiryFormDropdown">
                    <select
                      name="inquiry"
                      value={values?.investor}
                      onChange={(e) =>
                        setValues({ ...values, investor: e.target.value })
                      }
                      className="inquiryFormInput inquiryFormSelect"
                    >
                      <option disabled selected value="">
                        Please Select
                      </option>
                      {investorInquiryData.map((inquiry, index) => (
                        <option key={index} value={inquiry}>
                          {inquiry}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="inquirySingleForm inputRequired">
                <label>Country / Region</label>
                <div className="inquiryFormDropdown">
                  <select
                    name="country"
                    className="inquiryFormInput inquiryFormSelect"
                    required
                    value={values?.country}
                    onChange={(e) =>
                      setValues({ ...values, country: e.target.value })
                    }
                  >
                    <option disabled selected value="">
                      Please Select
                    </option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="inquiryText">
              <label>Investor Enquiry Message</label>
              <textarea
                name="textArea"
                className="inquiryTextArea"
                placeholder="Type here"
                value={values?.textArea}
                onChange={(e) =>
                  setValues({ ...values, textArea: e.target.value })
                }
              ></textarea>
            </div>
            <div className="inquiryButton">
              <button className="commonButton inquiryButton">Submit</button>
            </div>
          </form>

          {/* popUp */}
          {showPopUp && (
            <div className="inquiryModal" onClick={handleCLick}>
              <div className="inquiryPopUp">
                <img src={successImg} alt="successImg" />
                <h5 className="inquiryPopUpText">
                  Your Submission has been received successfully.
                </h5>
                <h6 className="inquiryPopUpText">
                  We will get back to you soon.
                </h6>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InvestmentInquiry;
