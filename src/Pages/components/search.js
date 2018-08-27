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



// import React, { Component } from 'react'
// import axios from 'axios'
// import Suggestions from './suggestion'

// const { API_KEY } = process.env
// const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

// class Search extends Component {
//   state = {
//     query: '',
//     results: []
//   }

//   getInfo = () => {
//     axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
//       .then(({ data }) => {
//         this.setState({
//           results: data.data
//         })
//       })
//   }

//   handleInputChange = () => {
//     this.setState({
//       query: this.search.value
//     }, () => {
//       if (this.state.query && this.state.query.length > 1) {
//         if (this.state.query.length % 2 === 0) {
//           this.getInfo()
//         }
//       } else if (!this.state.query) {
//       }
//     })
//   }

//   render() {
//     return (
//       <form>
//         <input
//           placeholder="Search for..."
//           ref={input => this.search = input}
//           onChange={this.handleInputChange}
//         />
//         <Suggestions results={this.state.results} />
//       </form>
//     )
//   }
// }

// export default Search
