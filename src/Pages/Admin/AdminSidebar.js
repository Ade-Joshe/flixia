import React from 'react';
import profile from '../images/avatar.jpg'


const Sidebar = () => {
    return(
        <div>
                <div className='sideNavigation'>
                    <div className='adminProf'>
                        <img src={profile} alt='bdsj' />
                        <h3>Adegoke Oluwafemi </h3>
                    </div>
                    <div className='sidebardetails'>
                        <button className='btn btn-default btn-md'> <i className='fa fa-video-camera'></i> Video </button>
                        <button className='btn btn-default btn-md'> <i className='fa fa-file-video-o'></i> Celeb Images </button>
                        <button className='btn btn-default btn-md'> <i className='fa fa-users'></i> Logout </button>
                    </div>
                    {/* {name} */}
                </div>

        </div>
    )
}

export default Sidebar