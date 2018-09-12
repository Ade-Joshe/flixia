import React from 'react';
import axios from 'axios';
import prophoto from '../images/avatar.jpg'
import './comment.css';

console.clear();

const Title = ({commentCount}) => {
    return (
		<div>
			<div>
				<h1><i className='fa fa-comments'></i>&nbsp; Reviews &nbsp; ({commentCount})</h1> <br />
			</div>
		</div>
    );
}


	const CommentForm = ({addComment}) => {
		let input;
    return (
		<form onSubmit={(e) => {
			e.preventDefault();
			addComment(input.value);
			input.value = '';
		}}>
			<input className="form-control col-md-6" placeholder='Enter Comments here' ref={node => {
				input = node;
			}} />
		<br />
		</form>
    );
};



const Comment = ({comment}) => {
	return (
		<div className='commentBody'>
			<span className='commentAvatar'>
				<img alt='' src={prophoto} className='commentImage'/>
			</span>
			<span className='commentName smoke'> Name </span>
			<span className='commentDate smoke'>Date</span>
			<hr />
			<span className='commentComment smoke'> {comment.text} </span>
			<hr />
			<span className='commentStars'><i className='fa fa-star'></i><span id='star'></span></span>
			<span className='commentSupport smoke'>
				{/* {this.value} {this.person} */}
				Supports this
			</span>
		</div>
	);
}

// Map through the comments
const CommentList = ({comments}) => {
	const commentNode = comments.map((comment) => {
		return (<Comment comment={comment} key={comment.id}/>)
	});
	return (<div className='commentgroup' style={{marginTop:'30px'}}>{commentNode}</div>);
}

  // Contaner Component
  // Comment Id
  window.id = 0;


class CommentComp extends React.Component{
	constructor(props){
		super(props);
		// Pass props to parent class
		// Set initial state
		this.state = {
			data: [],
			id: '',
		}

	// this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
	this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
}

    // Lifecycle method
    componentWillUpdate(){
      // Make HTTP reques with Axios
		axios.get(this.apiUrl)
        .then((res) => {
          // Set state with result
			this.setState({data:res.data});
        });
    }
    // Add comment handler
    addComment(val){
      // Assemble data
		const comment = {text: val}
      // Update data
		axios.post(this.apiUrl, comment)
        .then((res) => {
            this.state.data.push(res.data);
            this.setState({data: this.state.data});
        });
    }


    render(){
      // Render JSX
		return (
			<div style={{padding: '30px 5%'}}>
				<Title commentCount={this.state.data.length}/>
				<CommentForm addComment={this.addComment.bind(this)}/>
				<CommentList comments={this.state.data} />
			</div>
		);
    }
}

export default CommentComp;
