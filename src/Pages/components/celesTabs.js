import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import GuttersGrid from './celebcards'
import ReactLoading from 'react-loading';
import './moviestab.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

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
		backgroundColor: theme.palette.background.paper,
	}
});

class CelebTab extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0,
			label: [],
			celebrities: [],
			loading: false
		};
	}

	componentWillMount() {
		this.setState({
			loading: true
		})
		axios.get('https://flixia.herokuapp.com/roles')
			.then(res => {
				// console.log(res)
				this.setState({
					label: res.data
				})
				axios.get(`https://flixia.herokuapp.com/celebrities/search?roles=${this.state.label[0]._id}`)
					.then(res => {
						console.log(this.state.label[0]._id);
						// console.log(res)
						this.setState({
							celebrities: res.data,
							loading: false
							
						})
					})

			})
	}

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};

	getCelebrityName = _id => {
		this.setState({
			loading: true
		})
		console.log(_id);
		this.setState({ celebrities: [] })
		axios.get(`https://flixia.herokuapp.com/celebrities/search?roles=${_id}`)
			.then(res => {
				this.setState({
					celebrities: res.data,
					loading: false
				})
			})
		// debugger;
		console.log(this.state.celebrities)
	}

	render() {
		const { classes, theme } = this.props;
		let { label, celebrities, value, loading } = this.state;
		// const label = ['View All', 'Actors', 'Producers'];
		return (
			<div>
				<div className={'movroot ' + classes.root}>
					<AppBar position="static" color="default">
						<Tabs
							value={this.state.value}
							onChange={this.handleChange}
							indicatorColor="primary"
							textColor="primary"
							fullWidth
						>
							{label.map(TabLabel =>
								<Tab label={TabLabel.rolename} key={TabLabel._id} onClick={() => this.getCelebrityName(TabLabel._id)} />
							)}
						</Tabs>
						<div style={{ height: '50px', paddingTop: '9px', paddingLeft: '15px', }}>
							<p>
								{/* <span className="action"></span> */}
							</p>
						</div>
					</AppBar>
				</div>
				<div className='movhide'>

					{
						loading &&
						<div className='load'>
							<ReactLoading type='bars' color='gold' width='30%' height='90px' />
						</div>
					}

					<div className='trend'>
						<span></span>

						{
							celebrities &&
							celebrities.slice(0, 10).map((item) => {
								return (
									<div key={item._id}>
										<NavLink to={`/celebs/single_celebs/${item._id}`}><img src={item.picture} alt='' key={item._id} style={{ width: '100%' }} /></NavLink>
										{/* <div className='moredeet'>{item.title}</div> */}
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


CelebTab.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CelebTab);