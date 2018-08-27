import React from 'react';
import { Player, VolumeMenuButton, LoadingSpinner, ReplayControl, ControlBar, PlayToggle, BigPlayButton } from 'video-react';
import Header from '../components/header';
import Footer from '../components/footer';
import ForwardControl from 'video-react/lib/components/control-bar/ForwardControl';
import CommentComp from '../components/comment'
import './SingleMovie.css'

const SingleMovie = () => {
    return(
        <div>
            <Header />
            {/* //movie image goes here */}
            <div className='singleMovieBody general'>
            <div style={{width: '100%'}}>
                <div className='singleMoviehead'>
                    <div className='play'> 
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
                <div className='moviedetail' >
                    <h1> Video Title goes here  </h1>
                        <span>  Other contents goes here   </span>
                        <br />
                    <font> MThings might happen toinight...
                        im just watching patiently
                    </font>
                </div>  
                </div>
            </div>
            <CommentComp />
            <Footer />
        </div>
    )
}

export default SingleMovie;