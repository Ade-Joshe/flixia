import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './cardSet.css';
// import josh from '../images/josh.JPG ';
import image from '../images/avatar.jpg'
import {NavLink} from 'reactstrap'


const styles = theme => ({
  root: {
    flexGrow: 1,
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
    height: '85%',
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
	state = {
		spacing: '40',
		// limit: 6
	};

	
	// onLoadMore= () => {
	// 	this.setState({
	// 		limit: this.state.limit+6
	// 	})
	// }

	// renderTodos = () => {
		// return movies.slice(0, this.state.limit).map((item))
	// }

	handleChange = key => (event, value) => {
		this.setState({
			[key]: value,
		});
	};

	render() {
		const { classes } = this.props;
		const { spacing } = this.state;
		const movies = [
			{
				movie_title: 'Dumebi the dirty girl',
				rating: 5,
				comments: 40
			},
			{
				movie_title: 'Aki and pawpaw',
				rating: 78,
				comments: 40
			},   {
				movie_title: 'Wedding Party',
				rating: 4,
				comments: 40
			},   {
				movie_title: 'Wedding Party2',
				rating: 0,
				comments: 40
			},   {
				movie_title: 'Alpha woolf of anambra',
				rating: 55,
				comments: 40
			},   {
				movie_title: 'Ikenga thieves',
				rating: 35,
				comments: 40
			},  {
				movie_title: 'Affiamuta in Nigeria',
				rating: 50,
				comments: 40
			},
			{
				movie_title: 'Ndi ibo, ogeneTv na biago',
				rating: 98,
				comments: 40
			},   
			{
				movie_title: "Aka n'so by Dabs",
				rating: 59,
				comments: 40
			},   
			{
				movie_title: 'SweetSuzie is bae',
				rating: 67,
				comments: 40
			},
			];
	
    return (
		<Grid container className={classes.root} spacing={40}>
			<Grid item xs={12}>
				<Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
					{movies.map(value => (
						<Grid key={value} item>
							<Paper className={classes.paper}>
								<div className={classes.paperImage}>
									<a href={this.props.paperLink}>
										<img src={image} className={classes.image} alt="" />
									</a>
								</div>
								<div>
									<span style={{fontWeight: 'bolder'}}>{value.movie_title}</span> <br />
									<span>
										<h3 className="fa fa-star icon"></h3> 
										<span className="" style={{fontSize: '1rem', fontWeight: 'bolder'}}>{value.rating}</span>&nbsp;&nbsp;&nbsp;&nbsp;
										<b className="fa fa-comments icon"></b> <span  style={{fontSize: '1rem', fontWeight: 'bolder'}}>{value.comments}</span> 
									</span>
								</div>
							</Paper>
						</Grid>
					))}
				</Grid>
					<div className='myloader'>
						<button className='btn btn-md but'>Load More &nbsp;&nbsp; <i className='fa fa-refresh'></i></button>
					</div>
			</Grid>
		</Grid>
	);
}
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);