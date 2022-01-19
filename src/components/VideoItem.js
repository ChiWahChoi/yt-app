import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div
          className="header"
          dangerouslySetInnerHTML={{ __html: video.snippet.title }}
        />
      </div>
    </div>
  );
};

export default VideoItem;

// Using "dangerouslySetInnerHTML" to convert HTML entities & special characters
// Makes your site vulnerable to a potential cross-site scripting (XSS) attack

// TL;DR: Try not to use "dangerouslySetInnerHTML".
