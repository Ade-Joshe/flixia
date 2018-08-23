import React from 'react';
import '../general_style.css'
import Header from '../components/header';
import CelebTab from '../components/celesTabs';
import Footer from '../components/footer';
import './Celebs.css';
import Slide from '../components/slideshow';

const Celebs = () => {
    return (
        <div style={{height: '100%'}}>
            {/* <div className="header"> */}
            {/* //header goes here */}
                <Header />
            {/* </div> */}
            <div className="bighead general">
                 {/* the slider goes here */}
                {/* <span> <img src={img} alt='' className='imag'/></span> */}
                <Slide />
            </div>
                <div className='movietab'>                
                <CelebTab />
            </div>
            {/* movie cards grid comes here */}

            <div className='myloader'>
                <button className='btn btn-md but'>Load More &nbsp;&nbsp; <i className='fa fa-refresh'></i></button>
            <hr />
                <Footer /> 
            </div>
            {/* page footer goes here */}
        </div>
    )
}

export default Celebs;