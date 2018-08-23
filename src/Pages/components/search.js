import React, { Component } from 'react';
// const TMDBLogo = 'https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg';

class SearchBox extends Component {
  constructor(props){
    super(props);

  }
  handleChange(event) {
    event.target.select();
  }
  render() {
    return (
      <div className="input-group mb-3 searchText">
        <input type="text" className="form-control" ref="search suggestion" onClick={this.handleChange} placeholder={this.props.placeholder} aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <div className="input-group-append" >
          <span className={"input-group-text fa fa-"+ this.props.icon} id="basic-addon2" style={{marginTop: 0, paddingTop: 9, backgroundColor: 'gold'}}></span>
        </div>
      </div>
    )
  }
}
export default SearchBox;