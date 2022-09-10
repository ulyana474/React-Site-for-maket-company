import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./GalleryTram/Tram1.png"
import image2 from "./GalleryTram/Tram2.png"
import image3 from "./GalleryTram/Tram3.png"
import image4 from "./GalleryTram/Tram4.png"
import "../App.css";

function GalleryTram(props) {
    return (
        <div className="Basic_Page">
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {image1} className = "Slider_imageShips" alt = ""/>
                <img src = {image2} className = "Slider_imageShips" alt = ""/>
                <img src = {image3} className = "Slider_imageShips" alt = ""/>
                <img src = {image4} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <div className="Gallery_text">
                <h1 className="Gallery_title">Автомобили и тракторы</h1>
                <div className="Basic_buttons">
                    <button type="button" className="Gallery_button" onClick={() => props.setTitle("Homepage")}>На главную</button>
                    <button type="button" className="Gallery_button" onClick={() => props.setTitle("page2")}>В галерею</button>
                </div>
                <h3 className="Basic_title2">Макет трактора МТЗ-2.</h3>
                <p className="Basic_mainText">Выполнен в масштабе 1:10 (М1:10).<br/>Экспонируется в Белорусском государственном музее истории Великой Отечественной войны.<p>МТЗ-2 — марка колёсного универсально-пропашного трактора, выпускавшегося Минским тракторным заводом с 1954 по 1958 год. Первый массовый советский колесный универсально-пропашной трактор на пневматических шинах. Не оснащался кабиной. </p></p>
            </div>
        </div>
    )

}

export default GalleryTram;