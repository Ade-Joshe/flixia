 import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import './singleCeleb.css';
import '../general_style.css'
import celebBig from '../images/omotola.jpg';


const SingleCeleb = () => {
    return(
    <div>
        <Header/>
            <div className='parallax general'>
                <div className='celebDescription'>
                    <div className='celebBio celebname'>
                        <span style={{fontSize: '3em', lineHeight: '1em'}}> Omotola Jolade Ekehinde</span>
                        <br />
                        <div className='bio'>
                            <div className='biodeet'>
                                <p> Actor</p>
                                <p>Gender</p>
                                <p> Date of Birth</p>
                                <p> Nationality </p>
                                <p>State of Origin</p>
                            </div>
                            <div className='biodeet' style={{ marginLeft: 20}}>
                                <p> Producer</p>                            
                                <p>Male</p>
                                <p>27/08/1997</p>
                                <p> Nigerian</p>
                                <p> Enugu</p>
                            
                            </div>
                        </div>
                        <div className='biodescrip'>
                            lorempVoluptate incididunt ex minim consequat et veniam amet in excepteur. Sunt qui aliqua tempor quis consectetur. Irure in eiusmod ullamco aute laboris incididunt eiusmod dolor magna sunt nostrud minim.
                            Exercitation nisi occaecat velit id officia elit ea proident proident est quis. Nostrud qui et elit elit aliqua adipisicing aute non. Officia esse ex eiusmod duis culpa cupidatat incididunt sunt magna excepteur do veniam sint aliquip. Sint sint ex consectetur commodo aliqua nulla veniam do.
                        </div>
                        </div>
                    </div> <br />
                    <div className='celeb_achievements'>
                    <div className='actedMovies'>
                            <h2> Movies Acted</h2>
                            <div className='movieActedYear'>
                                <span> 2012 </span>
                                <span style={{marginLeft: 90 }}> Deserunt officia amet quis nostrud ipsum. </span>
                            </div>
                        </div>
                        <div className='Tvshows'>
                            <h2> TV shows Acted</h2>
                            <div className='tvshowsYear'>
                                <span> 2012 </span>
                                <span style={{marginLeft: 90 }}> Deserunt officia amet quis nostrud ipsum. </span>
                            </div>
                        </div>
                        </div>
                    {/* <div>
                        Minim ut incididunt in irure dolore cupidatat. Sit aliqua duis incididunt adipisicing quis sint exercitation minim proident consequat esse. Reprehenderit sunt et nostrud dolor commodo duis laborum et dolor exercitation. Ex cupidatat mollit veniam reprehenderit enim tempor. Dolor incididunt et ad id irure ea eu nulla sint qui.
                        Commodo nisi excepteur mollit exercitation id nostrud id nisi cupidatat aute elit enim consequat. Ad proident dolore esse dolor aliquip consequat irure elit aliqua nisi sunt. Culpa est deserunt excepteur do fugiat. Nisi adipisicing ut Lorem occaecat qui dolor officia mollit ipsum est laboris consequat deserunt. Ad esse incididunt enim sint nostrud dolor veniam velit. Culpa laboris veniam sunt duis nulla minim mollit. Mollit do occaecat eu ullamco anim qui quis fugiat consequat non ex eu anim aliqua.
                    </div> */}
                </div>
        <Footer/>
    </div>
)
}

export default SingleCeleb;