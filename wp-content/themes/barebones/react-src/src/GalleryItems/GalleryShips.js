import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./GalleryShips/Ship_Retvisan1.png"
import image2 from "./GalleryShips/Ship_Retvisan2.png"
import image3 from "./GalleryShips/Ship_Retvisan3.png"
import image4 from "./GalleryShips/Ship_Retvisan4.png"
import image5 from "./GalleryShips/Ship_Retvisan5.png"
import image6 from "./GalleryShips/Ship_Retvisan6.png"
import image9 from "./GalleryShips/Ship_Retvisan9.png"
import image10 from "./GalleryShips/Ship_Retvisan10.png"
import image11 from "./GalleryShips/Ship_Retvisan11.png"
import image12 from "./GalleryShips/Ship_Retvisan12.png"
import image13 from "./GalleryShips/Ship_Retvisan13.png"
/* ----------- */
import imageVaryag1 from "./GalleryShips/Ship_Varyag1.png"
import imageVaryag2 from "./GalleryShips/Ship_Varyag2.png"
import imageVaryag3 from "./GalleryShips/Ship_Varyag3.png"
import imageVaryag4 from "./GalleryShips/Ship_Varyag4.png"
import imageVaryag5 from "./GalleryShips/Ship_Varyag5.png"
import imageVaryag6 from "./GalleryShips/Ship_Varyag6.png"
import imageVaryag7 from "./GalleryShips/Ship_Varyag7.png"
import imageVaryag8 from "./GalleryShips/Ship_Varyag8.png"
import imageVaryag9 from "./GalleryShips/Ship_Varyag9.png"
import imageVaryag10 from "./GalleryShips/Ship_Varyag10.png"
import imageVaryag11 from "./GalleryShips/Ship_Varyag11.png"
import imageVaryag12 from "./GalleryShips/Ship_Varyag12.png"
import imageVaryag13 from "./GalleryShips/Ship_Varyag13.png"
import imageVaryag14 from "./GalleryShips/Ship_Varyag14.png"
import imageVaryag15 from "./GalleryShips/Ship_Varyag15.png"
import imageVaryag16 from "./GalleryShips/Ship_Varyag16.png"
import imageVaryag17 from "./GalleryShips/Ship_Varyag17.png"
import imageVaryag18 from "./GalleryShips/Ship_Varyag18.png"
import imageVaryag19 from "./GalleryShips/Ship_Varyag19.png"
import imageVaryag20 from "./GalleryShips/Ship_Varyag20.png"
import imageVaryag21 from "./GalleryShips/Ship_Varyag21.png"
import imageVaryag22 from "./GalleryShips/Ship_Varyag22.png"
import imageVaryag23 from "./GalleryShips/Ship_Varyag23.png"
/* ------------ */
import imageSSSR1 from "./GalleryShips/Ship_SSSR1.png"
import imageSSSR2 from "./GalleryShips/Ship_SSSR2.png"
import imageSSSR3 from "./GalleryShips/Ship_SSSR3.png"
import imageSSSR4 from "./GalleryShips/Ship_SSSR4.png"
import imageSSSR5 from "./GalleryShips/Ship_SSSR5.png"
import imageSSSR6 from "./GalleryShips/Ship_SSSR6.png"
import imageSSSR7 from "./GalleryShips/Ship_SSSR7.png"
import imageSSSR8 from "./GalleryShips/Ship_SSSR8.png"
import imageSSSR9 from "./GalleryShips/Ship_SSSR9.png"
import imageSSSR10 from "./GalleryShips/Ship_SSSR10.png"
import imageSSSR11 from "./GalleryShips/Ship_SSSR11.png"
import "../App.css";

function GalleryShips(props) {
    return (
        <div className="Basic_Page">
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {image1} className = "Slider_imageShips" alt = ""/>
                <img src = {image2} className = "Slider_imageShips" alt = ""/>
                <img src = {image3} className = "Slider_imageShips" alt = ""/>
                <img src = {image4} className = "Slider_imageShips" alt = ""/>
                <img src = {image5} className = "Slider_imageShips" alt = ""/>
                <img src = {image6} className = "Slider_imageShips" alt = ""/>
                <img src = {image9} className = "Slider_imageShips" alt = ""/>
                <img src = {image10} className = "Slider_imageShips" alt = ""/>
                <img src = {image11} className = "Slider_imageShips" alt = ""/>
                <img src = {image12} className = "Slider_imageShips" alt = ""/>
                <img src = {image13} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <div className="Gallery_text">
                <h1 className="Gallery_title">Корабли</h1>
                <div className="Basic_buttons">
                    <button type="button" className="Gallery_button" onClick={() => props.setTitle("Homepage")}>На главную</button>
                    <button type="button" className="Gallery_button" onClick={() => props.setTitle("page2")}>В галерею</button>
                </div>
                <h3 className="Basic_title2">Модель эскадренного броненосца "Ретвизан".</h3>
                <p className="Basic_mainText">Модель броненосца выполнена в масштабе 1:100.<p>Неоднократный победитель и призер международных конкурсов и соревнований, проводимых федерацией Naviga, что подтверждает высокий уровень исполнения модели.</p></p>
            </div>
            <div className="Gallery_text">
                <h3 className="Ships_title2">Модель крейсера 1 ранга "Варяг".</h3>
                <p className="Ships_mainText">Выполнена в масштабе 1:100.</p>
            </div>
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {imageVaryag1} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag2} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag3} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag4} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag5} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag6} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag7} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag8} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag9} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag10} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag11} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag12} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag13} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag14} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag15} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag16} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag17} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag18} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag19} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag20} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag21} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag22} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVaryag23} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {imageSSSR1} className = "Slider_imageShips" alt = ""/>
                <img src = {imageSSSR2} className = "Slider_imageShips" alt = ""/>
                <img src = {imageSSSR3} className = "Slider_imageShips" alt = ""/>
                <img src = {imageSSSR4} className = "Slider_imageShips" alt = ""/>
                <img src = {imageSSSR5} className = "Slider_imageShips" alt = ""/>
                <img src = {imageSSSR6} className = "Slider_imageShips" alt = ""/>
                <img src = {imageSSSR7} className = "Slider_imageShips" alt = ""/>
                <img src = {imageSSSR8} className = "Slider_imageShips" alt = ""/>
                <img src = {imageSSSR9} className = "Slider_imageShips" alt = ""/>
                <img src = {imageSSSR10} className = "Slider_imageShips" alt = ""/>
                <img src = {imageSSSR11} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <div className="Gallery_text">
                <h3 className="Basic_title2">Модель линейного корабля "Советский союз".</h3>
                <p className="Basic_mainText">Выполнена в масштабе 1:200</p>
            </div>
        </div>
    )

}

export default GalleryShips;