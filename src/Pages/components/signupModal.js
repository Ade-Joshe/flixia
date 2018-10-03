import React, { Component } from 'react'
import Modal from "react-responsive-modal";
import { Icon, Input } from 'semantic-ui-react';
import baseUrl from '../components/api'
import axios from 'axios'
import LoginModal from './loginModal'
import ReactLoading from 'react-loading'

const styles = {
	fontFamily: "segeo ui",
	textAlign: "center"
};


class SignUpModal extends Component {
	state = {
		open: false,
		username: '',
		email: '',
		password: '',
		loading: false
	};

	onOpenModal = () => {
		this.setState({ open: true });
		// this.props.toggle('signup');
	};

	onCloseModal = () => {
		this.setState({ open: false });
	};


	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		this.setState({
			loading: true
		})
		event.preventDefault();
		let { username, email, password } = this.state;
		const user = { username, email, password };

		axios.post(`${baseUrl}/users/signup`, user)
			.then(res => {
				if (res.data.status === 200) {
					// console.log(res.data);
					sessionStorage.setItem('user', res.data.token);
					sessionStorage.setItem('name', res.data.username);
					sessionStorage.setItem('email', res.data.email);
					alert(res.data.message);
					this.setState({
						open: false,
						loading: false
					})
					window.location.reload();
					// console.log(res.data)
				} else {
					// console.log(res)
					alert('Invalid Username or Password, please retry');
					this.setState({
						loading: false
					})
				}
			})
	}

	render() {
		const { open, loading } = this.state;
		return (
			<div style={styles}>
				<button onClick={this.onOpenModal} className='trigger btn'>SignUp</button>
				<Modal open={open} onClose={this.onCloseModal} center>
					<div className="modal-body">
						<div className="modal-content" style={{ paddingTop: '5%' }}>
							<button className="btn btn-md btn-primary col-span-12 mass"> <i className="fa fa-facebook"></i> SignUp with facebook </button>
							<button className="btn btn-md btn-default col-span-12 mass"> <i className="fa fa-google"></i> SignUp with Google </button>
							{/* <hr /> */}
							<span style={{ margin: '3%' }}> or </span>
							<form style={{ display: 'contents' }} onSubmit={this.handleSubmit}>
								<span style={{ marginBottom: '20px' }}>
									<Input iconPosition='left' placeholder='Enter Name' className="myInput">
										<Icon name='user' />
										<input value={this.state.username} onChange={this.handleChange} name='username' type='text' required />
									</Input>
								</span>
								<span>
									<Input iconPosition='left' placeholder='Email' className="myInput">
										<Icon name='at' />
										<input value={this.state.email} onChange={this.handleChange} name='email' type='email' required />
									</Input>
								</span>
								<span><br />
									<Input iconPosition='left' placeholder='Password' className="myInput">
										<Icon name='eye' />
										<input type="password" onChange={this.handleChange} value={this.state.password} name='password' type='password' required />
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
										<input type="checkbox" /> Remember Me </span>
									<span style={{ float: 'right' }}> Forgot password ? </span>
								</span>
								<button className="btn btn-md btn-primary mass"> SignUp </button>
							</form>
							<span style={{ margin: 'auto', marginTop: '1%' }}>Already have an account, <LoginModal /></span>
						</div>
					</div>
				</Modal>
			</div>
		)
	}
}

export default SignUpModal;
