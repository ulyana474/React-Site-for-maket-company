import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./icons/image1.png"
import image2 from "./icons/image2.png"
import image3 from "./icons/image3.png"
import image4 from "./icons/image4.png"
import image5 from "./icons/image5.png"
import image6 from "./icons/image6.png"
import image7 from "./icons/image7.png"
import image8 from "./icons/image8.png"
import image9 from "./icons/image9.png"
import image10 from "./icons/image10.png"
import image11 from "./icons/image11.png"
import image12 from "./icons/image12.png"
import image13 from "./icons/image13.png"
import image14 from "./icons/image14.png"
import image15 from "./icons/image15.png"

function Slider() {
    return (
        <div className="Carousel">
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {image1} className = "Slider_image" alt = ""/>
                <img src = {image2} className = "Slider_image" alt = ""/>
                <img src = {image3} className = "Slider_image" alt = ""/>
                <img src = {image4} className = "Slider_image" alt = ""/>
                <img src = {image5} className = "Slider_image" alt = ""/>
                <img src = {image6} className = "Slider_image" alt = ""/>
                <img src = {image7} className = "Slider_image" alt = ""/>
                <img src = {image8} className = "Slider_image" alt = ""/>
                <img src = {image9} className = "Slider_image" alt = ""/>
                <img src = {image10} className = "Slider_image" alt = ""/>
                <img src = {image11} className = "Slider_image" alt = ""/>
                <img src = {image12} className = "Slider_image" alt = ""/>
                <img src = {image13} className = "Slider_image" alt = ""/>
                <img src = {image14} className = "Slider_image" alt = ""/>
                <img src = {image15} className = "Slider_image" alt = ""/>
            </AliceCarousel>
        </div>
    )
}

export default Slider;