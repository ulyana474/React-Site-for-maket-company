import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./GalleryAvia/Messerschmitt1.png"
import image2 from "./GalleryAvia/Messerschmitt2.png"
import image3 from "./GalleryAvia/Messerschmitt3.png"
import image4 from "./GalleryAvia/Messerschmitt4.png"
/* ----------- */
import imageHeinkel1 from "./GalleryAvia/Heinkel1.png"
import imageHeinkel2 from "./GalleryAvia/Heinkel2.png"
import imageHeinkel3 from "./GalleryAvia/Heinkel3.png"
import imageHeinkel4 from "./GalleryAvia/Heinkel4.png"
import imageHeinkel5 from "./GalleryAvia/Heinkel5.png"
import imageHeinkel6 from "./GalleryAvia/Heinkel6.png"
import imageHeinkel7 from "./GalleryAvia/Heinkel7.png"
/* ------------ */
import imageJunkers1 from "./GalleryAvia/Junkers1.png"
import imageJunkers2 from "./GalleryAvia/Junkers2.png"
import imageJunkers3 from "./GalleryAvia/Junkers3.png"
import imageJunkers4 from "./GalleryAvia/Junkers4.png"
import imageJunkers5 from "./GalleryAvia/Junkers5.png"
import imageJunkers6 from "./GalleryAvia/Junkers6.png"
import imageJunkers7 from "./GalleryAvia/Junkers7.png"
/* ------------ */
import imageLa1 from "./GalleryAvia/La1.png"
import imageLa2 from "./GalleryAvia/La2.png"
import imageLa3 from "./GalleryAvia/La3.png"
import imageLa4 from "./GalleryAvia/La4.png"
import "../App.css";

function GalleryAvia(props) {
    return (
        <div className="Basic_Page">
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {image1} className = "Slider_imageShips" alt = ""/>
                <img src = {image2} className = "Slider_imageShips" alt = ""/>
                <img src = {image3} className = "Slider_imageShips" alt = ""/>
                <img src = {image4} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <div className="Gallery_text">
                <h1 className="Gallery_title">Авиация</h1>
                <div className="Basic_buttons">
                    <button type="button" className="Gallery_button" onClick={() => props.setTitle("Homepage")}>На главную</button>
                    <button type="button" className="Gallery_button" onClick={() => props.setTitle("page2")}>В галерею</button>
                </div>
                <h3 className="Basic_title2">Реплика самолета Мессершмитт BF-109Е (Messerschmitt BF-109E).</h3>
                <p className="Basic_mainText">Выполнена в масштабе М1:1. Длина самолета - 9 м, размах крыльев - 10 м.<p>Экспонируется в Белорусском государственном музее истории Великой Отечественной войны.</p><p>Одномоторный поршневой истребитель-низкоплан, стоявший на вооружении Люфтваффе и ВВС различных стран около 30 лет.</p></p>
            </div>
            <div className="Gallery_text">
                <h3 className="Ships_title2">Реплика самолета Хенкель Хе-111 (Heinkel He 111).</h3>
                <p className="Ships_mainText">Масштаб 1:5, длина макета 3,6 м, размах крыльев 4,6 м.<br/>Экспонируется в Белорусском государственном музее истории Великой Отечественной войны.<p>Немецкий средний бомбардировщик, один из основных бомбардировщиков люфтваффе. </p></p>
            </div>
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {imageHeinkel1} className = "Slider_imageShips" alt = ""/>
                <img src = {imageHeinkel2} className = "Slider_imageShips" alt = ""/>
                <img src = {imageHeinkel3} className = "Slider_imageShips" alt = ""/>
                <img src = {imageHeinkel4} className = "Slider_imageShips" alt = ""/>
                <img src = {imageHeinkel5} className = "Slider_imageShips" alt = ""/>
                <img src = {imageHeinkel6} className = "Slider_imageShips" alt = ""/>
                <img src = {imageHeinkel7} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {imageJunkers1} className = "Slider_imageShips" alt = ""/>
                <img src = {imageJunkers2} className = "Slider_imageShips" alt = ""/>
                <img src = {imageJunkers3} className = "Slider_imageShips" alt = ""/>
                <img src = {imageJunkers4} className = "Slider_imageShips" alt = ""/>
                <img src = {imageJunkers5} className = "Slider_imageShips" alt = ""/>
                <img src = {imageJunkers6} className = "Slider_imageShips" alt = ""/>
                <img src = {imageJunkers7} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <div className="Gallery_text">
                <h3 className="Basic_title2">Реплика самолета Юнкерс Ю-87 (Junkers Ju 87).</h3>
                <p className="Basic_mainText">Масштаб 1:5, длина макета 2,2 м, размах крыльев 2,8 м.<br/>Экспонируется в Белорусском государственном музее истории Великой Отечественной войны.<p>Одномоторный двухместный пикирующий бомбардировщик и штурмовик времён Великой Отечественной войны.</p></p>
            </div>
            <div className="Gallery_text">
                <h3 className="Basic_title2">Реплика самолета Ла-5.</h3>
                <p className="Basic_mainText">Масштаб 1:5, длина макета 1,8 м, размах крыльев 2,0 м.<br/>Экспонируется в Белорусском государственном музее истории Великой Отечественной войны.<p>Ла-5 — одномоторный истребитель созданный ОКБ-21 под руководством С. А. Лавочкина в 1942 года в г. Горьком. Самолёт представлял собой одноместный моноплан цельнодеревянной конструкции с убирающимся шасси и закрытой кабиной.</p></p>
            </div>
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {imageLa1} className = "Slider_imageShips" alt = ""/>
                <img src = {imageLa2} className = "Slider_imageShips" alt = ""/>
                <img src = {imageLa3} className = "Slider_imageShips" alt = ""/>
                <img src = {imageLa4} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
        </div>
    )

}

export default GalleryAvia;