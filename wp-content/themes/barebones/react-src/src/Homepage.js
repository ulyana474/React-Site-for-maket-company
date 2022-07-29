import React, {useState} from "react";
import Header from "./Header";
import "./App.css";

function Homepage(props) {

    return <div className="Header_page">
                <Header />
                <div className="Page">{props.title}</div>
            </div>
}

export default Homepage;