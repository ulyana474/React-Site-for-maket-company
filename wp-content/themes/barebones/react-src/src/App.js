import React, {useState} from "react";
import "./App.css";
import AsideMenu from "./AsideMenu";
import Footer from "./Footer"
import Homepage from "./Homepage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

function App() {

    const [title, setTitle] = useState("Homepage");

    return (
        <div>
            {title === "Homepage" && <div className="Menu_Homepage"><AsideMenu setTitle = {setTitle}/><Homepage  title = {title} setTitle = {setTitle}/></div>}
            {title === "page2" && <div className="Menu_page2"><SecondPage title = {title} setTitle = {setTitle}/></div>}
            {title === "page3" && <div><ThirdPage title = {title} setTitle = {setTitle}/></div>}
            <Footer />
        </div>
    );
}

export default App;
