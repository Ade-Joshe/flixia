import PropTypes from 'prop-types'
import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';
import img1 from '../images/banana.jpg';
import img3 from '../images/france.jpg';
import img4 from '../images/seven.jpg';
import img5 from '../images/prayed.jpg';
import img6 from '../images/sidechick.jpg'
import './slideshow.css'


const items = [
    {
        src: img1,
        caption: 'Banana Island Ghost',
        date: '4th August 2017 ',
        category: ['Comedy Drama'],
        link: '',

    },
    {
        src: img3,
        caption: 'War in France',
        date: '4th August 2017 ',
        category: 'Drama',
        link: ''
    },
    {
        src: img4,
        caption: 'Curse of the Seven',
        date: '4th August 2017 ',
        category: ['Adventure  drama'],
        link: ''
    },
    {
        src: img5,
        caption: 'She Prayed',
        date: '4th August 2017 ',
        category: 'Drama',
        link: ''
    },
    {
        src: img6,
        caption: 'The Real Side Chicks',
        date: '4th August 2017 ',
        category: 'drama',
        link: ''
    },
];

class HomeSlide extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.toggle = this.toggle.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    toggle = () => {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} style={{ width: '100%' }} />
            <div className='thelay'>
            </div>
                    {/* <div style={{marginTop: -50}}> */}
                    {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
                    {/* </div> */}
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}



Carousel.propTypes = {
    activeIndex: PropTypes.number,     // the current active slide of the carousel
    next: PropTypes.func.isRequired,    // a function which should advance the carousel to the next slide (via activeIndex)
    previous: PropTypes.func.isRequired,   // a function which should advance the carousel to the previous slide (via activeIndex)
    keyboard: PropTypes.bool,    // controls if the left and right arrow keys should control the carousel

	/* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
    * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
    */

    pause: PropTypes.oneOf(['hover', false]), 	// Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
    ride: PropTypes.oneOf(['carousel']),   // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
    // the interval at which the carousel automatically cycles (default: 5000)
    interval: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool,
    ]),
    children: PropTypes.array,
    // called when the mouse enters the Carousel
    mouseEnter: PropTypes.func,
    // called when the mouse exits the Carousel
    mouseLeave: PropTypes.func,
    // controls whether the slide animation on the Carousel works or not
    slide: PropTypes.bool,
    cssModule: PropTypes.object,
};

export default HomeSlide;