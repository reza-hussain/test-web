export const extractSrcFromHTML = (htmlString) => {
  const srcRegex = /src="([^"]+)"/;
  const match = htmlString.match(srcRegex);

  if (match && match[1]) {
    return match[1];
  } else {
    return null; // If the src attribute is not found
  }
};
