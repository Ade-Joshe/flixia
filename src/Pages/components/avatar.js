import React from 'react';

const Avatar = props => {
    return(
        <div className="chip">
            <img src={props.avatar} alt="Person" width="40" height="40" className='avatar' />
        </div>
    );
}


// vertical-align: middle;
// width: 50px;
// height: 50px;
// border-radius: 50%;
export default Avatar;