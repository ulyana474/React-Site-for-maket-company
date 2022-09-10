import React from "react";
import "./App.css";

function ThirdPage(props) {

    return <div className="Menu_page3">
        <p className="Contact_text">Контакты</p>
        <button type="button" className="Gallery_button" onClick={() => props.setTitle("Homepage")}>На главную</button>
        <div className="Contact_field">
            <div className="Field_text">
                <p className="Field_text_Minsk"><b>Офис в Минске:</b><br/>Минск, Беларусь<br/>ул. Кнорина, 55, оф. 50<br/>т: +375 29 685-2515<br/>al-r2006@yandex.ru</p>
                <p className="Field_text_Spb"><b>Офис в Санкт-Петербурге:</b><br/>Санкт-Петербург, РФ<br/>ул. Профессора Попова д.38<br/>т: ‎+7 812 336-5024</p>
            </div>
                <form>
                    <div className="Input_field">
                        <input type="text" id = "name" name="firstname" placeholder="Имя *"></input>
                        <input type="text" id = "email" name="email" placeholder="Email *"></input>
                        <input type="text" id = "message" name="message" placeholder="Сообщение"></input>
                        <input type="submit" id = "Button_submit" value="Отправить"></input>
                    </div>
                </form>
            </div>
            <div className="Map">
            <iframe src="https://maps.google.com/maps?q=%D0%9C%D0%B8%D0%BD%D1%81%D0%BA,%20%D1%83%D0%BB.%20%D0%9A%D0%BD%D0%BE%D1%80%D0%B8%D0%BD%D0%B0,%2055,%20%D0%BE%D1%84%D0%B8%D1%81%2050&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id = "First_Map" scrolling="no" frameborder="0"></iframe>   
            <iframe src="https://maps.google.com/maps?q=%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%20%D1%83%D0%BB.%20%D0%9F%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%81%D0%BE%D1%80%D0%B0%20%D0%9F%D0%BE%D0%BF%D0%BE%D0%B2%D0%B0%20%D0%B4.38&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id = "Second_Map" scrolling="no"  frameborder="0"></iframe>
            </div>
    </div>
}

export default ThirdPage;