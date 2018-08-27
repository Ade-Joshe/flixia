import React from 'react';
import axios from 'axios';
import prophoto from '../images/avatar.jpg'
import './comment.css'

console.clear();

const Title = ({commentCount}) => {
  return (
    <div>
       <div>
          <h1><i className='fa fa-comments'></i>&nbsp; Comments &nbsp; ({commentCount})</h1> <br />
       </div>
    </div>
  );
}

const handleRating= () => {
    // e.preventDefault();
    for(let i = 0; i < 0; i++) {
      return (
            <div className='ratingStars'>
             <font classname='fa fa-star commentStars'> </font>
              {alert('yay, stars')}
             {/* totalstars.map(item => {
                ( 
                )
              }) */}
            </div>
      )
    }
  }

const CommentForm = ({addComment}) => {
  // input Tracker
  let input;
  // Return JSX
    //   // const totalstars=[10];
    //   //   return(
    //   //   )
    // }
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        addComment(input.value);
        input.value = '';
      }}>
      <input className="form-control col-md-6" placeholder='Enter Comments here' ref={node => {
        input = node;
      }} />
      <font onClick={ (e) => {e.preventDefault();
        handleRating()}} className='point'><i className='fa fa-star'></i>Rate</font>
      <br />
    </form>
  );
};

const Comment = ({comment}) => {
  // Each Comment
  return (
//   <a href="#" className="list-group-item">{comment.text}</a>
	<div className='commentBody'>
		<span className='commentAvatar'>
				<img alt='' src={prophoto} className='commentImage'/>
			</span>
			<span className='commentName'> Name </span>
			<span className='commentDate'>Date</span>
			<hr />
			<span className='commentComment smoke'> {comment.text} </span>
			<hr />
			<span className='commentStars'>Stars</span>
			<span className='commentSupport'>
			 {/* {this.value} {this.person} */}
			  Supports this </span>
	</div>
  );
}

const CommentList = ({comments}) => {
  // Map through the comments
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
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
    this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
  }
  // Lifecycle method
  componentDidMount(){
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
      <div style={{padding: 30}}>
        <Title commentCount={this.state.data.length}/>
        <CommentForm addComment={this.addComment.bind(this)}/>
        <CommentList comments={this.state.data} />
      </div>
    );
  }
}

export default CommentComp;
