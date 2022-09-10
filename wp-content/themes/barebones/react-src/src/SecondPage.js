import React,{useState} from "react";
import Gallery from "./Gallery";
import "./App.css";
import Weapon from "./Gallery/Weapon.png"
import Medicine from "./Gallery/Medicine.png"
import Souvenirs from "./Gallery/Souvenirs.png"

function SecondPage(props) {

    return (
    <div className="Second_page">
        <div className="Button_text">
            <p className="Second_text">Масштабные макеты и модели</p>
            <button type="button" className="Gallery_button" onClick={() => props.setTitle("Homepage")}>На главную</button>
        </div>
        <Gallery title = {props.title}/>
        <div className="Catalog_block2">
            <div className="Img_with_text"> 
                <img src = {Weapon} className="Catalog_item item7" />
                <p className="Img_descr">Реплики оружия</p>
            </div>
            <div className="Img_with_text"> 
                <img src = {Medicine} className="Catalog_item item8" />
                <p className="Img_descr" id = "Medicine_text">Медицинское <br/>оборудование</p>
            </div>
            <div className="Img_with_text"> 
                <img src = {Souvenirs} className="Catalog_item item9" />
                <p className="Img_descr">Сувениры</p>
            </div>
        </div>
    </div>
    );
}

export default SecondPage;