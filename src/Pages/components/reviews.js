import React, { Component } from 'react';



export default class Reviews extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    handleSubmit = () => {

    }

    render() {
        return (
            <div className='general' style={{ padding: '70px 20px 20px 20px'}}>
                <form onSubmit={this.handleSubmit} >
                    <h2> Do tell us how you feel while using this product:</h2>
                    <textarea style={{ height: '50px', width: '90%' }} placeholder='Enter review here'>
                        <button className='btn btn-default btn-md'><i className='fa fa-plane'></i> Send </button>
                    </textarea>
                </form>
            </div>
        )
    }
}