import React from 'react';
 
class Search extends React.Component {
  constructor(props) {
    console.log('from search:', props.handleSearchInputChange)
    super(props);

    // this.state = {
    //   value: ''
    // };
  }

  // handleInputChange(e) {
  //   console.log('hi');
  //   this.props.handleSearchInputChange(e.target.value);
  // }

  render() {
    //console.log('from render:', this.props.handleSearchInputChange)
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.props.value}
          onChange={(event) => this.props.handleSearchInputChange(event.target.value)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
