import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import './singleCeleb.css';
import '../general_style.css'
// import celebBig from '../images/omotola.jpg';
import Comment from '../components/falsecom'

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
                        <br />
                        >
                        <br />
                        <div style={{ paddingLeft: 30 }}>
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                        </div>
                </div>
        <Footer/>
    </div>
)
}

export default SingleCeleb;