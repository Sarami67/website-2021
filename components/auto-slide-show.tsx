import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';
import {date} from '../scripts/autoslideshow'

const AutoSlideShow = () => {
    const AutoSlideShowProperties = {
        duration: 5000,
        canSwipe: false,
        arrows: false,
      };
    return (
      <div>
        <Title>TOHOFES 70th</Title>
        {date.map((date) => <Date>{date}</Date>)}
      <div className="slide-container">
        <Fade {...AutoSlideShowProperties}>
          <div className="each-fade">
            <Image src="/entrance-backgrund-1.jpg" />
          </div>
          <div className="each-fade">
            <Image src="/entrance-backgrund-2.jpg" /> 
          </div>
        </Fade>
      </div>
      </div>
    )
}

const Date = styled.li`
list-style: none;
`

const Title = styled.h1`
`

const Image = styled.img `
  display:block;
  width:100%;
  height:70%;
`


export default AutoSlideShow;