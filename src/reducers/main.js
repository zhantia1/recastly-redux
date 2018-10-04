import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

// var rootReducer = (state, action) => {
//   return combineReducers({
//      videoList,
//      currentVideo
//   })
// };

// rootReducer sets the key values in store to the return result from
// the two small reducers you passed in (they are diff name due to import)
var rootReducer = combineReducers({videoList, currentVideo});


//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
