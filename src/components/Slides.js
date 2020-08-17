import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSliderStyles from 'react-awesome-slider/dist/styles.css';


const AutoplaySlider = withAutoplay(AwesomeSlider);



const Slides = (props) => {
  const images = props.data.map(image => <div data-src={image.source} key="image.key" />)
  

  return (<AutoplaySlider  
    play={false}
    cancelOnInteraction={true}
    interval={6000}
    bullets={false}

    cssModule={AwesomeSliderStyles}
    mobileTouch={true}
    fillParent={true}
    transitionDelay={200}
    >
   
    {images}
  </AutoplaySlider>)
}

export default Slides;