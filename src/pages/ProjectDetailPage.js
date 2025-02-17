import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../ProjectDetailPage.css";

// Custom image renderer for markdown content
const MarkdownImage = ({ src, alt }) => {
  // Prepend PUBLIC_URL if the src is relative
  const fullSrc = src.startsWith("/") ? process.env.PUBLIC_URL + src : src;
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
          `${process.env.PUBLIC_URL}/projects/${id}.md`
        );
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
      <ReactMarkdown>{content}</ReactMarkdown>
      <div className="project-media">
        {media.map((item, index) => {
          if (item.type === "png" || item.type === "gif") {
            return (
              <img
                key={index}
                src={item.path}
                alt={`Project media ${index + 1}`}
              />
            );
          } else if (item.type === "mp4") {
            return (
              <video key={index} controls>
                <source src={item.path} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
