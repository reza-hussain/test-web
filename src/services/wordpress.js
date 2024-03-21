import axios from "axios";

const BASE_URL =
  "https://public-api.wordpress.com/wp/v2/sites/credilinq.wordpress.com";

const replaceNbsp = (title) => {
  let temp = title;
  if (temp?.includes("&nbsp;")) {
    temp = temp?.replace("&nbsp;", " ");
  }
  if (temp?.includes("&amp;")) {
    temp = temp?.replace("&amp;", "");
  }

  return temp;
};

export const getPosts = async (perPage) => {
  const response = await axios.get(
    BASE_URL + `${perPage ? `/posts/?per_page=${perPage}` : "/posts"}`
  );

  // Replace &nbsp; in titles
  const posts = response?.data?.map((post) => {
    const title = replaceNbsp(post?.title?.rendered);
    return {
      ...post,
      title: {
        rendered: title
      }
    };
  });

  return posts;
};

export const getPostByID = async (id) => {
  const response = await axios?.get(BASE_URL + `/posts/${id}?_embed`);

  response.data.title.rendered = replaceNbsp(response?.data?.title?.rendered);

  return response;
};

export const getPostByCategories = async (categoryId, perPage = 6) => {
  const response = await axios.get(
    BASE_URL + `/posts/?categories=${categoryId}&per_page=${perPage}`
  );

  const posts = response?.data?.map((post) => {
    const title = replaceNbsp(post?.title?.rendered);
    return {
      ...post,
      title: {
        rendered: title
      }
    };
  });

  return posts;
};

export const getImages = async () => {
  const images = await axios.get(BASE_URL + "/media");

  return images;
};

export const getAuthor = async (id) => {
  const user = await axios.get(BASE_URL + "/users/" + id);

  return user;
};

export const getCategories = async (perPage = 100) => {
  const categories = await axios.get(
    BASE_URL + `/categories?per_page=${perPage}`
  );
  return categories;
};

export const getCategoriesByID = async (id) => {
  const response = await axios.get(BASE_URL + "/categories/" + id);

  // Replace &nbsp; in category title
  response.data.name = replaceNbsp(response?.data?.name);

  return response;
};
