import React from 'react';
import '../general_style.css';
import MovieTab from '../components/movTab';
import Slide from '../components/slideshow';

const Movies = () => {
    return (
        <div style={{ height: '100%' }}>
            <div className="bighead general"  style={{paddingTop: 0}}>
                <Slide />
            </div>
            <div className='movietab'>
                <MovieTab />
            </div>
        </div>
    )
}

export default Movies;