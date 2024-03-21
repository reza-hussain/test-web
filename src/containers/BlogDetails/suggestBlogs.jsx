import { useNavigate } from "react-router-dom";

import leftArrow from "assets/images/blogDetails/leftArrow.svg";
import { useEffect, useState } from "react";
import { getPostByCategories } from "services/wordpress";
import BlogCard from "components/BlogCard";

const SuggestBlogs = ({ categoryId, postId }) => {
  const [relatedPosts, setRelatedPosts] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getRelatedPosts = async () => {
      const response = await getPostByCategories(categoryId);

      const posts = response?.filter((post) => post.id !== postId);

      setRelatedPosts(posts.slice(0, 3));
    };
    categoryId && getRelatedPosts();
  }, [postId]);

  if (!relatedPosts || relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="suggestBlogs commonBackground">
      <div className="container">
        <h2 className="commonHeading">
          You Might <span>Also Like</span>
        </h2>
        <div className="blogsCardContainer">
          {relatedPosts &&
            relatedPosts.map((data, index) => (
              <BlogCard key={data.id} data={data} />
            ))}
        </div>
        <span className="clickMore" onClick={() => navigate("../blogs")}>
          View All Blogs
          <img src={leftArrow} alt="leftArrow" />
        </span>
      </div>
    </section>
  );
};

export default SuggestBlogs;
