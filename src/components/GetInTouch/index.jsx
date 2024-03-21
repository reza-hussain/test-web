import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { countries } from "constant/countries";
import { industries } from "constant/industries";
import { inquiries } from "constant/inquiries";

import "components/GetInTouch/getInTouch.scss";

import successImg from "assets/images/footer/success.svg";

const GetInTouch = () => {
  const form = useRef();

  const [showPopUp, setShowPopUp] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [values, setValues] = useState({
    email: "",
    fullName: "",
    companyName: "",
    country: "",
    inquiry: "",
    industry: "",
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

    const countryDropdown = document.getElementById("countryDropdown");
    const selectedCountry = countryDropdown.value;

    values.country = selectedCountry;

    emailjs
      .sendForm(
        "service_92etihi", // serviceID
        "template_171we8a", // templateID
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
          inquiry: "",
          industry: "",
          textArea: ""
        });
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setEmailValid(false);
    }
  };

  return (
    <section className="commonBackground contactUs">
      <div className="container">
        <div className="contactUsPage">
          <h2 className="commonHeading">Get started Now</h2>
          <p>Let&lsquo;s get started now and unlock new possibilities.</p>

          <form
            ref={form}
            onSubmit={handleSubmit}
            className="contactUsFullForm"
          >
            <div className="contactUsFormDetails">
              {/* form */}
              <div className="contactUsForm">
                <div className="contactUsSingleForm inputRequired">
                  <label>Email Address</label>
                  <input
                    className={`contactUsFormInput ${
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
                    <div className="contactUsFormInputError">
                      Enter a valid email
                    </div>
                  )}
                </div>

                <div className="contactUsSingleForm inputRequired">
                  <label>Full name</label>
                  <input
                    className="contactUsFormInput"
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
              <div className="contactUsForm">
                <div className="contactUsSingleForm">
                  <label>Product Inqiuiry</label>
                  <div className="contactUsFormDropdown">
                    <select
                      id="countryDropdown"
                      className="contactUsFormInput contactUsFormSelect"
                      value={values?.inquiry}
                      name="inquiry"
                      onChange={(e) => {
                        setValues({ ...values, inquiry: e.target.value });
                      }}
                    >
                      <option disabled selected value="">
                        Please Select
                      </option>
                      {inquiries.map((inquiry, index) => (
                        <option key={index} value={inquiry}>
                          {inquiry}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="contactUsSingleForm inputRequired">
                  <label>Company Name</label>
                  <input
                    className="contactUsFormInput"
                    type="text"
                    name="companyName"
                    placeholder="eg. your company name"
                    required
                    value={values?.companyName}
                    onChange={(e) =>
                      setValues({ ...values, companyName: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* form */}
              <div className="contactUsForm">
                <div className="contactUsSingleForm">
                  <label>Industry</label>
                  <div className="contactUsFormDropdown">
                    <select
                      id="countryDropdown"
                      className="contactUsFormInput contactUsFormSelect"
                      value={values?.industry}
                      name="industry"
                      onChange={(e) => {
                        setValues({ ...values, industry: e.target.value });
                      }}
                    >
                      <option disabled selected value="">
                        Please Select
                      </option>
                      {industries.map((industry, index) => (
                        <option key={index} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="contactUsSingleForm inputRequired">
                  <label>Country / Region</label>
                  <div className="contactUsFormDropdown">
                    <select
                      id="countryDropdown"
                      className="contactUsFormInput contactUsFormSelect"
                      required
                      value={values?.country}
                      name="country"
                      onChange={(e) => {
                        setValues({ ...values, country: e.target.value });
                      }}
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
            </div>

            <label>Business Inquiry Message</label>
            <textarea
              className="contactUsTextArea"
              placeholder="Type here"
              name="textArea"
              value={values?.textArea}
              onChange={(e) =>
                setValues({ ...values, textArea: e.target.value })
              }
            ></textarea>

            <div className="contactUsButton">
              <button className="commonButton contactUsButton">Submit</button>
            </div>
          </form>

          {/* popUp */}
          {showPopUp && (
            <div className="contactUsModal" onClick={handleCLick}>
              <div className="contactUsPopUp">
                <img src={successImg} alt="successImg" />
                <h5 className="contactUsPopUpText">
                  Your Submission has been received successfully.
                </h5>
                <h6 className="contactUsPopUpText">
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

export default GetInTouch;
