import React from 'react';
 
class Search extends React.Component {
  constructor(props) {
    console.log('from search:', props.handleSearchInputChange)
    super(props);

    // this.state = {
    //   value: ''
    // };
  }

  handleInputChange(e) {
    console.log('hi');
    this.props.handleSearchInputChange(e.target.value);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.props.value}
          onChange={this.props.handleSearchInputChange}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
