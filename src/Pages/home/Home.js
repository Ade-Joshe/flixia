import React, { Component } from 'react';
import '../general_style.css';
import Axios from 'axios';
import baseURL from '../components/api';
import Searchbox from '../components/searchbox';
import ReactLoading from 'react-loading'
import { NavLink } from 'react-router-dom'
import HomeSlide from '../components/homeSlides';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trending: [],
            celebfocus: [],
            loadceleb: [],
            loadtrend: [],
            loading: true
        }
    }


    componentDidMount() {
        Axios.get(`${baseURL}/trailers/sort`)
            .then(res => {
                this.setState({
                    trending: res.data,
                    loadtrend: res.data[0],
                    loading: false
                })
                console.log(this.state.loadtrend);
            })

        Axios.get(`${baseURL}/celebrities/`)
            .then(res => {
                this.setState({
                    celebfocus: res.data,
                    loading: false
                })
                console.log(res.data)
            })
    }

    render() {
        const { trending, loadtrend, celebfocus, loading } = this.state;
        return (
            <div className='general' style={{ paddingTop: 0 }}>
                <div className='sliderContainer' >
                    <HomeSlide />
                    <div><Searchbox /></div>
                </div>
                <div className='body' >
                    <h2 style={{ margin: '0 0 0 0' }}>Trending </h2><span>in Movies </span>


                    <div className='trend' >
                        {
                            <div className='item1'>
                                <NavLink to={`/movies/singlemovie/${loadtrend._id}`}><img src={loadtrend.trailerCover} alt='' key={loadtrend._id} style={{ width: '100%' }} /></NavLink>
                            </div>
                        }

                        {
                            trending &&
                            trending.slice(1, 9).map((item) => {
                                return (
                                    <div key={item._id}>
                                        <NavLink to={`/movies/singlemovie/${item._id}`}><img src={item.trailerCover} alt='' key={item._id} style={{ width: '100%' }} /></NavLink>
                                    </div>
                                )
                            })
                        }


                    </div>
                    <button className='btn btn-md' style={{ backgroundColor: '#ffb01e', margin: '20px 0 0 5px' }}><NavLink to='/movies'><span style={{color: 'black'}}> see more </span></NavLink></button>
                    <br />
                    <br />
                    {
                        loading &&
                        <div className='bigscreen' style={{marginTop: '-60pc'}}>
                            <ReactLoading type='bars' color='gold' width='30%' height='40%' />
                        </div>
                    }
                    <div style={{ width: '100%', float: 'left', marginTop: 10 }}>
                        <h1 > Celebrity Focus </h1>
                        <div className='celeb'>
                            {
                                celebfocus &&
                                celebfocus.slice(0, 10).map((item) => {
                                    return (
                                        <div key={item._id}>
                                            <NavLink to={`/celebs/single_celebs/${item._id}`}><img src={item.thumbnail} alt='' key={item._id} style={{ width: '100%' }} /></NavLink>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <button className='btn btn-md' style={{ backgroundColor: '#ffb01e', margin: '20px 0 0 5px', color: 'black' }}><NavLink to='/celebs'><span style={{color: 'black'}}> see more </span></NavLink></button>
                </div>
            </div>
        )
    }
}


export default Home;