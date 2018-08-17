import React from 'react';
import {NavLink} from 'react-router-dom'
import 'reactstrap'
import './footer.css'
import SearchBox from './search'


const Footer = () => {
    return(
            <div className="footer">
                <div className="big-box">
                    <div className="box dem box1 ">
                        <h1 className='smoke'> NMDb </h1>
                        <p className='smoke'>Nollywood Movie Database</p>
                        <p className="sign smoke"> &copy; Copyright 2018, All rights reserved </p>
                    </div>
                    <div className="box box2">
                        <div className="equal ">
                            <ul style={{ paddingLeft: 0, fontWeight: 'bolder'}} className='smoke'>
                                <li>MOVIES</li>
                                <li>TV SHOWS</li>
                                <li>CELEBS</li>
                                <li>NEWS</li>
                            </ul>
                        </div>
                        <div className="contact ">
                            <li ><NavLink className='smoke' to="/about"> About </NavLink></li>
                            <li ><NavLink className='smoke' to="/termsofservice"> Terms Of Service </NavLink> </li>                   
                            <li ><NavLink className='smoke' to="/privacy"> Privacy Policy </NavLink> </li>                   
                        </div>
                    </div>
                    <div className="box1">
                        <p><b> FOLLOW US </b></p>
                            <span className='smoke'><b className="fa fa-facebook"></b> &nbsp;&nbsp; Facebook </span ><br />
                            <span className='smoke'><b className="fa fa-twitter"></b> &nbsp; Twitter </span><br />
                            <span className='smoke'><b className="fa fa-instagram"></b> &nbsp; Instagram </span><br />
                            <span className='smoke'><b className="fa fa-google"></b> &nbsp; Google </span><br />
                    </div>
                    <div className="box2 no-box smoke">
                       <span><b>SUBSCRIBE TO OUR NEWS</b></span>
                        <br />
                        <span>
                            Don't miss out on our amazing contents, we keep you up to date
                        </span><br /><br />
                        <form>
                            <SearchBox float='left' placeholder='Your Email' width='80%' icon='envelope'/>
                            {/* <button className="btn btn-md btn-warning hidden">Subscribe</button> */}
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Footer;