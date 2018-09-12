import React from 'react';
import '../general_style.css'
// import Header from '../components/header';
import CelebTab from '../components/celesTabs';
// import Footer from '../components/footer';
import './Celebs.css';
import Slide from '../components/slideshow';



const Celebs = () => {
    return (
        <div style={{height: '100%'}}>
            {/* <Header /> */}
            <div className="bighead general"  style={{paddingTop: 0}}>
                <Slide />
            </div>
            <div className='movietab'>                
                <CelebTab />
            </div>
            <hr />
            {/* <Footer />  */}
        </div>
    )
}

export default Celebs;