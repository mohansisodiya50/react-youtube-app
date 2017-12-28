import React from 'react';
import VideoListItem from '../video-list-item/Video-list-item';

const VideoList = (props) => {
  if(!props.videoData) return <div>Loading...</div>;
  
 const videoItems = props.videoData.map((video) => {
    return (
    <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video} />
    );
  });
  return (
    <ul className="list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
