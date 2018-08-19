import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import './home.css';
import '../general_style.css'
import MovieTab from '../components/movTab.js';
import Slide from '../components/slideshow';
// import img from '../images/img_parallax.jpg'

const Home = () => {
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
                <MovieTab />
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


export default Home;