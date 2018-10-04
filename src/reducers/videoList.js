import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
      console.log('action.videos from videoList:', action.videos)
      return action.videos;
    default:
      console.log('state from videoList:', state);
      return state;
  }
};

export default videoListReducer;
