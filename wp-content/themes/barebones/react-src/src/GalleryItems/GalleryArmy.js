import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./GalleryArmy/Polonez1.png"
import image2 from "./GalleryArmy/Polonez2.png"
import image3 from "./GalleryArmy/Polonez3.png"
import image4 from "./GalleryArmy/Polonez4.png"
import image5 from "./GalleryArmy/Polonez5.png"
import image6 from "./GalleryArmy/Polonez6.png"
import image7 from "./GalleryArmy/Polonez7.png"
/* ----------- */
import imageAnten1 from "./GalleryArmy/Anten1.png"
import imageAnten2 from "./GalleryArmy/Anten2.png"
import imageAnten3 from "./GalleryArmy/Anten3.png"
import imageAnten4 from "./GalleryArmy/Anten4.png"
import imageAnten5 from "./GalleryArmy/Anten5.png"
import imageAnten6 from "./GalleryArmy/Anten6.png"
import imageAnten7 from "./GalleryArmy/Anten7.png"
/* ------------ */
import imageGaubiz1 from "./GalleryArmy/Gaubiz1.png"
import imageGaubiz2 from "./GalleryArmy/Gaubiz2.png"
import imageGaubiz3 from "./GalleryArmy/Gaubiz3.png"
import imageGaubiz4 from "./GalleryArmy/Gaubiz4.png"
import imageGaubiz5 from "./GalleryArmy/Gaubiz5.png"
import imageGaubiz6 from "./GalleryArmy/Gaubiz6.png"
import imageGaubiz7 from "./GalleryArmy/Gaubiz7.png"
import imageGaubiz8 from "./GalleryArmy/Gaubiz8.png"
import imageGaubiz9 from "./GalleryArmy/Gaubiz9.png"
/* ------------ */
import imageBastion1 from "./GalleryArmy/Bastion1.png"
import imageBastion2 from "./GalleryArmy/Bastion2.png"
import imageBastion3 from "./GalleryArmy/Bastion3.png"
import imageBastion4 from "./GalleryArmy/Bastion4.png"
import imageBastion5 from "./GalleryArmy/Bastion5.png"
import imageBastion6 from "./GalleryArmy/Bastion6.png"
/* ------------ */
import imageBTR1 from "./GalleryArmy/BTR1.png"
import imageBTR2 from "./GalleryArmy/BTR2.png"
import imageBTR3 from "./GalleryArmy/BTR3.png"
import imageBTR4 from "./GalleryArmy/BTR4.png"
import imageBTR5 from "./GalleryArmy/BTR5.png"
import imageBTR6 from "./GalleryArmy/BTR6.png"
/* ------------ */
import imageBuk1 from "./GalleryArmy/Buk1.png"
import imageBuk2 from "./GalleryArmy/Buk2.png"
import imageBuk3 from "./GalleryArmy/Buk3.png"
import imageBuk4 from "./GalleryArmy/Buk4.png"
import imageBuk5 from "./GalleryArmy/Buk5.png"
import imageBuk6 from "./GalleryArmy/Buk6.png"
import imageBuk7 from "./GalleryArmy/Buk7.png"
import imageBuk8 from "./GalleryArmy/Buk8.png"
/* ------------ */
import imageKarakal1 from "./GalleryArmy/Karakal1.png"
import imageKarakal2 from "./GalleryArmy/Karakal2.png"
import imageKarakal3 from "./GalleryArmy/Karakal3.png"
import imageKarakal4 from "./GalleryArmy/Karakal4.png"
import imageKarakal5 from "./GalleryArmy/Karakal5.png"
/* ------------ */
import imageTank1 from "./GalleryArmy/Tank1.png"
import imageTank2 from "./GalleryArmy/Tank2.png"
import imageTank3 from "./GalleryArmy/Tank3.png"
import imageTank4 from "./GalleryArmy/Tank4.png"
import imageTank5 from "./GalleryArmy/Tank5.png"
import imageTank6 from "./GalleryArmy/Tank5.png"
/* ------------ */
import imageTZM1 from "./GalleryArmy/TZM1.png"
import imageTZM2 from "./GalleryArmy/TZM2.png"
import imageTZM3 from "./GalleryArmy/TZM3.png"
import imageTZM4 from "./GalleryArmy/TZM4.png"
import imageTZM5 from "./GalleryArmy/TZM5.png"
import imageTZM6 from "./GalleryArmy/TZM6.png"
import imageTZM7 from "./GalleryArmy/TZM7.png"
/* ------------ */
import imageVostok1 from "./GalleryArmy/Vostok1.png"
import imageVostok2 from "./GalleryArmy/Vostok2.png"
import imageVostok3 from "./GalleryArmy/Vostok3.png"
import imageVostok4 from "./GalleryArmy/Vostok4.png"
import imageVostok5 from "./GalleryArmy/Vostok5.png"
import imageVostok6 from "./GalleryArmy/Vostok6.png"
import imageVostok7 from "./GalleryArmy/Vostok7.png"
import imageVostok8 from "./GalleryArmy/Vostok1.png"
import imageVostok9 from "./GalleryArmy/Vostok2.png"
import imageVostok10 from "./GalleryArmy/Vostok3.png"
import imageVostok11 from "./GalleryArmy/Vostok4.png"
import imageVostok12 from "./GalleryArmy/Vostok5.png"
import imageVostok13 from "./GalleryArmy/Vostok6.png"
/* ------------ */
import imageTungusk1 from "./GalleryArmy/Tungusk1.png"
import imageTungusk2 from "./GalleryArmy/Tungusk2.png"
import imageTungusk3 from "./GalleryArmy/Tungusk3.png"
import imageTungusk4 from "./GalleryArmy/Tungusk4.png"
import imageTungusk5 from "./GalleryArmy/Tungusk5.png"
import imageTungusk6 from "./GalleryArmy/Tungusk6.png"
import imageTungusk7 from "./GalleryArmy/Tungusk7.png"
import "../App.css";

