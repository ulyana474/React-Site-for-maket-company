import React from "react";
import "./App.css";

function AsideMenu(props) {

    return <div className="App-aside-menu">
                <div className="App-menu-item" id = "Item1" onClick={() => props.setTitle("Homepage")}></div>
                <div className="App-menu-item" id = "Item2" onClick={() => props.setTitle("page2")}></div>
                <div className="App-menu-item" id = "Item3" onClick={() => props.setTitle("page3")}></div>
                <div className="App-menu-item" id = "Item4" onClick={() => props.setTitle("page4")}></div>
            </div>
}

export default AsideMenu;
