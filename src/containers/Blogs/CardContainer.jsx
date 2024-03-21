import { useEffect, useState } from "react";

import BlogCard from "components/BlogCard/index";

import BlogsView from "assets/images/aboutUs/teamView.svg";
import {
  getCategories,
  getPostByCategories,
  getPosts
} from "services/wordpress";

const CardContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await getPosts(postsPerPage ?? 6);
        setBlogs(response);
      } catch (err) {
        console.log(err);
      }
    };

    const getBlogsByCategory = async () => {
      try {
        const response = await getPostByCategories(
          selectedCategory.id,
          postsPerPage
        );
        setBlogs(response);
      } catch (err) {
        console.log(err);
      }
    };

    selectedCategory?.name ? getBlogsByCategory() : getBlogs();
  }, [postsPerPage, selectedCategory]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();

        setCategories(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <section className="blogsCard">
      <div className="container">
        <div className="blogsCardFilters">
          <button
            className={`filterItem ${
              !selectedCategory.id ? "filterItemSelected" : ""
            }`}
            onClick={() => setSelectedCategory("")}
          >
            All Insights
          </button>

          {categories.map((category) => (
            <>
              <button
                className={`filterItem ${
                  selectedCategory === category ? "filterItemSelected" : ""
                }`}
                key={category.id}
                onClick={() => setSelectedCategory(category)}
              >
                {category.name}
              </button>
            </>
          ))}
        </div>
        <div className="blogsCardContainer">
          {blogs.map((data, index) => (
            <BlogCard key={index} data={data} />
          ))}
        </div>
        <div className="blogsCardContainer">
          {blogs.length <= 3 ? null : (
            <div
              onClick={() => setPostsPerPage(postsPerPage + 9)}
              className="blogsCardViewMore"
            >
              <span>View More</span>
              <img src={BlogsView} alt="BlogsView" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
