import React from 'react';
import avatar from '../images/avatar.jpg'

const Avatar = () => {
    return(
        <div className="chip">
            <img src={avatar} alt="Person" width="40" height="40" className='avatar' />
        </div>
    );
}


// vertical-align: middle;
// width: 50px;
// height: 50px;
// border-radius: 50%;
export default Avatar;