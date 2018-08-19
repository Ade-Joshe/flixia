import PropTypes from 'prop-types'            
import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Fade
} from 'reactstrap';
// import img1 from '../images/img_parallax.jpg';
import img2 from '../images/img_parallax2.jpg';
import img3 from '../images/img_parallax3.jpg';

const img1 = require('../images/img_parallax.jpg');
    const items = [
  {
    src: img1,
    altText: 'Slide 1',
    caption: 'Bestie on a Ride'
  },
  {
    src: img2,
    altText: 'Slide 2',
    caption: 'Race to the witch mountain'
  },
  {
    src: img3,
    altText: 'Slide 3',
    caption: 'Alternative parrallel universe'
  }
];

class Slide extends Component {
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

  toggle = () =>{
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
            <img src={item.src} alt={item.altText} style={{width: '100%'}}/>
            <div style={{marginTop: -50}}>
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </div>
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
    // the current active slide of the carousel
    activeIndex: PropTypes.number,
    // a function which should advance the carousel to the next slide (via activeIndex)
    next: PropTypes.func.isRequired,
    // a function which should advance the carousel to the previous slide (via activeIndex)
    previous: PropTypes.func.isRequired,
    // controls if the left and right arrow keys should control the carousel
    keyboard: PropTypes.bool,
    /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
    * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
    */
   pause: PropTypes.oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: PropTypes.oneOf(['carousel']),
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

export default Slide;