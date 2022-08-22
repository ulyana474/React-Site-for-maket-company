import React, {useState} from "react";
import Gallery from "./Gallery";
import Header from "./Header";
import Slider from "./Slider/Slider";
import "./App.css";

function Homepage(props) {

    return <div className="Header_page">
                <Header />
                <div className="Page">{/* {props.title} */}
                    <div className="Slider_About">
                        <Slider />
                        <div className="About_us">
                            <b className="About_us_bold">О нас</b>
                            <p><b className = "About_us_bold">Техномакет</b> - макетная мастерская, предлагает высококачественные масштабные модели и 3d копии техники, макеты для выставок и презентаций.<br/><p>Уже более 10 лет мы выполняем индивидуальные заказы наших Клиентов, что сделало нас доверенными партнерами для многих европейских заказчиков.</p><p>Мы работаем для:</p><ul><li><span>музеев,</span></li><li><span>выставок и презентаций,</span></li><li><span>производителей сложной техники,</span></li><li><span>образовательных центров.</span></li></ul></p>
                        </div>
                    </div>
                    <div className="We_do"><p className="We_do_text">Мы делаем: <a className="We_do_underline">архитектурные макеты, </a> <a className="We_do_underline">масштабные макеты и модели техники (включая действующие макеты),</a> <a className="We_do_underline">макеты кораблей,</a> <a className="We_do_underline"> диорамы,</a> <a className="We_do_underline">реплики оружия</a> и многое другое...</p><p className="We_do_text">Также мы можем изготовить: <a className="We_do_underline">презентационные подставки и колпаки,</a> <a className="We_do_underline">транспортные короба и кофры.</a></p></div>
                    <div className="Catalog">Галерея</div>
                    <button type="button" className="Gallery_button" onClick={() => props.setTitle("page2")}>Перейти в галерею</button>
                    <Gallery />              
                </div>
            </div>
}

export default Homepage;