import React, { Component } from 'react'
import profile from '../images/avatar.jpg'

class AdminHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
        }
    }


    render() {
        const { name } = this.state
        return (
            <div className='AdminBody'>
                <main className='adminMain'>
                    <button className='btn btn-default btn-md'> <i className='fa fa-arrow-left'></i> </button>
                    <button className='btn btn-default btn-md'><i className='fa fa-image'></i> All Images</button>
                    <button className='btn btn-default btn-md'> + <i className='fa fa-image'></i> Add Images</button>
                    <br />
                    <br />
                    <div className='adminContentScreen'>
                        <div>
                            <div className='detailMedia'> <img src={profile} alt='' /> </div>
                            <div style={{ paddingTop: '20px' }}>
                                <h2> The Sunset </h2>
                                <p> Gender </p>
                                <p> Birthday </p>
                                <p> Roles </p>
                                <p> State of Origin:  </p>
                                <p> Nationality </p>
                            </div>
                            <div style={{ marginTop: '50px', marginBottom: 50 }}>
                                lorem ipsum motika innsud miluda sidnos finhslmd alisjiohu bahguhsgya w jdnkjhiuhpfdoijfpoiej;lgkjlf
                                lorem ipsum motika innsud miluda sidnos finhslmd alisjiohu bahguhsgya w jdnkjhiuhpfdoijfpoiej;lgkjlf
                                lorem ipsum motika innsud miluda sidnos finhslmd alisjiohu bahguhsgya w jdnkjhiuhpfdoijfpoiej;lgkjlf
                                lorem ipsum motika innsud miluda sidnos finhslmd alisjiohu bahguhsgya w jdnkjhiuhpfdoijfpoiej;lgkjlf
                                lorem ipsum motika innsud miluda sidnos finhslmd alisjiohu bahguhsgya w jdnkjhiuhpfdoijfpoiej;lgkjlf
                                lorem ipsum motika innsud miluda sidnos finhslmd alisjiohu bahguhsgya w jdnkjhiuhpfdoijfpoiej;lgkjlf
                                lorem ipsum motika innsud miluda sidnos finhslmd alisjiohu bahguhsgya w jdnkjhiuhpfdoijfpoiej;lgkjlf
                                lorem ipsum motika innsud miluda sidnos finhslmd alisjiohu bahguhsgya w jdnkjhiuhpfdoijfpoiej;lgkjlf
                                lorem ipsum motika innsud miluda sidnos finhslmd alisjiohu bahguhsgya w jdnkjhiuhpfdoijfpoiej;lgkjlf
                                lorem ipsum motika innsud miluda sidnos finhslmd alisjiohu bahguhsgya w jdnkjhiuhpfdoijfpoiej;lgkjlf
                                lorem ipsum motika innsud miluda sidnos finhslmd alisjiohu bahguhsgya w jdnkjhiuhpfdoijfpoiej;lgkjlf
                                lorem ipsum motika innsud miluda sidnos finhslmd alisjiohu bahguhsgya w jdnkjhiuhpfdoijfpoiej;lgkjlf
                                lorem ipsum motika innsud miluda sidnos finhslmd alisjiohu bahguhsgya w jdnkjhiuhpfdoijfpoiej;lgkjlf
                             </div>


                            <div style={{ width: '50%', float: 'left' }}>
                                <h3> Movies Acted </h3>
                                <p><span> The Lion and The beans</span> &nbsp;&nbsp; <span>2019</span></p>
                                <p><span> Iyana Ipaja Bae </span>&nbsp;&nbsp;&nbsp; <span>2011</span></p>
                                <p><span> Late \kilimanjaro </span>&nbsp;&nbsp; <span>2011</span></p>
                            </div>
                            <div style={{ width: '50%', float: 'left' }}>
                                <h3> Movies Acted </h3>
                                <p> <span> The Lion and The beans</span> &nbsp;&nbsp; <span>2019</span></p>
                                <p> <span> Iyana Ipaja Bae </span>&nbsp;nbsp;nbsp; <span>2011</span></p>
                                <p> <span> Late kilimanjaro </span>&nbsp;&nbsp; <span>2011</span></p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <button style={{marginTop: 50, float: 'left'}} className='btn btn-primary btn-md'><i className='fa fa-arrow-right'></i>Save</button>
                        <button style={{marginLeft: '80%', marginTop: 50}} className='btn btn-default btn-md'><i className='fa fa-book'></i> Preview</button>
                    </div>
                </main>

            </div>
        )
    }
}

export default AdminHome;