import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
//import handleSearchChange from '../actions/search.js';
//import handleInputChange from '../components/Search.js';
import handleVideoSearch from '../actions/search.js';


//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.


const mapStateToProps = (state) => {
  return {
      video: state.video,
      videos: state.videos
  };
};

const mapDispatchToProps = (dispatch) => {
  
  return {
    handleSearchInputChange: (q) => {
      console.log('test', q);
      dispatch(handleVideoSearch(q.toString()))}
  };
};

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer 
