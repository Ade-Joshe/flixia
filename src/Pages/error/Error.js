import React from 'react';
import {NavLink} from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import '../general_style.css';
import './Error.css';


const Error = () => {
    return(
        <div className='errorskin'>
            <Header 
                // logo="Best"
                // // the data represents the header data and their routes link
                // // please check the app.js to make sure the link exists in the 
                // // Routing file
                // data={[
                //     {
                //         name: 'Contact',
                //         link: '/contact'
                //     },
                //     {
                //         name: 'About',
                //         link: '/about'
                //     },
                //     {
                //         name: 'Home',
                //         link: '/'
                //     }
                // ]}
            />
            <div className="general">
             
            </div>
            <Footer />
        </div>
    );
}

export default Error;