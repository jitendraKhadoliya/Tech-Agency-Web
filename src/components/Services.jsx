import React from "react";
import {Carousel}  from 'react-responsive-carousel';
import {} from 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/3.jpg';
import img2 from '../assets/4.jpg';
import img3 from '../assets/5.jpg';
import img4 from '../assets/6.jpg';

const Services = ()=>{
    return <div>
        <Carousel infiniteLoop autoPlay showArrows = {false} showStatus = {false} interval = {1000} showThumbs = {false}>

            <div>
                <img src={img1}  alt = ""/>
                <p className="legend">Full Stack</p>
            </div>

            <div>
                <img src={img2}  alt = ""/>
                <p className="legend">Peer-To-Peer Services</p>
            </div>

            <div>
                <img src={img3} alt = "" />
                <p className="legend">Support</p>
            </div>
            <div>
                <img src={img4} alt = "" />
                <p className="legend">Big Community</p>
            </div>

        </Carousel>

    </div>
}

export default Services;