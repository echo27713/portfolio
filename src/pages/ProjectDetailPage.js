import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../ProjectDetailPage.css";

// Custom image renderer for markdown content
const MarkdownImage = ({ src, alt }) => {
  let fullSrc = src;
  console.log("I am in MarkdownImage function now.");
  console.log(`src= ${src}, alt=${alt}`);
  // If the source is relative, explicitly point to the projects folder.
  if (!/^https?:\/\//.test(src) && !src.startsWith("data:")) {
    // If src doesn't already start wiht '/projects/" prepend it."
    if (!src.startsWith("/projects/")) {
      fullSrc =
        process.env.PUBLIC_URL +
        "/projects/" +
        (src.startsWith("/") ? src.substring(1) : src);
    } else {
      fullSrc = process.env.PUBLIC_URL + src;
    }
  }
  return <img src={fullSrc} alt={alt} className="markdown-image" />;
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [media, setMedia] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // Fetch markdown file
        const detailsResponse = await fetch(
          `${process.env.PUBLIC_URL}/projects/${id}.txt`
        );
        console.log("I am in fetchDetails in ProjectDetailPage.js");
        console.log(`detailsResponse=${detailsResponse}`);
        console.log("detailsResponse = ", detailsResponse);
        if (!detailsResponse.ok) throw new Error("Markdown file not found");
        const details = await detailsResponse.text();
        setContent(details);

        // Fetch associated media files
        const mediaFiles = [];
        for (let i = 1; i <= 20; i++) {
          const extensions = ["png", "gif", "mp4"];
          for (const ext of extensions) {
            const filePath = `${process.env.PUBLIC_URL}/projects/${id}-${i}.${ext}`;
            try {
              const response = await fetch(filePath);
              if (response.ok) {
                mediaFiles.push({ type: ext, path: filePath });
              }
            } catch {
              // Ignore missing files
            }
          }
        }
        setMedia(mediaFiles);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDetails();
  }, [id]);

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="project-detail">
      {/* Back to List Link */}
      <Link to="/" className="back-to-list">
        &#8592; Back to List
      </Link>

      {/* Markdown content with custom image renderer */}
      <ReactMarkdown components={{ img: MarkdownImage }}>
        {content}
      </ReactMarkdown>

      {/* Media Section */}
      <div className="project-media">
        {media.map((item, index) => {
          if (item.type === "png" || item.type === "gif") {
            return (
              <img
                key={index}
                src={item.path}
                alt={`Project media ${index + 1}`}
                className="media-image"
              />
            );
          } else if (item.type === "mp4") {
            return (
              <video key={index} controls className="media-video">
                <source src={item.path} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            );
          }
          return null;
        })}
      </div>

      {/* Back to List Link */}
      <Link
        to="/"
        className="back-to-list"
        onClick={() => window.scrollTo(0, 0)}
      >
        &#8592; Back to List
      </Link>
    </div>
  );
};

export default ProjectDetailPage;
