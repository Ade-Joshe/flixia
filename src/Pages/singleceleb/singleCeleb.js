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
                    <div className='celebBio' style={{ marginTop: '30px'}}>
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
                            Fugiat et ut aute qui ex anim culpa incididunt tempor. Nostrud est voluptate veniam in dolore commodo non amet sit est. Aliquip non commodo aliqua anim nostrud et. Enim amet consectetur commodo tempor consequat eu consectetur cupidatat consequat proident. Reprehenderit cillum ipsum excepteur consequat veniam commodo cillum ad laboris id deserunt quis minim in. Adipisicing nisi et esse ex duis aliqua incididunt veniam ad amet magna proident. Labore nulla dolor adipisicing sunt laboris minim laborum cupidatat ad proident incididunt pariatur nisi.
                            Veniam sit laboris ex qui excepteur id adipisicing eiusmod officia. Consectetur officia deserunt occaecat commodo consequat non elit magna ipsum do voluptate qui voluptate. Dolor occaecat voluptate et duis duis dolor eu tempor nostrud laboris aute voluptate laboris. Voluptate nulla aute exercitation ipsum veniam. Ad elit qui eiusmod ut consectetur est ea. In consectetur duis excepteur magna consequat nulla proident aute est aliqua aute. Consectetur amet aliquip et aute ipsum aliquip nostrud ad qui laboris.
                            Consectetur dolore est Lorem mollit Lorem ex incididunt occaecat qui duis eu sint. Ad esse officia nisi ad mollit excepteur labore. Ullamco ipsum tempor adipisicing eu fugiat anim ut sint consectetur. Occaecat commodo exercitation in anim qui esse commodo nulla commodo adipisicing ea ad. Pariatur ex non aliqua dolore. Non ea exercitation labore anim nostrud esse amet cupidatat aliqua ut ut velit in eu.
                        </div>
                        </div>
                    </div> <br />
                    <div className='celeb_achievements'>
                    <hr />
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