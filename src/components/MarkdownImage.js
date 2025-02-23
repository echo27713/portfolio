//something is not working in this js. no images are shown as a result.
const MarkdownImage = ({ node, alt, src }) => {
  // Prepend /projects to the path if it's not already present.
  let fullSrc = src.startsWith("/projects") ? src : `/projects${src}`;
  // Default to a large image style.
  let imgClass = "img-large";
  let cleanSrc = fullSrc;

  // Check if the URL includes a size query parameter.
  if (fullSrc.includes("?size=small")) {
    imgClass = "img-small";
    cleanSrc = fullSrc.replace("?size=small", "");
  } else if (fullSrc.includes("?size=large")) {
    imgClass = "img-large";
    cleanSrc = fullSrc.replace("?size=large", "");
  }

  // Log the original and cleaned image path for debugging
  console.log("Original src:", src, "Cleaned src:", cleanSrc);

  return (
    <figure className="image-figure">
      <img src={cleanSrc} alt={alt} className={imgClass} />
      <figcaption className="img-caption">{alt}</figcaption>
    </figure>
  );
};

export default MarkdownImage;
