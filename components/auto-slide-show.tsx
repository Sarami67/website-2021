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
      <Position>
        <Position2>
        <Title>TOHOFES 70th</Title>
        {date.map((date) => <Date>{date}</Date>)}
        </Position2>
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
      </Position>
    )
}

const Position2 = styled.div`
position:absolute;
z-index:100;
`

const Position = styled.div`
position:relative;
`

const Date = styled.li`
list-style: none;
text-align:center;
`

const Title = styled.h1`
text-align:center;
`

const Image = styled.img `
  display:block;
  width:100%;
  height:70%;
`


export default AutoSlideShow;