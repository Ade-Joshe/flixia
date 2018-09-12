import React, { Component } from 'react'
import './style.css'
import Modal from "react-responsive-modal";
import { Icon, Input } from 'semantic-ui-react';
import axios from 'axios'
import baseUrl from './api'
import PropTypes from "prop-types";
import ReactLoading from 'react-loading';

const styles = {
	fontFamily: "sans-serif",
	textAlign: "center"
};

class ReviewModal extends Component {
	state = {
		open: false,
		loading: false,
		content:''
	};

	onOpenModal = () => {
		this.setState({ open: true });
		// this.props.toggle();
	};

	onCloseModal = () => {
		this.setState({ open: false });
	};

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = event => {
		this.setState({
			loading: true
		})
		event.preventDefault();
		let { content} = this.state;

		axios.post(`${baseUrl}/reviews/create`, content)
			.then(res => {
				if (res.status === 200) {
					alert(res.data.message);
					this.setState({
						open: false,
						loading: false
					});
					window.location.reload();
				} else {
					alert('Please try again!')
				}
			})
	}

	render() {
		const { open, loading, content } = this.state;
		return (
			<div style={styles} >
				<button onClick={this.onOpenModal} className='btn btn-lg rss' ><i className='fa fa-rss-square'></i></button>
				<Modal open={open} onClose={this.onCloseModal} center>
					<div style={{height: 320}}>
						<div className="modal-content" onClick={this.isOpen}>
							<form onSubmit={this.handleSubmit} >
								<h3 style={{ marginTop: 30}}>What do you think we should do to make this application better </h3>
								<textarea onChange={this.handleChange} style={{ height: '113px', width: '90%' }} placeholder='Enter review here' name='content' value={content}>
								</textarea><br /><br />
									<button className='btn btn-default btn-md'><i className='fa fa-paper-plane'></i> Send </button>
							</form>

						</div>
					</div>
					<p> Reviews are collected annonymously</p>
				</Modal>
			</div>
		);
	}
}

ReviewModal.propTypes = {
	// classes: PropTypes.object.isRequired,
	// submit: PropTypes.func.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	})
};

export default ReviewModal