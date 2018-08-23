import React from 'react';
import './comment.css';
import prophoto from '../images/avatar.jpg'
// import { ImageGroup } from 'semantic-ui-react';

const Comment = () => {
    const value = 3;
    var person;

    // this.person = this.person.bind(this);
    (this.value > 1) ? person = 'people' : person = 'person';
    return (
        <div className='commentBody'>
            <span classname='commentAvatar'>
                <img alt='' src={prophoto} className='commentImage'/>
            </span>
            <span className='commentName'> Name </span>
            <span className='commentDate'>Date</span>
            <hr />
            <span className='commentComment'> Comments </span>
            <hr />
            <span className='commentStars'>Stars</span>
            <span className='commentSupport'> {this.value} {this.person} Supports this </span>
            <span>
                {/* <ImageGroup /> */}
            </span>
        </div>
    )
}

export default Comment;