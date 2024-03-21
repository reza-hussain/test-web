import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { getCategoriesByID } from "services/wordpress";
import { extractSrcFromHTML } from "utils/index";

import "components/BlogCard/cards.scss";

const BlogCard = ({ data }) => {
  const [img, setImg] = useState();
  const [category, setCategory] = useState();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const container = document.createElement("div");
    container.innerHTML = data.content.rendered;

    const firstImgTag = container.querySelector("img");

    if (firstImgTag) {
      setImg(firstImgTag.outerHTML);
    }
  }, [pathname, data]);

  useEffect(() => {
    (async () => {
      const response = await getCategoriesByID(data.categories[0]);
      setCategory(response.data);
    })();
  }, [data]);

  return (
    <div
      className="blogsCardSection"
      onClick={() => navigate(`/blogs/${data.id}`)}
    >
      <div className="blogsCardImage">
        {img && <img src={extractSrcFromHTML(img)} alt="BlogsCardImage" />}
      </div>
      <div className="blogsCardContents">
        {category && <span className="blogsCardCategory">{category.name}</span>}
        <p className="blogsCardTitle">{data.title.rendered}</p>
      </div>
    </div>
  );
};

export default BlogCard;
