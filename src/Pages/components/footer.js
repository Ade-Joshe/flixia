import React from 'react';
import { NavLink } from 'react-router-dom'
import 'reactstrap'
import SearchBox from './search'
import logo from "../images/flix1.png";
import ReviewModal from './review';

const Footer = () => {
    return (
        <div className="footer">
            <div className="big-box res-row">
                <div className="box dem box1">
                    <h1 className='smoke' ><img src={logo} className='headerlogo' style={{ width: 85, marginLeft: 0 }}></img></h1>
                    {/* <p className='smoke'>Nollywood Movie Database</p> */}
                    <p className="sign smoke"> &copy; Copyright 2018, All rights reserved </p>
                </div>
                <div className="box box2">
                    <div className="equal">
                        <ul style={{ paddingLeft: 0, fontWeight: 'bolder' }}>
                            <li className='smoke'>MOVIES</li>
                            <li className='smoke'>TV SHOWS</li>
                            <li className='smoke'>CELEBS</li>
                            <li className='smoke'>NEWS</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <li ><NavLink className='smoke' to="/about"> About </NavLink></li>
                        <li ><NavLink className='smoke' to="/termsofservice"> T & C </NavLink> </li>
                        <li ><NavLink className='smoke' to="/privacy"> Privacy Policy </NavLink> </li>
                    </div>
                </div>
                <div className="box1 box">
                    <p><b> FOLLOW US </b></p>
                    <span className='smoke'><b className="fa fa-facebook"></b> &nbsp;&nbsp; Facebook </span ><br />
                    <span className='smoke'><b className="fa fa-twitter"></b> &nbsp; Twitter </span><br />
                    <span className='smoke'><b className="fa fa-instagram"></b> &nbsp; Instagram </span><br />
                    <span className='smoke'><b className="fa fa-google"></b> &nbsp; Google </span><br />
                </div>
                <div className="box2 no-box smoke">
                    <span><b>SUBSCRIBE TO OUR NEWSLETTER</b></span>
                    <br />
                    <span>
                        Don't miss out on our amazing contents, we keep you up to date
                    </span><br /><br />
                    <form>
                        <SearchBox float='left' placeholder='Your Email' width='100%' icon='envelope' />
                    </form>
                <ReviewModal />
                </div>
            </div>
        </div>
    )
}

export default Footer;