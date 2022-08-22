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
                        <input type="submit" id = "Button_submit" value="Submit"></input>
                    </div>
                </form>
        </div>
    </div>
}

export default ThirdPage;