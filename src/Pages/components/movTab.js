import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import ReactLoading from 'react-loading'

function TabContainer({ children, dir }) {
	return (
		<Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
			{children}
		</Typography>
	);
}


TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
	dir: PropTypes.string.isRequired,
};

const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper
	}
});

class MovieTab extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0,
			label: [],
			trailers: [],
			loading: true,
		};
	}

	componentWillMount() {
		this.setState({
			loading: true
		})
		axios.get('https://flixia.herokuapp.com/movieCategories')
			.then(res => {
				this.setState({
					label: res.data
				})
				axios.get(`https://flixia.herokuapp.com/movieCategories/search?name=${this.state.label[0].name}`)
					.then(res => {
						this.setState({
							trailers: res.data,
							loading: false
						})
					})
			})
		console.log(this.state.trailers)
	}

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};


	getCategoryName = name => {
		this.setState({ trailers: [], loading: true })
		axios.get(`https://flixia.herokuapp.com/movieCategories/search?name=${name}`)
			.then(res => {
				this.setState({
					trailers: res.data,
					loading: false
				})
			})
	}


	render() {
		const { classes } = this.props;
		let { label, value, trailers, loading } = this.state;
		return (
			<div>
				<div className={'movroot ' + classes.root}>
					<AppBar position="static" color="default">
						<Tabs
							value={value}
							onChange={this.handleChange}
							indicatorColor="primary"
							textColor="primary"
							scrollable
							scrollButtons='auto'
							fullWidth
						>
							{
								label &&
								label.map(name => {
									return (
										<Tab key={name._id} label={name.name} onClick={() => this.getCategoryName(name.name)} />
									)
								})
							}
						</Tabs>
						<div>
							<span>
								<span className="action"></span>
							</span>
						</div>
					</AppBar>
					{
						loading &&
						<div className='bigscreen'>
							<ReactLoading type='bars' color='#ffb01e' width='30%' height='40%' />
						</div>
					}


				</div>
				<div className='movhide'>


					<div className='trend' >
						<span></span>

						{
							trailers &&
							trailers.map((item) => {
								return (
									<div key={item._id}>
										<NavLink to={`/movies/singlemovie/${item._id}`}><img src={item.trailerCover} alt='' key={item._id} style={{ width: '100%' }} /></NavLink>
									</div>
								)
							})
						}

					</div>
				</div>
			</div>
		);
	}
}


MovieTab.PropTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MovieTab);