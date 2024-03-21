import { articleBlog } from "constant/articleBlog";
import React from "react";

const ArticleBlog = ({ showAllBlogs }) => {
  return (
    <>
      {articleBlog
        .slice(
          0,
          showAllBlogs || window.innerWidth > 600 ? articleBlog.length : 3
        )
        .map((data, index) => (
          <div className="articleSingleBlog" key={index}>
            <div>
              <div className="articleDate">
                <span>{data?.read}</span>
                <span className="articleDateLine">|</span>
                <span>{data?.date}</span>
              </div>

              <h3>{data?.header}</h3>

              <p>{data?.para}</p>
            </div>

            <img src={data?.brand} alt="image" />
          </div>
        ))}
    </>
  );
};

export default ArticleBlog;
