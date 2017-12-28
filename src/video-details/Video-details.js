import React from 'react';

const VideoDetail = (props) => {
  if (!props.video) {
  	return <div>Loading...</div>;
  }

	const videoId = props.video.id.videoId;

	let autoPlay = '';

	if(props.autoPlay) {
		autoPlay = '?autoplay=1';
	}

	let url = `https://www.youtube.com/embed/${videoId}${autoPlay}`;

  return (
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} ></iframe>
      </div>
      <div className="details">
        <h4>{props.video.snippet.title}</h4>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
