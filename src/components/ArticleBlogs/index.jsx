import React, { useState } from "react";
import { Link } from "react-router-dom";

import { articleBlog, filters } from "constant/articleBlog";
import dropdown from "assets/images/founder/dropdown.svg";

import "components/ArticleBlogs/articleBlogs.scss";

const ArticleBlogs = () => {
  const [activeFilter, setActiveFilter] = useState("All Articles");
  const [showAllBlogs, setShowAllBlogs] = useState(false);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleViewMoreClick = () => {
    setShowAllBlogs(!showAllBlogs);
  };

  const filteredArticles =
    activeFilter !== "All Articles"
      ? articleBlog.filter((blog) => blog.title === activeFilter)
      : articleBlog;

  const shouldShowViewMore =
    window.innerWidth <= 600
      ? filteredArticles.length > 3
      : filteredArticles.length > 9;

  return (
    <section className="article">
      <div className="container">
        <div className="articleFilter">
          {filters.map((filter, index) => (
            <span
              key={index}
              className={activeFilter === filter.value ? "activeFilter" : ""}
              onClick={() => handleFilterClick(filter.value)}
            >
              {filter.label}
            </span>
          ))}
        </div>
        <div className="articleBlogs">
          {filteredArticles
            .slice(
              0,
              showAllBlogs
                ? filteredArticles.length
                : window.innerWidth > 600
                ? 9
                : 3
            )
            .map((data, index) => (
              <Link to={data?.linkTo} key={index} target="_blank">
                <div className={`articleSingleBlog ${data?.className}`}>
                  <div>
                    <div className="articleDate">
                      <span>{data?.read}</span>
                      <span className="articleDateLine">|</span>
                      <span>{data?.date}</span>
                    </div>

                    <h3>{data?.header}</h3>

                    <p>{data?.para}</p>
                  </div>

                  <img src={data?.brand} alt="image" className="imageHeight" />
                </div>
              </Link>
            ))}
        </div>

        {shouldShowViewMore && (
          <div className="articleViewMore" onClick={handleViewMoreClick}>
            <span>{showAllBlogs ? "View Less" : "View More"}</span>
            <img src={dropdown} alt="dropdown" />
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleBlogs;