function GalleryArmy(props) {
    return (
        <div className="Basic_Page">
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {image1} className = "Slider_imageShips" alt = ""/>
                <img src = {image2} className = "Slider_imageShips" alt = ""/>
                <img src = {image3} className = "Slider_imageShips" alt = ""/>
                <img src = {image4} className = "Slider_imageShips" alt = ""/>
                <img src = {image5} className = "Slider_imageShips" alt = ""/>
                <img src = {image6} className = "Slider_imageShips" alt = ""/>
                <img src = {image7} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <div className="Gallery_text">
                <h1 className="Gallery_title">Военная техника</h1>
                <div className="Basic_buttons">
                    <button type="button" className="Gallery_button" onClick={() => props.setTitle("Homepage")}>На главную</button>
                    <button type="button" className="Gallery_button" onClick={() => props.setTitle("page2")}>В галерею</button>
                </div>
                <h3 className="Basic_title2">РСЗО "Полонез".</h3>
                <p className="Basic_mainText">Выставочный макет новейшей разработки белорусского военно-промышленного комплекса (ВПК) реактивная система залпового огня (РСЗО) "Полонез"; масштаб 1:10.<p>Вес готового макета более 15 кг; длина более 1200 мм.</p><p>Подробнее о <a className="Polonez_link">РСЗО "Полонез".</a></p></p>
            </div>
            <div className="Gallery_text">
                <h3 className="Ships_title2">Антенный комплекс.</h3>
                <p className="Ships_mainText">Выставочный макет антенного комплекса на шасси МЗКТ, масштаб 1:20.<p>Высота прототипа - 40м, высота макета - 2м.</p><p>Макет выполнен сборно-разборным для обеспечения возможности его транспортировки. В собранном виде в специальной упаковке может перевозиться в салоне самолета.</p></p>
            </div>
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {imageAnten1} className = "Slider_imageShips" alt = ""/>
                <img src = {imageAnten2} className = "Slider_imageShips" alt = ""/>
                <img src = {imageAnten3} className = "Slider_imageShips" alt = ""/>
                <img src = {imageAnten4} className = "Slider_imageShips" alt = ""/>
                <img src = {imageAnten5} className = "Slider_imageShips" alt = ""/>
                <img src = {imageAnten6} className = "Slider_imageShips" alt = ""/>
                <img src = {imageAnten7} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {imageGaubiz1} className = "Slider_imageShips" alt = ""/>
                <img src = {imageGaubiz2} className = "Slider_imageShips" alt = ""/>
                <img src = {imageGaubiz3} className = "Slider_imageShips" alt = ""/>
                <img src = {imageGaubiz4} className = "Slider_imageShips" alt = ""/>
                <img src = {imageGaubiz5} className = "Slider_imageShips" alt = ""/>
                <img src = {imageGaubiz6} className = "Slider_imageShips" alt = ""/>
                <img src = {imageGaubiz7} className = "Slider_imageShips" alt = ""/>
                <img src = {imageGaubiz8} className = "Slider_imageShips" alt = ""/>
                <img src = {imageGaubiz9} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <div className="Gallery_text">
                <h3 className="Basic_title2">Гаубица Б-4.</h3>
                <p className="Basic_mainText">Экспонируется в Белорусском государственном музее истории Великой Отечественной войны (Минск, Беларусь)</p>
            </div>
            <div className="Gallery_text">
                <h3 className="Basic_title2">Береговой ракетный комплекс "Бастион".</h3>
                <p className="Basic_mainText">Действующая радиоуправляемая модель ракетного комплекса "Бастион".<p>Масштаб 1:10.</p></p>
            </div>
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {imageBastion1} className = "Slider_imageShips" alt = ""/>
                <img src = {imageBastion2} className = "Slider_imageShips" alt = ""/>
                <img src = {imageBastion3} className = "Slider_imageShips" alt = ""/>
                <img src = {imageBastion4} className = "Slider_imageShips" alt = ""/>
                <img src = {imageBastion5} className = "Slider_imageShips" alt = ""/>
                <img src = {imageBastion6} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {imageBTR1} className = "Slider_imageShips" alt = ""/>
                <img src = {imageBTR2} className = "Slider_imageShips" alt = ""/>
                <img src = {imageBTR3} className = "Slider_imageShips" alt = ""/>
                <img src = {imageBTR4} className = "Slider_imageShips" alt = ""/>
                <img src = {imageBTR5} className = "Slider_imageShips" alt = ""/>
                <img src = {imageBTR6} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <div className="Gallery_text">
                <h3 className="Basic_title2">Модернизированный БТР-70.</h3>
                <p className="Basic_mainText">Выставочный макет модернизированного БТР-70.<p>Масштаб 1:10.</p></p>
            </div>
            <div className="Gallery_text">
                <h3 className="Basic_title2">Зенитный ракетный комплекс "Бук".</h3>
                <p className="Basic_mainText">Действующий выставочный макет ЗРК "Бук".<p>Макет позволяет рассмотреть внутреннее устройство некоторых отсеков машины.</p><p>Масштаб 1:12.</p></p>
            </div>
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {imageBuk1} className = "Slider_imageShips" alt = ""/>
                <img src = {imageBuk2} className = "Slider_imageShips" alt = ""/>
                <img src = {imageBuk3} className = "Slider_imageShips" alt = ""/>
                <img src = {imageBuk4} className = "Slider_imageShips" alt = ""/>
                <img src = {imageBuk5} className = "Slider_imageShips" alt = ""/>
                <img src = {imageBuk6} className = "Slider_imageShips" alt = ""/>
                <img src = {imageBuk7} className = "Slider_imageShips" alt = ""/>
                <img src = {imageBuk8} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {imageKarakal1} className = "Slider_imageShips" alt = ""/>
                <img src = {imageKarakal2} className = "Slider_imageShips" alt = ""/>
                <img src = {imageKarakal3} className = "Slider_imageShips" alt = ""/>
                <img src = {imageKarakal4} className = "Slider_imageShips" alt = ""/>
                <img src = {imageKarakal5} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <div className="Gallery_text">
                <h3 className="Basic_title2">ПРК "Каракал".</h3>
                <p className="Basic_mainText">Выставочный макет передвижного противотанкового ракетного комплекса "Каракал".<p>Масштаб 1:10.</p></p>
            </div>
            <div className="Gallery_text">
                <h3 className="Basic_title2">Танк Т-26.</h3>
                <p className="Basic_mainText">Масштаб 1:10.Пластик, металл, металлическое литье.<p>Экспонируется в Белорусском государственном музее истории Великой отечественной войны (Минск, Беларусь).</p></p>
            </div>
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {imageTank1} className = "Slider_imageShips" alt = ""/>
                <img src = {imageTank2} className = "Slider_imageShips" alt = ""/>
                <img src = {imageTank3} className = "Slider_imageShips" alt = ""/>
                <img src = {imageTank4} className = "Slider_imageShips" alt = ""/>
                <img src = {imageTank5} className = "Slider_imageShips" alt = ""/>
                <img src = {imageTank6} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {imageTZM1} className = "Slider_imageShips" alt = ""/>
                <img src = {imageTZM2} className = "Slider_imageShips" alt = ""/>
                <img src = {imageTZM3} className = "Slider_imageShips" alt = ""/>
                <img src = {imageTZM4} className = "Slider_imageShips" alt = ""/>
                <img src = {imageTZM5} className = "Slider_imageShips" alt = ""/>
                <img src = {imageTZM6} className = "Slider_imageShips" alt = ""/>
                <img src = {imageTZM7} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <div className="Gallery_text">
                <h3 className="Basic_title2">ТЗМ.</h3>
                <p className="Basic_mainText">Модель транспортно-заезжающей машины (ТЗМ).<p>Масштаб 1:10.</p><p>Модернизированный отсек выполнен частично прозрачным.</p></p>
            </div>
            <div className="Gallery_text">
                <h3 className="Basic_title2">Двухкоординатная радиолокационная система "Восток-Э/Д".</h3>
                <p className="Basic_mainText">Действующий выставочный макет РЛС "Восток-Э/Д", масштаб 1:20.<p>Макет выполнен трансформирующимся с возможностью с демонстрации системы развертывания радара.</p><p>Размах полотна радара макета 1200 мм.</p></p>
            </div>
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {imageVostok1} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVostok2} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVostok3} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVostok4} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVostok5} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVostok6} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVostok7} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVostok8} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVostok9} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVostok10} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVostok11} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVostok12} className = "Slider_imageShips" alt = ""/>
                <img src = {imageVostok13} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <AliceCarousel autoPlay autoPlayInterval="5000">
                <img src = {imageTungusk1} className = "Slider_imageShips" alt = ""/>
                <img src = {imageTungusk2} className = "Slider_imageShips" alt = ""/>
                <img src = {imageTungusk3} className = "Slider_imageShips" alt = ""/>
                <img src = {imageTungusk4} className = "Slider_imageShips" alt = ""/>
                <img src = {imageTungusk5} className = "Slider_imageShips" alt = ""/>
                <img src = {imageTungusk6} className = "Slider_imageShips" alt = ""/>
                <img src = {imageTungusk7} className = "Slider_imageShips" alt = ""/>
            </AliceCarousel>
            <div className="Gallery_text">
                <h3 className="Basic_title2">Зенитный пушечно-ракетный комплекс (ЗРПК) "Тунгуска-М1".</h3>
                <p className="Basic_mainText">Выставочный макет ЗРПК "Тунгуска-М1", масштаб 1:10.</p>
            </div>
        </div>
    )

}

export default GalleryArmy;