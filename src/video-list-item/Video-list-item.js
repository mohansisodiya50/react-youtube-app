import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.medium.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item video">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
          <div className="media-heading">{video.snippet.title}</div>
      </div>
    </li>
  );
}

export default VideoListItem;
