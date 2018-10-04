import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';


//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.


const mapStateToProps = (state) => {
  
  //console.log(state)  
  return {
      video: state.currentVideo
      // videos: state.videoList
  };
};

const mapDispatchToProps = (dispatch) => {
  
  return {
    // handleVideoListEntryTitleClick: (videos) => dispatch(changeVideo(videos))
  };
};

var VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);

export default VideoPlayerContainer;
