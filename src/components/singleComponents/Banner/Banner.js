import React from 'react';
import { Carousel } from "react-carousel-minimal";
import slider01 from './SliderImage/slider01.png';
import slider02 from './SliderImage/slider02.png';

const Banner = () => {
     const data = [
         {
             image: `${slider01}`,
             caption: `
             <div class="slider-caption">
                 <h2>Hiking Tours</h2>
                 <p>Best Tours and Hotels Solution</p>
            </div>
            `,
         },
         {
             image: `${slider02}`,
             caption: `
             <div class="slider-caption">
                 <h2>Hiking Tours</h2>
                 <p>Best Tours and Hotels Solution</p>
            </div>
             `,
         },
     ];

     const captionStyle = {
         fontSize: "2em",
         fontWeight: "bold",
     };
     const slideNumberStyle = {
         fontSize: "20px",
         fontWeight: "bold",
     };
    return (
        <div>
            <Carousel
                data={data}
                time={5000}
                width='100%'
                height='500px'
                captionStyle={captionStyle}
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition='center'
                automatic={false}
                dots={true}
                pauseIconColor='white'
                pauseIconSize='40px'
                slideBackgroundColor='darkgrey'
                slideImageFit='cover'
                thumbnailWidth='100px'
                style={{
                    textAlign: "center",
                    maxWidth: "100%",
                    maxHeight: "500px",
                }}
            />
        </div>
    );
};

export default Banner;