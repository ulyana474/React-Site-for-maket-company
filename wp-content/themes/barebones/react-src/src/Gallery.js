import React from "react";
import "./App.css";
import Architecture from "./Gallery/Architecture.png"
import Ships from "./Gallery/Ships.png"
import Army from "./Gallery/Army.png"
import Avia from "./Gallery/Avia.png"
import Auto from "./Gallery/Auto.png"
import Transport from "./Gallery/Transport.png"

function Gallery() {

    return <div className="Catalog_block">
        <div className="Img_with_text"> 
            <img src = {Ships} className="Catalog_item item1" />
            <p className="Img_descr">Корабли</p>
        </div>
        <div className="Img_with_text">
            <img src = {Army} className="Catalog_item item2"/> 
            <p className="Img_descr">Макеты военной техники</p>
        </div>
        <div className="Img_with_text">
            <img src = {Architecture} className="Catalog_item item3"/>
            <p className="Img_descr">Архитектура</p>
        </div>
        <div className="Img_with_text">
            <img src = {Avia} className="Catalog_item item4"/>
            <p className="Img_descr">Авиационные макеты</p>
        </div>
        <div className="Img_with_text">
            <img src = {Transport} className="Catalog_item item5"/>
            <p className="Img_descr">Общественный транспорт</p>
        </div>
        <div className="Img_with_text">
            <img src = {Auto} className="Catalog_item item6"/>
            <p className="Img_descr">Автомобили и тракторы</p>
        </div>
</div> 

}

export default Gallery;