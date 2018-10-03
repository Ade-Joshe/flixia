import React, { Component } from 'react'
import '../general_style.css'
import Axios from 'axios';
import baseURL from '../components/api'
import ReactLoading from 'react-loading'
import SingleMovie from '../singlemovie/SingleMovie';

class SingleCeleb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            celeb: [],
            id: 0,
            loading: false,
            roles: []
        }
    }

    componentWillMount() {
        this.setState({
            loading: true,

        })
        const title = this.props.match.params.id;
        Axios.get(`${baseURL}/celebrities/search?_id=${title}`)
            .then(res => {
                const image = res.data[0].picture;
                console.log(image)
                this.setState({
                    celeb: res.data[0],
                    loading: false,
                    image: res.data[0].picture,
                    roles: res.data[0].roles
                })
                document.getElementsByClassName('parallax').style = `background-image: ${image}`
                console.log(this.state.roles)
            })
    }

    // componentDidMount() {
    //     const title = this.props.match.params.id;
    //     Axios.get(`${baseURL}/celebrities/search?_id=${title}`)
    //         .then(res => {
    //             this.setState({
    //             })
    //             console.log(res.data[0].roles[1].rolenames)
    //         })
    // }

    render() {
        const { celeb, roles, loading, id } = this.state;
        // console.log(celeb.roles[0].rolename);
        return (
            <div>
                <div className='parallax general' id='parallax'>
                    <div className='celebPhoto'>
                        <img src={celeb.picture} className='background' />
                    </div>
                    <div className='celebDescription'>
                        <div className='celebBio celebname'>
                            <span style={{ fontSize: '3em', lineHeight: '1em' }}> {celeb.name}</span>
                            <p style={{ margin: '1em' }}>
                                {
                                    (roles.length === 1) ? <span> {roles[0].rolename} </span> :
                                        roles.map(x => {
                                            return (<span>{x.rolename + ' '}&nbsp;&nbsp;&nbsp;</span>);
                                        })
                                }
                            </p>
                            {/* <p>Male</p>  <span>Actor</span>*/}

                            <br />
                            <div className='bio'>
                                <div className='biodeet'>
                                    {/* <p>Gender</p> */}
                                    <p> Date of Birth</p>
                                    <p> Nationality </p>
                                    <p> State of Origin</p>
                                </div>

                                <div className='biodeet' style={{ marginLeft: 20 }}>
                                    <p>{celeb.dateOfBirth}</p>
                                    <p> Nigerian</p>
                                    <p> {
                                        celeb.stateOfOrigin ? celeb.stateOfOrigin : <span>not available</span>
                                    }</p>

                                </div>
                            </div>
                            <div className='biodescrip'>{celeb.biography} </div>
                        </div>


                        {
                            loading &&
                            <div style={{ height: '40%', width: '91%', bottom: '20pc', position: 'relative', left: '30%' }} >
                                <ReactLoading type='bars' color='#ffb01e' height='40%' width='30%' />
                            </div>
                        }
                    </div> <br />
                    <div className='celeb_achievements'>
                        <div className='actedMovies'>
                            <h2> Movies Acted</h2>
                            <div className='movieActedYear'>

                                {
                                    celeb.movie ? celeb.movie : <span> No result for this field </span>
                                }
                                {/* <span> 2012 </span>
                                <span style={{ marginLeft: 90 }}> Deserunt officia amet quis nostrud ipsum. </span> */}
                            </div>
                        </div>
                        <div className='Tvshows'>
                            <h2> TV shows Acted</h2>
                            <div className='tvshowsYear'>
                                {
                                    celeb.movieYear ? celeb.movieYear : <span> No result for this field </span>
                                }

                                {/* <span> 2012 </span>
                                <span style={{ marginLeft: 90 }}> Deserunt officia amet quis nostrud ipsum. </span> */}
                            </div>
                        </div>
                        <br />
                        <br />
                        <div style={{ paddingLeft: 30 }}>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default SingleCeleb;