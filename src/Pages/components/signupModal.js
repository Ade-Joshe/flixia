import React, { Component } from 'react'
import './style.css'
import Modal from "react-responsive-modal";
import { Icon, Input } from 'semantic-ui-react';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};


class SignUpModal extends Component {
	state = {
		open: false,
		username: '',
		email: '',
		password: ''
	};

	onOpenModal = () => {
		this.setState({ open: true });
		this.props.toggle('signup');
	};
	
	onCloseModal = () => {
		this.setState({ open: false });
	};


	handleChange= event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit= event => {
		event.preventDefault();
		let { username, email, password } = this.state;
		const user = {username, email, password};

		console.log(user);
		// API.post(`/user/${user_id}`, { user })
		// 	.then(res => {
		// 	    console.log(res);
		// 	    alert(res.data.message);
		// 	})
		// this.props.history.push('/movie');
	}
	
	render() {
		const { open } = this.state;
		return (
		<div style={styles}>
			<p onClick={this.onOpenModal} className='trigger smoke'>SignUp</p>
				<Modal open={open} onClose={this.onCloseModal} center>
					<div className="modal-body">		
							<div className="modal-content" style={{paddingTop: '5%'}}>
							<button className="btn btn-md btn-primary col-span-12 mass"> <i className="fa fa-facebook"></i> SignUp with facebook </button>
								<button className="btn btn-md btn-default col-span-12 mass"> <i className="fa fa-google"></i> SignUp with Google </button>
								{/* <hr /> */}
								<span style={{margin: '3%'}}> or </span>
				
							<form style={{display: 'contents'}}onSubmit={this.handleSubmit}>
							<span style={{marginBottom: '20px'}}>
								<Input iconPosition='left' placeholder='Enter Name' className="myInput">
									<Icon name='user'/>
									<input value={this.state.username} onChange={this.handleChange} name='username'/>
								</Input> 
								</span>							
								<span>
								<Input iconPosition='left' placeholder='Email' className="myInput">
									<Icon name='at' />
									<input value={this.state.email} onChange={this.handleChange} name='email'/>
								</Input> 
								</span>
								<span><br />
								<Input iconPosition='left' placeholder='Password'  className="myInput">
									<Icon name='eye' />
									<input type="password" onChange={this.handleChange} value={this.state.password} name='password'/>
								</Input>
								</span>
								<span className="modal-deet">
									<span style={{ float: 'left'}}>
										<input type="checkbox" /> Remember Me </span>
									<span style={{float: 'right'}}> Forgot password ? </span>
								</span>
							<button className="btn btn-md btn-primary mass"> SignUp </button>
							</form>
							<span style={{margin: 'auto', marginTop: '1%'}}>Already have an account </span>
					</div>
					</div>
				</Modal>
			</div>
			)
	}
}

export default SignUpModal;
// state = { open: false }

// show = dimmer => () => this.setState({ dimmer, open: true })
// close = () => this.setState({ open: false })

// render() {
//   const { open, dimmer } = this.state;

//   return (
//     <span>
//       <p onClick={this.show('blurring')} className='trigger smoke' style={{marginRight: 10}}>SignUp</p>
//         <div>
// 		<Modal dimmer={dimmer} open={open} onClose={this.close} style={{margin: 'auto', height: 520, marginTop: 'auto', paddingLeft: '2%', paddingRight: '2%', width: 530 }}>
// 		</Modal>
// 	  </div>
// 	</span>
//   )
// }
