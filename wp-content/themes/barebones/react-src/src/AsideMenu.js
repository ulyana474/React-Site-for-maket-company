import React from "react";
import "./App.css";
import HomeIcon from '@mui/icons-material/Home';
import ImageIcon from '@mui/icons-material/Image';
import CallIcon from '@mui/icons-material/Call';

function AsideMenu(props) {

    return <div className="App-aside-menu">
                <HomeIcon sx = {{size:'large'}} className="App-menu-item" id = "Item1" onClick={() => props.setTitle("Homepage")}></HomeIcon>
                <ImageIcon className="App-menu-item" id = "Item2" onClick={() => props.setTitle("page2")}></ImageIcon >
                <CallIcon className="App-menu-item" id = "Item3" onClick={() => props.setTitle("page3")}></CallIcon>
            </div>
}

export default AsideMenu;
