import { whitePaperData } from "constant/whitePaperData";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "components/WhitePaper/whitePaper.scss";
import successImg from "assets/images/footer/success.svg";

const WhitePaper = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [values, setValues] = useState({
    fullName: "",
    email: ""
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const form = useRef();

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

  const sendPdfByEmail = (e) => {
    emailjs
      .sendForm(
        "service_92etihi", // Replace with your emailjs service ID
        "template_4ougzij", // Replace with your emailjs template ID
        e.target,
        "0xAHZLJP5D82MtT6K" // Replace with your emailjs user ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailValidation(values?.email)) {
      setShowPopUp(true);
      setEmailValid(true);

      sendPdfByEmail(e);
      const timer = setTimeout(() => {
        setShowPopUp(false);
        setValues({
          fullName: "",
          email: ""
        });
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setEmailValid(false);
    }
  };
  return (
    <section className="whitePaper commonBackground">
      <div className="container">
        <h2 className="commonHeading">
          Understanding{" "}
          <span className="whitePaperGradient">the B2B BNPL Whitepaper</span>
        </h2>
        <div className="whitePaperCards">
          <h3 className="whitePaperCardsTitle">
            Why are businesses choosing seller financing and B2B BNPL?
          </h3>
          <div className="whitePaperCardsSection">
            {whitePaperData.map((data, i) => (
              <div className="linear" key={i}>
                <div className="whitePaperCard">
                  <img className="image" src={data.image} alt="credit" />
                  <img className="gif" src={data.gif} alt="credit" />
                  <p>{data.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="whitePaperFormSection">
          <div className="whitePaperDetails">
            <h3 className="whitePaperCardsTitle">
              One Click Financing and Checkout Financing Is Growing Fast
            </h3>
            <p>
              The global business payment industry is expected to surpass
              1,563.5 billion by the end of 2027. By efficiently bridging
              current gaps and efficiently fulfilling the financing needs of
              businesses.
            </p>
          </div>
          <form ref={form} className="whitePaperFullForm"></form>
          <div className="whitePaperForm">
            <h3 className="whitePaperFormTitle whitePaperCardsTitle">
              Download the Whitepaper
            </h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="">Full name</label>
                <input
                  className={`whitePaperFormInput ${
                    emailValid ? "" : "invalid"
                  }`}
                  type="text"
                  name="name"
                  placeholder="eg. your name"
                  required
                  value={values?.fullName}
                  onChange={(e) =>
                    setValues({ ...values, fullName: e.target.value })
                  }
                  ref={nameRef}
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  ref={emailRef}
                  name="email"
                  placeholder="eg. name@example.com"
                  required
                  value={values?.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  onBlur={(e) => {
                    if (!emailValidation(e.target.value)) setEmailValid(false);
                    else {
                      setEmailValid(true);
                    }
                  }}
                />
                {!emailValid && values?.email?.length > 0 && (
                  <div className="whitePaperFormInputError">
                    Enter a valid email
                  </div>
                )}
              </div>
              <button type="submit" className="commonButton">
                Download Whitepaper
              </button>
            </form>

            {/* popUp */}
            {showPopUp && (
              <div className="whitePaperModal" onClick={handleCLick}>
                <div className="whitePaperPopUp">
                  <img src={successImg} alt="successImg" />
                  <h5 className="whitePaperPopUpText">
                    Email Sent Successfully.
                  </h5>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaper;
