// import React from 'react';
// import axios from 'axios';

// // import './comment.css';
// // import CommentList from './commentList';
// // import CommentForm from './commentForm';
// // // import prophoto from '../images/avatar.jpg'

// // // import { ImageGroup } from 'semantic-ui-react';

// // // const Comment = () => {
// // //     const value = 3;
// // //     var person;

// // //     // this.person = this.person.bind(this);
// // //     (this.value > 1) ? person = 'people' : person = 'person';
// // //     return (
// // //         <div className='commentBody'>
// //             {/* <span classname='commentAvatar'>
// //                 <img alt='' src={prophoto} className='commentImage'/>
// //             </span>
// //             <span className='commentName'> Name </span>
// //             <span className='commentDate'>Date</span>
// //             <hr />
// //             <span className='commentComment'> Comments </span>
// //             <hr />
// //             <span className='commentStars'>Stars</span>
// //             <span className='commentSupport'> {this.value} {this.person} Supports this </span>
// // //             <CommentList />
// // //             <CommentForm />
// // //         </div>
// // //     )
// // // }
// const TodoForm = ({addTodo}) => {
//     // Input tracker
//     let input;
  
//     return (
//       <div>
//         <input ref={node => {
//           input = node;
//         }} />
//         <button onClick={() => {
//           addTodo(input.value);
//           input.value = '';
//         }}>
//           +
//         </button>
//       </div>
//     );
//   };

// const Todo = todo => {
//     // Each Todo
//     return (<li>{todo.text}</li>);
//   }
  
//   const TodoList = ({todos}) => {
//       // Map through the todos
//     const todoNode = todos.map((todo) => {
//         return (<Todo todo={todo} key={todo.id} />)
//     });
//     return (<ul>{todoNode}</ul>);
//   }


// //    const 
  

//     const Title = ({todoCount}) => {
//         return (
//           <div>
//              <div>
//                 <h1>to-do ({todoCount})</h1>
//              </div>
//           </div>
//         );
//     }

//     // Todo App
//       class TodoApp extends React.Component{
//         constructor(props){
//             // Pass props to parent class
//             super(props);
//             // Set initial state
//             this.state = {
//               data: []
//             }
//             this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
//         }
//           // Lifecycle method
//         componentDidMount(){
//             // Make HTTP reques with Axios
//             axios.get(this.apiUrl)
//               .then((res) => {
//                 // Set state with result
//                 this.setState({data:res.data});
//               });
//           }

//           addTodo = val  => {
//             // Assemble data
//             const todo = {text: val}
//             // Update data
//             axios.post(this.apiUrl, todo)
//             .then((res) => {
//                 this.state.data.push(res.data);
//                 this.setState({data: this.state.data});
//             });
//         }
        
//           render(){
//           // Render JSX
//           return (
//             <div>
//               <Title todoCount={this.state.data.length}/>
//               <TodoForm addTodo={this.addTodo.bind(this)} />
//               <TodoList 
//               todos={this.state.data} />
//             </div>
//           );
//         }
//         //...
//        }

// // export default TodoApp;