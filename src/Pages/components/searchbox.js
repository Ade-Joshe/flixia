import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
			})
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
			<div style={{ margin: 'auto', width: '60%' }}>
				<form onSubmit={(e) => e.preventDefault()} className='searchForm'>
					<h1 className='searchLabel' > The world's most popular and authoritative <br />
						source for Movie, TV and Celebrity content </h1>

					<div className="input-group mb-3" style={{ margin: 'auto', width: '70%', height: 40 }}>
						<input value={searchQuery} onChange={this.handleChange} ref='search suggestion' style={{height: 'auto'}}className="searchie form-control" type="search" placeholder="Search Movie here" />
						<div className="input-group-append" >
							<span className="input-group-text fa fa-search" id="basic-addon2" style={{ paddingTop: 12, backgroundColor: '#ffb01e', width: '3pc' }}></span>
						</div>
						{this.renderSearch()}
					</div>

					{
						loading &&
						<div className='resultsearch'>
							<ReactLoading type='bars' color='#ffb01e' height='40%' width='30%' />
						</div>
					}
					{/* </div> */}
				</form>
			</div >
		);
	}
}

export default withRouter(Search);


// export default Search
