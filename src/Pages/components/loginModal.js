import React, { Component } from 'react'
import './style.css'
import Modal from "react-responsive-modal";
import { Icon, Input } from 'semantic-ui-react';
import axios from  'axios'
import API from '../components/api'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};


class LoginModal extends Component {
	state = {
		open: false,
		email: '',
		password: ''
	};

	onOpenModal = () => {
		this.setState({ open: true });
		this.props.toggle('login');
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
		// event.preventDefault();
		let { email, password } = this.state;
	  
		const user = {  email, password };
		console.log(user);
		// this.props.history.push('/singlemovie');
		// API.post(`/user/${user_id}`, { user })
		//   .then(res => {
			//     console.log(res);
			//     alert(res.data.message);
			//   })
		}

	render() {
		const { open } = this.state;
    return (
		<div style={styles}>
			<p onClick={this.onOpenModal} className='trigger smoke'>Login</p>
			<Modal open={open} onClose={this.onCloseModal} center>
				<div className="modal-body">			
					<div className="modal-content" onClick={this.isOpen}>
						<button className="btn btn-md btn-primary col-span-12 mass"> <i className="fa fa-facebook"></i> Login with facebook </button>
						 <button className="btn btn-md btn-default col-span-12 mass"> <i className="fa fa-google"></i> Login with Google </button>
						 <span style={{margin: '3%'}}> or </span>
							<form style={{display: 'contents'}} onSubmit={this.handleSubmit}>
								<span style={{marginBottomt: '20px'}}>
								<Input iconPosition='left' placeholder='you@example.com' className="myInput">
									<Icon name='at' />
									<input name='email' onChange={this.handleChange} value={this.state.email}/>
								</Input> 
						 </span>
						 <span><br />
						 <Input iconPosition='left' placeholder='Password'  className="myInput">
							 <Icon name='eye' />
							 <input type="password" name='password' onChange={this.handleChange} value={this.state.password}/>
						 </Input>
						 </span>
						 <span className="modal-deet">
							 <span style={{float: 'left'}}>
								 <input type="checkbox" onChange={this.handleChange} /> Remember Me </span>
							 <span style={{float: 'right'}}> Forgot password </span>
						 </span>
						<button className="btn btn-md btn-primary col-span-12 mass"> Login </button>
						<p> </p>
					 </form>
				 </div>
			 </div> 
        </Modal>
      </div>
    );
  }

}

export default LoginModal
