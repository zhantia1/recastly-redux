import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import Nav from './Nav.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import store from '../store/store.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import { connect } from 'react-redux';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('props:', props);

    // this.state = {
    //   videos: [],
    //   currentVideo: null
    // };
  }

  componentWillMount() {
    //this.props.handleVideoSearch('react tutorials');
  }

  // handleVideoListEntryTitleClick(video) {
  //   this.setState({currentVideo: video});
  // }

  // getYouTubeVideos(query) {
  //   // var options = {
  //   //   key: this.props.API_KEY,
  //   //   query: query
  //   // };
    
  //   // var options = {
  //   //   key: YOUTUBE_API_KEY,
  //   //   query: q
  //   // };

  //   // this.props.searchYouTube(options, (videos) => {

  //   //   dispatch(changeVideoList(videos));
  //   //   dispatch(changeVideo(videos[0]));

  //   // })

  //   // this.props.searchYouTube(options, (videos) =>
  //   //   this.setState({
  //   //     videos: videos,
  //   //     currentVideo: videos[0]
  //   //   })
  //   // );
  // }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
}

