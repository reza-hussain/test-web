import { Link, NavLink } from "react-router-dom";

import FadeUp from "components/FadeUp";

import { linkedIn } from "constant/footer";

import logo from "assets/images/footer/companyLogo.svg";

import "components/Footer/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* parentContainer */}
        <div className="footerContainer">
          {/* footerIcon */}
          <div className="footerLogo">
            <FadeUp>
              <Link to={"/"}>
                <img src={logo} alt="companyLogo" />
              </Link>
            </FadeUp>

            <FadeUp>
              <p>
                Corporate office:
                <br />
                201 Joo Chiat Road,
                <br /> #04-01, Singapore 427472
              </p>
            </FadeUp>

            {/* socialMediaIcon */}
            <FadeUp>
              <div className="footerSocialIcon">
                <Link
                  to={"https://www.linkedin.com/company/credilinq-ai/"}
                  target={"_blank"}
                  className="footerSocialIconSize footerSocialIconLogo"
                >
                  {linkedIn()}
                </Link>

                {/* TODO<Link
                  to={"https://www.youtube.com/@credilinqai3023"}
                  target={"_blank"}
                  className="footerSocialIconSize footerSocialIconLogo"
                >
                  {youTube()}
                </Link>

                <Link
                  to={"https://www.instagram.com/credilinq.ai/"}
                  target={"_blank"}
                  className="footerSocialIconSize footerSocialIconLogo"
                >
                  {instaGram()}
                </Link>  */}
              </div>
            </FadeUp>
          </div>

          {/* footerCompany */}
          <FadeUp>
            <div className="footerLinks">
              <ul>Company</ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about-us"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/investor"}>Investors</NavLink>
              </li>
              <li>
                <NavLink
                  to="mailto:contact@credilinq.ai"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink to={"/support"}>Support</NavLink>
              </li>
            </div>
          </FadeUp>

          {/* footerProduct */}
          <FadeUp>
            <div className="footerLinks">
              <ul>Solutions</ul>
              <li>
                <NavLink to={"/pay-later"}>B2B PayLater</NavLink>
              </li>
              <li>
                <NavLink to={"/pay-finance"}>B2B PayNow</NavLink>
              </li>
              <li>
                <NavLink to={"/seller-financing"}>
                  E-Commerce Sellers Financing
                </NavLink>
              </li>

              {/* TODO <li>
                <NavLink to={"/sme-health-check"}>SME HealthCheck</NavLink>
              </li> */}

              <li>
                <NavLink to={"/pay-later-direct"}>PayLater Direct</NavLink>
              </li>

              {/* TODO <li>
                <NavLink to={"/recurring-revenue-financing"}>
                  Recurring Revenue Financing
                </NavLink>
              </li> */}
            </div>
          </FadeUp>

          {/* footerInsights */}
          {/* TODO <FadeUp>
            <div className="footerLinks footerLinksInsights">
              <ul>Resources</ul>
              <li>
                <NavLink to={"/blogs"}>Blogs</NavLink>
              </li>
              TODO <li>
                <a>Understanding B2B BNPL - WhitePaper</a>
              </li>
            </div>
          </FadeUp> */}
        </div>

        {/* footerPolicy */}
        <FadeUp>
          <div className="footerPolicy">
            <h4>© 2024 CrediLinq AI. All rights reserved.</h4>
            <NavLink to={"/privacy-policy"}>
              <h5>Privacy Policy</h5>
            </NavLink>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
};

export default Footer;
