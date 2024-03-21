import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

import leftArrow from "assets/images/blogDetails/leftArrow.svg";
import { instaGram, linkedIn, twitter } from "constant/footer";
import topArrow from "assets/images/blogDetails/topArrow.svg";

import "styles/wordpress.scss";
import { useNavigate } from "react-router-dom";

const WordpressRenderer = ({ post, title, author }) => {
  const navigate = useNavigate();
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="wordpress blog">
      <span className="blogBackBtn" onClick={() => navigate("../blogs")}>
        <img src={leftArrow} alt="leftArrow" /> Back
      </span>
      <h1 className="wordpressTitle">{title}</h1>
      {author && (
        <div className="author">
          <img alt={author.name} src={author.avatar_urls[96]} />
          <p className="authorName">
            Published by <br />
            <em>{author.name}</em>
          </p>
        </div>
      )}

      {post && parse(post)}
      <div className="blogShare">
        <p>Share</p>
        <div className="blogShareIcons">
          <Link
            to={"https://www.linkedin.com/"}
            target={"_blank"}
            className="footerSocialIconSize footerSocialIconLogo"
          >
            {linkedIn()}
          </Link>
          <Link
            to={"https://twitter.com/i/flow/login"}
            target={"_blank"}
            className="footerSocialIconSize footerSocialIconLogo"
          >
            {twitter()}
          </Link>
          <Link
            to={"https://twitter.com/i/flow/login"}
            target={"_blank"}
            className="footerSocialIconSize footerSocialIconLogo"
          >
            {instaGram()}
          </Link>
        </div>
      </div>
      {showScrollToTop && (
        <div className="blogScrollTop">
          <img
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            src={topArrow}
            alt="topArrow"
          />
        </div>
      )}
    </div>
  );
};

export default WordpressRenderer;
