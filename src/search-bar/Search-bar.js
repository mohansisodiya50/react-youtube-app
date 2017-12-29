import React, { Component } from 'react';
import VideoDetails from '../video-details/Video-details';
import VideoList from '../video-list/Video-list';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      selectedVideo: null,
      autoPlay: false
    };

    this.getVideos = this.getVideos.bind(this);
  }

  componentWillMount() {
    this.getVideos();
  }

  getVideos(e) {
    var inputValue = '';
    if(this._inputElement) {
        inputValue = this._inputElement.value;
        e.preventDefault();
     } else {
        inputValue = "Dog";
    }

    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + inputValue + '&key=AIzaSyC_U2Wqv8eJcSWAq5nWZdW80OfOmlKh27Y';

    fetch(url)
		  .then((response) => response.json())
		  .then((responseJson) => {
		        this.setState({data: responseJson.items, selectedVideo: responseJson.items[0], autoPlay: false });
		  })
  }

  render() {
    return (
      <div>
        <div className="row searchBar">
          <div className="input-group">
            <input ref={(input) => { this._inputElement = input; }} type="text" className="form-control" placeholder="Search for..." />
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={this.getVideos}>Search</button>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <VideoDetails video= { this.state.selectedVideo } autoPlay={ this.state.autoPlay}/>
          </div>
          <div className="col-sm-4">
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo, autoPlay: true}) }
              videoData= { this.state.data }/>
          </div>
        </div>
      </div>
    );
  }
};

export default SearchBar;
