import React from 'react';
import { Player, VolumeMenuButton, LoadingSpinner, ReplayControl, ControlBar, PlayToggle, BigPlayButton } from 'video-react';
import Header from '../components/header';
import Footer from '../components/footer';
import ForwardControl from 'video-react/lib/components/control-bar/ForwardControl';
import CommentComp from '../components/comment'


const SingleMovie = () => {
    return(
        <div>
            <Header />
            {/* //movie image goes here */}
            <div className='singleMovieBody general'>
            <div style={{textAlign:'center', fontSize: 40, margin: '30px', fontWeight: 'bolder'}}> </div>
                <div className='singleMoviehead' style={{width: '50%', height: 'auto', float: 'left'}}>
                    <div className='play' style={{width: '100%', height:'300px', margin:'auto', marginBottom: 60, padding: 10}}> 
                        <Player
                        playsInline
                        poster="/assets/poster.png"
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        >
                            <LoadingSpinner />
                            <BigPlayButton position="center" />
                            <ControlBar autoHide={false} disableDefaultControls={false}>
                                <PlayToggle />
                                <ReplayControl seconds={5} order={2.1} />
                                <ForwardControl seconds={5} order={2.2} />
                                <VolumeMenuButton />
                                <LoadingSpinner />
                            </ControlBar>
                        </Player>
                    </div>
                </div>  
                <div className='' style={{width: '50%', height: 'auto', float: 'left', padding: '0px 20px'}}>
                    <h1> Video Title goes here  </h1>
                        <span>  Other contents goes here   </span>
                        <br />
                    <font> MThings might happen toinight...



                        im just watching patiently
                    </font>
                </div>  

            </div>
            <CommentComp />
            <Footer />
        </div>
    )
}

export default SingleMovie;