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
            <div>
                <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here..." />
                <ul>
                    {libraries.map(function (i) {
                        return <li>{i.name} <a href={i.url}>{i.url}</a></li>;
                    })}
                </ul>
            </div>
        );
    }
}

