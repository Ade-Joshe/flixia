import React, { Component } from 'react';
import { Player, VolumeMenuButton, LoadingSpinner, ReplayControl, ControlBar, PlayToggle, BigPlayButton } from 'video-react';
import ForwardControl from 'video-react/lib/components/control-bar/ForwardControl';
import CommentComp from '../components/comment'
import './SingleMovie.css'
import axios from 'axios'
// import { watch } from 'fs';
// import { watch } from 'fs';
// import { watch } from 'fs';
import ReactLoading from 'react-loading';


class SingleMovie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            watchMovie: [],
            loading: false,
            id: 0
        }
    }

    componentWillMount() {
        this.setState({
            loading: true
        })
        const title = this.props.match.params.id;
        axios.get(`https://flixia.herokuapp.com/trailers/search?_id=${title}`)
            .then(res => {
                // console.log(movie, res.data)
                this.setState({
                    watchMovie: res.data[0],
                    loading: false,
                    id: title
                })
                console.log(this.state.watchMovie)
            })
    }

    render() {
        const { watchMovie, loading, id } = this.state;
        let budget;
        (watchMovie.budget !== undefined ) ?  budget = watchMovie.budget.toLocaleString() : null;
        // const year = this.state.watchMovie.releaseDate.toString().splice(0,4);
        return (
            <div>
                <div className='singleMovieBody general'>
                    <div style={{ width: '100%' }}>
                        <div className='singleMoviehead'>
                            <div className='play' autofocus>
                                <Player
                                    playsInline
                                    poster={watchMovie.trailerCover}
                                    src={watchMovie.trailerVideo}
                                >
                                    {/* <source src={watchMovie.trailerVideo} /> */}
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
                        {
                            loading &&
                            <div className='load'>
                                <ReactLoading type='bars' color='gold' width='30%' height='90px' />
                            </div>
                        }


                        <div className='moviedetail' >
                            <h1><b>{watchMovie.title}</b><small className='small'>{}</small></h1>
                            <p>categories: 
                            {
                                watchMovie.categories ? watchMovie.categories.name : <span> no result for this category</span>
                            }
                            {/* {watchMovie.categories.map(item => {
                                return (
                                    <span>{item.name}</span>
                                )
                            })}&nbsp;&nbsp;&nbsp; */}
                            </p>
                            <br /><br />
                            <font>
                                {watchMovie.description}
                            </font>

                            {/* <div className='ratingSomething'> <buttom> Submit </buttom></div> */}
                        </div>
                        <div className='singlemovieBody'>
                            <span><a href='#plot'> FULL PLOT </a></span>
                            <span><a href='#info'> INFORMATION </a> </span>
                            <span><a href='#cast'> CAST & CREW </a></span>
                            <span><a href='#award'> AWARDS </a></span>
                            <span><a href='#photo'> PHOTOS </a></span>
                            <span><a href='#reviews'> REVIEWS </a></span>
                        </div>

                        <div className='fullPlot' id='plot'>
                            <h2> <strong>FULL PLOT</strong> </h2>
                            <span>
                            </span>
                        </div><hr />
                        <div className='information' id='info'>
                            <h2> <b>INFORMATION</b> </h2>
                            <div>
                                <p><b>Official Site:</b> {watchMovie.officialSite}</p>
                                <p><b>Language: </b>{watchMovie.language}</p> <br /><br />
                                <p><b>Release Date: </b>{watchMovie.releaseDate}</p>
                                <p><b>Film Location</b> {watchMovie.filmingLocations}</p>
                            </div>
                            <div>
                                <p><b> Duration:</b> {watchMovie.duration} &nbsp; minutes </p>
                            </div>
                            <div>
                                <p> <b>Production Company:</b>  {watchMovie.productionCompany}</p>
                            </div>
                            <div>
                                <p><b> Budget:</b> { (watchMovie.budget !== undefined)  ? budget : <span>not available</span>}</p>
                            </div>
                        </div><br /><hr />
                        <div className='cast' id='cast'>
                            <h2> <b>CAST </b></h2>
                            <span>

                                {
                                    watchMovie.cast ? watchMovie.cast : <span> No Result for this field </span>
                                }
                            </span>
                        </div><hr />
                        <div className='awards' id='award'>
                            <h2><b>AWARDS</b></h2>
                            {
                                watchMovie.awards ? watchMovie.awards : <span> No Result for this field </span>
                            }

                        </div>< hr />
                        <div className='photos' id='photo'>
                            <h2><b>PHOTOS</b></h2>
                            {
                                watchMovie.photos ? watchMovie.photos : <span> No Result for this field </span>
                            }

                            {/* {
                                watchMovie &&
                                watchMovie.slice(0, 5).map((item) => {
                                    return (
                                        <div key={item._id} className='photos'>
                                            <NavLink to={`/celebs/single_celebs/${item._id}`}><img src={item.picture} alt='' key={item._id} style={{ width: '20%' }} /></NavLink>
                                        </div>
                                    )
                                })
                            } */}

                        </div><hr />
                    </div>
                </div>
                <div id='reviews'>
                    <CommentComp id={id} />
                </div>
            </div>
        )
    }
}

export default SingleMovie;