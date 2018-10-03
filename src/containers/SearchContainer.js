import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';
var SearchContainer = (q) => {

};

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
        fetchData: (q) => dispatch(handleVideoSearch(q))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
