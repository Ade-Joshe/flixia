import React, { Component } from 'react'
import './style.css'
import Modal from "react-responsive-modal";
import { Icon, Input } from 'semantic-ui-react';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};


class LoginModal extends Component {
		state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div style={styles}>
        <p onClick={this.onOpenModal} className='trigger smoke'>Login</p>
        <Modal open={open} onClose={this.onCloseModal} center>
				<div className="modal-body">			
					 <div className="modal-content">
					 <button className="btn btn-md btn-primary col-span-12 mass"> <i className="fa fa-facebook"></i> Login with facebook </button>
						 <button className="btn btn-md btn-default col-span-12 mass"> <i className="fa fa-google"></i> Login with Google </button>
						 <span style={{margin: '3%'}}> or </span>
					 <form style={{display: 'contents'}}onSubmit={this.handleSubmit}>
						 <span style={{marginBottomt: '20px'}}><Input iconPosition='left' placeholder='Username or Email' className="myInput">
							 <Icon name='user' />
							 <input />
						 </Input> 
						 </span>
						 <span><br />
						 <Input iconPosition='left' placeholder='Password'  className="myInput">
							 <Icon name='eye' />
							 <input type="password"/>
						 </Input>
						 </span>
						 <span className="modal-deet">
							 <span style={{float: 'left'}}>
								 <input type="checkbox" /> Remember Me </span>
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
