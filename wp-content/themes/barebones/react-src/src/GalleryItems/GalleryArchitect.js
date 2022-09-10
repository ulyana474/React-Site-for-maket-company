import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./GalleryArchitect/imageArch1.png"
import image2 from "./GalleryArchitect/imageArch2.png"
import image3 from "./GalleryArchitect/imageArch3.png"
import image4 from "./GalleryArchitect/imageArch4.png"
import image5 from "./GalleryArchitect/imageArch5.png"
import image6 from "./GalleryArchitect/imageArch6.png"
import image7 from "./GalleryArchitect/imageArch7.png"
import image8 from "./GalleryArchitect/imageArch8.png"
import image9 from "./GalleryArchitect/imageArch9.png"
import image10 from "./GalleryArchitect/imageArch10.png"
import image11 from "./GalleryArchitect/imageArch11.png"
import image12 from "./GalleryArchitect/imageArch12.png"
import image13 from "./GalleryArchitect/imageArch13.png"
import image14 from "./GalleryArchitect/imageArch14.png"
import image15 from "./GalleryArchitect/imageArch15.png"
import "../App.css";

function GalleryArchitect(props) {
    return (
        <div className="Basic_Page">
            <AliceCarousel height = "25vh" autoPlay autoPlayInterval="5000">
                <img src = {image1} className = "Slider_imageArch" alt = ""/>
                <img src = {image2} className = "Slider_imageArch" alt = ""/>
                <img src = {image3} className = "Slider_imageArch" alt = ""/>
                <img src = {image4} className = "Slider_imageArch" alt = ""/>
                <img src = {image5} className = "Slider_imageArch" alt = ""/>
                <img src = {image6} className = "Slider_imageArch" alt = ""/>
                <img src = {image7} className = "Slider_imageArch" alt = ""/>
                <img src = {image8} className = "Slider_imageArch" alt = ""/>
                <img src = {image9} className = "Slider_imageArch" alt = ""/>
                <img src = {image10} className = "Slider_imageArch" alt = ""/>
                <img src = {image11} className = "Slider_imageArch" alt = ""/>
                <img src = {image12} className = "Slider_imageArch" alt = ""/>
                <img src = {image13} className = "Slider_imageArch" alt = ""/>
                <img src = {image14} className = "Slider_imageArch" alt = ""/>
                <img src = {image15} className = "Slider_imageArch" alt = ""/>
            </AliceCarousel>
            <div className="Gallery_text">
                <h1 className="Gallery_title">Архитектурные макеты</h1>
                <div className="Basic_buttons">
                    <button type="button" className="Gallery_button" onClick={() => props.setTitle("Homepage")}>На главную</button>
                    <button type="button" className="Gallery_button" onClick={() => props.setTitle("page2")}>В галерею</button>
                </div>
                <h3 className="Basic_title2">Архитектурный макет многофункционального комплекса группы «Газпром» - «Газпром Центр» в Минске. </h3>
                <p className="Basic_mainText">Масштаб макета - 1:400, наружные габариты - 1000х1200мм.<p>Одним из главных требований Заказчика была передача дневного и ночного внешнего вида объекта максимально близкой к оригинальной.</p><br/>В соответствии с проектом на макете воссозданы конструкции зданий комплекса со стеклянными фасадами и внутренними несущими каркасами. Для придания реалистичности выполнена уникальная внутренняя динамическая подсветка отдельных помещений на разных этажах зданий, при этом было использовано более 2000 миниатюрных светодиодных источников.<br/>«Ночной» вид комплекс приобретает при выключении верхней подсветки, установленной в крышке колпака и включении более полусотни уличных фонарей, освещающих дороги и тротуары макета. Каждый фонарь - это миниатюрная конструкция, выполненная из трубок диаметром 0.8-0.5мм с проводами, протянутыми от основания к светодиоду.<br/>На макете располагаются около 400 фигурок людей и около 100 автомобилей и автобусов. Размер человека в масштабе 1:400 составляет 4,5мм, длина машины - 10-12мм. На макете можно рассмотреть одежду людей, марку автомобилей и такие мелочи, как зеркала заднего вида и дизайн колесных дисков.<br/>Макет выполнен сборно-разборным, укомплектован тумбой, стеклянным колпаком, транспортной упаковкой.</p>
            </div>
        </div>
    )

}

export default GalleryArchitect;