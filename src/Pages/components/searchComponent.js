import React from 'react';
import axios from 'axios';
import baseUrl from './api'


export default class SearchExample extends React.Component {

    state = { searchString: '' }
    handleChange = (e) => {
        this.setState({ searchString: e.target.value });
    }

    componentDidMount() {
        axios.get(`${baseUrl}/search?title=${this.state.searchString}`)
    }

    render() {
        const { libraries } = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();
        if (searchString.length > 0) {
            libraries = libraries.filter(function (i) {
                return i.name.toLowerCase().match(searchString);
            });
        }
        return (
            // <div>
            //     <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here..." />
            //     <ul>
            //         {libraries.map(function (i) {
            //             return <li>{i.name} <a href={i.url}>{i.url}</a></li>;
            //         })}
            //     </ul>
            // </div>
            <div className="input-group mb-3 searchText">
                <input type="text" className="form-control" ref="search suggestion" onClick={this.handleChange} placeholder='Type here' aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append" >
                    <span className={"input-group-text fa fa-" + this.props.icon} id="basic-addon2" style={{ marginTop: 0, paddingTop: 9, backgroundColor: '#ffb01e' }}></span>
                </div>
            </div>);
    }
}

