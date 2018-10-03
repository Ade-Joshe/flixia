import React, { Component } from 'react';


class AddVideos extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {
        return (
            <div className='AdminBody'>
                <main className='adminMain' style={{ width: '85%' }}>
                    <button className='btn btn-default btn-md' style={{ marginLeft: '9pc' }}><i className='fa fa-video-o'></i> All Trailers</button>
                    <br />
                    <br />
                    <div className='adminContentScreen'>
                        <div>
                            <form onSubmit={this.addVideos} className='addCeleb'>
                                <input type='text' placeholder='Title' Required />
                                <input type='text' placeholder='Production Company' Required />
                                <input type='text' placeholder='Movie Genre' Required />
                                <input style={{ width: '38%', marginRight: '4%' }} type='text' placeholder='Duration' Required />
                                <input style={{ width: '38%' }} type='text' placeholder='Year of Production' Required />
                                {/* <input style={{ width: '38%', marginRight: '4%' }} type='sex' placeholder='Gender' Required />
                                <input style={{ width: '38%' }} type='date' placeholder='Birthdate' Required /> */}
                                <textarea style={{ width: '80%', height: 180, marginBottom: 30 }} placeholder='Year of Production'></textarea>
                                <input style={{ width: '35%', marginRight: '4%' }} type='text' placeholder='Cast Name' Required />
                                <input style={{ width: '35%' }} type='text' placeholder='Cast Role' Required />
                                <buttom className='btn btn-lg ' alt='add more'><i className='fa fa-plus'></i></buttom>
                                {/* <input type='year' placeholder='Movies Acted and Year' Required />
                                <input type='text' placeholder='TV Shows acted and year' Required /> */}

                            </form>
                        </div>
                    </div>
                    <div>

                        <button className='btn btn-default btn-md' style={{ marginLeft: '9pc' }}> + <i className='fa fa-video-camera'></i> Add Video</button>
                        <br />
                        <br />                    
                        <br />
                        <button className='btn btn-primary btn-md' style={{ marginLeft: '9pc' }}> <i className='fa fa-arrow-up'></i> Upload </button>
                        <button className='btn btn-default btn-md' style={{ marginLeft: '36pc' }}><i className='fa fa-book'></i> Preview</button>
                    </div>
                </main>

            </div>

        )
    }
}

export default AddVideos;