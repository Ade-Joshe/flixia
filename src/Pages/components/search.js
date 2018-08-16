import React, { Component } from 'react';
// const TMDBLogo = 'https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg';

class SearchBox extends Component {

  handleChange(event) {
    event.target.select();
  }
  render() {
    return (
      <div className="input-group mb-3" style={{width:  '40%', float: 'right', paddingRight: '7px'}}>
        <input type="text" className="form-control" ref="search suggestion" onClick={this.handleChange} placeholder="Search Movie Title.." aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <div className="input-group-append">
          <span className="input-group-text fa fa-search" id="basic-addon2" style={{marginTop: 0, paddingTop: 9}}></span>
        </div>
      </div>
    )
  }
}
export default SearchBox;