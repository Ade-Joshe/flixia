import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: 80
	},
	paper: {
		height: 315,
		width: 243,
		padding: 10,
	},
	control: {
		padding: theme.spacing.unit * 2,
	},
	paperImage: {
		height: '100%',
		width: '100%',
		borderRadius: '8',
		marginBottom: '10px',
	},
	paperContent: {
		height: '20%',
		width: '100%',
		display: 'inline-flex',
	},
	paperContent1: {
		width: '100%',
		height: '50%'
	},
	paperContent2: {
		width: '100%',
		height: '50%',
		float: 'left'
	},
	image: {
		height: '100%',
		width: '100%',
		float: 'left'
	}
});



class GuttersGrid extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			spacing: '40',
			celebrities: [],
			filteredCelebs: [],
			// limit: 6
		};
		// this.onLoadMore = this.onLoadMore.bind(this)
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				celebrities: this.props.movie,
				// filtered: this.state.celebrities.splice(0, this.state.limit)
			})
		}, 3000);
	}


	render() {
		const { classes } = this.props;
		const { spacing, celebrities, filteredCelebs } = this.state;
		return (
			<Grid container className={classes.root} spacing={40}>
				<Grid item xs={12}>
					<Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
						{
							celebrities &&
							filteredCelebs.concat(celebrities.splice(0, celebrities.length).map((value, index) => (
								<Grid key={index} item>
									<Paper className={classes.paper}>
										<div className={classes.paperImage}>
											<Link to={{
												pathname: `/celeb/single_celebs/${value._id}`,
												state: {
													celebrities: value.title
												},
											}}>
												<img src={value.picture} className={classes.image} alt="" />
											</Link>
										</div>
									</Paper>
								</Grid>
							)))
						}
					</Grid>
					{/* <div className='myloader'>
						<button className='btn btn-md but' onClick={()=>this.onLoadMore()}> Load More &nbsp;&nbsp; <i className='fa fa-refresh'></i></button>
					</div> */}
				</Grid>
			</Grid>
		);
	}
}

GuttersGrid.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);