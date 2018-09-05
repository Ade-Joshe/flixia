import React, { Component } from 'react';
import profile from '../images/avatar.jpg'
import './Admin.css'


class AddCelebs extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {
        return (
            <div className='AdminBody'>
                <main className='adminMain' style={{ width: '85%' }}>
                    <button className='btn btn-default btn-md' style={{ marginLeft: '9pc' }}><i className='fa fa-video-o'></i> All Images</button>
                    <br />
                    <br />
                    <div className='adminContentScreen'>
                        <div>
                            <form onSubmit={this.addVideos} className='addCeleb'>
                                <input type='text' placeholder='Enter Full Name' Required />
                                <input type='text' placeholder='Role in the industry' Required />
                                <input style={{ width: '38%', marginRight: '4%' }} type='text' placeholder='Nationality' Required />
                                <input style={{ width: '38%' }} type='text' placeholder='State' Required />
                                <input style={{ width: '38%', marginRight: '4%' }} type='sex' placeholder='Gender' Required />
                                <input style={{ width: '38%' }} type='date' placeholder='Birthdate' Required />
                                <textarea style={{ width: '80%', height: 180, marginBottom: 30 }} placeholder='Biography'></textarea>
                                <input type='year' placeholder='Movies Acted and Year' Required />
                                <input type='text' placeholder='TV Shows acted and year' Required />

                            </form>
                        </div>
                    </div>
                    <div>

                        <button className='btn btn-default btn-md' style={{ marginLeft: '9pc' }}> + <i className='fa fa-image'></i> Add Image(s)</button>
                    <br />
                    <br />                    <br />
                        <button className='btn btn-primary btn-md' style={{ marginLeft: '9pc' }}> <i className='fa fa-arrow-up'></i> Upload </button>
                        <button className='btn btn-default btn-md' style={{ marginLeft: '36pc' }}><i className='fa fa-book'></i> Preview</button>
                    </div>
                </main>

            </div>

        )
    }
}

export default AddCelebs;