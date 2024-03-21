import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReactGA from "react-ga";

import SuggestBlogs from "containers/BlogDetails/suggestBlogs";

import CredilinqBusiness from "components/credilinqBusiness";
import WordpressRenderer from "components/WordpressRenderer";

import { getPostByID } from "services/wordpress";

import "containers/BlogDetails/blogDetails.scss";

const BlogDetails = () => {
  const TRACKING_ID = "UA-198986171-1";

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const [blog, setBlog] = useState();

  const { id } = useParams();
  useEffect(() => {
    id &&
      (async (id) => {
        const response = await getPostByID(Number(id));
        setBlog(response.data);
      })(id);
  }, [id]);

  return (
    <div className="blogDetails">
      {blog && (
        <>
          <WordpressRenderer
            post={blog?.content?.rendered}
            title={blog?.title?.rendered}
            author={blog?._embedded?.author?.[0]}
          />
          <SuggestBlogs postId={blog.id} categoryId={blog.categories[0]} />
        </>
      )}
      <CredilinqBusiness />
    </div>
  );
};

export default BlogDetails;
