import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import "components/WhitePaperForm/whitepaperForm.scss";
import closeImg from "assets/images/header/close.svg";

const WhitePaperForm = ({ className, popUpStatus, setPopUpStatus }) => {
  const [emailValid, setEmailValid] = useState(true);
  const [values, setValues] = useState({
    fullName: "",
    email: ""
  });

  const nameRef = useRef();
  const emailRef = useRef();

  // useEffect(() => {
  // document.documentElement.style.overflow =
  //   popUpStatus === "email" ? "hidden" : "auto";

  // if (popUpStatus === "form" || popUpStatus === "popup") {
  // document.body.style.overflow = "hidden";
  // } else {
  // document.body.style.overflow = "auto";
  // }
  // }, [popUpStatus]);

  const emailValidation = (email) => {
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return pattern.test(email);
  };

  const handleClose = () => {
    setPopUpStatus("popup");
    if (popUpStatus === "form" || popUpStatus === "popup") {
      document.body.style.overflow = "auto";
    }
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
      setPopUpStatus("email");
      setEmailValid(true);

      sendPdfByEmail(e);
      const timer = setTimeout(() => {
        setPopUpStatus(null);
        setValues({
          fullName: "",
          email: ""
        });
      }, 2000);
      // document.body.style.overflow = "auto";
      return () => clearTimeout(timer);
    } else {
      setEmailValid(false);
    }
  };

  return (
    <div className={`downloadForm ${className}`}>
      <div className="downloadFormHead">
        <h3 className="downloadFormTitle downloadFormCardsTitle">
          Why are businesses choosing B2B BNPL
        </h3>
        <img src={closeImg} alt="image" onClick={handleClose} />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">
            Full name <span>*</span>
          </label>
          <input
            className={`downloadFormInput ${emailValid ? "" : "invalid"}`}
            type="text"
            name="name"
            placeholder="eg. your name"
            required
            value={values?.fullName}
            onChange={(e) => setValues({ ...values, fullName: e.target.value })}
            ref={nameRef}
          />
        </div>
        <div>
          <label htmlFor="">
            Email<span>*</span>
          </label>
          <input
            type="email"
            ref={emailRef}
            name="email"
            placeholder="eg. name@example.com"
            required
            value={values?.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            onBlur={(e) => {
              if (!emailValidation(e.target.value)) setEmailValid(false);
              else {
                setEmailValid(true);
              }
            }}
          />
          {!emailValid && values?.email?.length > 0 && (
            <div className="downloadFormInputError">Enter a valid email</div>
          )}
        </div>
        <button type="submit" className="commonButton">
          Download Whitepaper
        </button>
      </form>
    </div>
  );
};

export default WhitePaperForm;
