import React, { Component } from 'react';
import './searchbox.css';
import { withRouter } from 'react-router-dom';
// import spinner from '../images/spinner.gif';
import ReactLoading from 'react-loading';



class Search extends Component {
	constructor() {
		super();

		this.state = {
			searchResults: [],
			searchQuery: '',
			loading: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.renderSearch = this.renderSearch.bind(this);
		this.handleRender = this.handleRender.bind(this);
	}


	handleChange = (e) => {
		const searchQuery = e.target.value;

		this.setState({
			searchQuery,
			loading: true
		});

		if (!searchQuery) {
			this.setState({
				loading: false
			})
			return '';
		}

		fetch(`https://flixia.herokuapp.com/trailers/search/title/${searchQuery}`)
			.then(res => res.json())
			.then(data => {
				this.setState({
					searchResults: data,
					loading: false
				})
				// console.log(data[0].title)
			})
		// .catch(err => {
		// 	console.log(err)
		// })
	}

	handleRender(title) {
		this.setState({
			searchQuery: '',
			searchResults: []
		})

		this.props.history.push(`/movies/singlemovie/${title}`);
	}

	renderSearch() {
		const { searchResults, searchQuery, loading } = this.state;

		if (!searchQuery) {
			return '';
		}

		if (searchResults.length > 0) {
			return (
				<div className='Search-result-container'>
					{searchResults.map((result) => {
						return (
							<div key={result._id} className='Search-result' onClick={() => { this.handleRender(result._id) }}>
								{result.title}
							</div>
						)
					})}
				</div>
			);
		}

		if (!loading) {
			return (
				<div className='Search-result-container'>
					<div className='Search-no-result'>
						No results found.
                    </div>
				</div>
			);
		}
	}





	render() {
		let { loading, searchQuery } = this.state;
		return (
			<div style={{margin: 'auto', width: '60%'}}>
				<form onSubmit={(e) => e.preventDefault()} className='searchForm'>
					<h1 className='searchLabel' > The world's most popular and authoritative <br />
						source for Movie, TV and Celebrity content </h1>
					<div style={{margin: 'auto', width: '65%'}}>
						<input value={searchQuery} onChange={this.handleChange} className="searchie" type="search" placeholder="Search Movie here" />
						<i className='fa fa-search licon'></i>
						{this.renderSearch()}


						{loading &&
							<div className='resultsearch'>
								{/* <img alt="spinner" src={spinner} /> */}
								<ReactLoading type='bars' color='gold' height='40%' width='30%' />
							</div>
						}
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(Search);


// export default Search
