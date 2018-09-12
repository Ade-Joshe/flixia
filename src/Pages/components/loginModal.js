import React, { Component } from 'react'
import './style.css'
import Modal from "react-responsive-modal";
import { Icon, Input } from 'semantic-ui-react';
import axios from 'axios'
import baseUrl from '../components/api'
import PropTypes from "prop-types";
// import { NavLink } from 'react-router-dom'
import ReactLoading from 'react-loading';

const styles = {
	fontFamily: "sans-serif",
	textAlign: "center"
};

class LoginModal extends Component {
	state = {
		open: false,
		email: '',
		password: '',
		loading: false
	};

	onOpenModal = () => {
		this.setState({ open: true });
		this.props.toggle();
	};

	onCloseModal = () => {
		this.setState({ open: false });
	};

	handleChange = event => {
		// debugger;
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = event => {
		this.setState({
			loading: true
		})
		event.preventDefault();
		let { email, password } = this.state;
		const user = { email, password };

		axios.post(`${baseUrl}/users/login`, user)
			.then(res => {
				const store = res.data.token;
				if (res.status === 200) {
					sessionStorage.setItem('user', res.data.token);
					sessionStorage.setItem('name', email);
					alert(res.data.message);
					this.setState({
						open: false,
						loading: false
					});
					window.location.reload();
				} else {
					alert(res.data.message)
				}
			})
}

	render() {
		const { open, loading } = this.state;
		return (
			<div style={styles} >
				<button onClick={this.onOpenModal} className='trigger btn'>Login</button>
				<Modal open={open} onClose={this.onCloseModal} center>
					<div className="modal-body">
						<div className="modal-content" onClick={this.isOpen}>
							<button className="btn btn-md btn-primary col-span-12 mass"> <i className="fa fa-facebook"></i> Login with facebook </button>
							<button className="btn btn-md btn-default col-span-12 mass"> <i className="fa fa-google"></i> Login with Google </button>
							<span style={{ margin: '3%' }}> or </span>
							<form style={{ display: 'contents' }} onSubmit={this.handleSubmit}>
								<span style={{ marginBottomt: '20px' }}>
									<Input iconPosition='left' placeholder='you@example.com' className="myInput">
										<Icon name='at' />
										<input required type='email' name='email' onChange={this.handleChange} value={this.state.email} />
									</Input>
								</span>
								<span><br />
									<Input iconPosition='left' placeholder='Password' className="myInput">
										<Icon name='eye' />
										<input required type="password" name='password' onChange={this.handleChange} value={this.state.password} />
									</Input>
								</span>
								{
									loading &&
									<div className='load'>
										<ReactLoading type='bars' color='gold' width='30%' height='90px' />
									</div>
								}
								<span className="modal-deet">
									<span style={{ float: 'left' }}>
										<input type="checkbox" onChange={this.handleChange} /> Remember Me </span>
									<span style={{ float: 'right' }}> Forgot password </span>
								</span>
								<button className="btn btn-md btn-primary col-span-12 mass"> Login </button>

							</form>
						</div>
					</div>
				</Modal>
			</div>
		);
	}
}

LoginModal.propTypes = {
	// classes: PropTypes.object.isRequired,
	// submit: PropTypes.func.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	})
};

export default LoginModal