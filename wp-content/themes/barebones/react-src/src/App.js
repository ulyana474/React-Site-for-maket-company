import React, {useState} from "react";
import "./App.css";
import AsideMenu from "./AsideMenu";
import Footer from "./Footer"
import GalleryArchitect from "./GalleryItems/GalleryArchitect"
import GalleryArmy from "./GalleryItems/GalleryArmy"
import GalleryAvia from "./GalleryItems/GalleryAvia";
import GalleryShips from "./GalleryItems/GalleryShips";
import GalleryTractor from "./GalleryItems/GalleryTractor";
import GalleryTram from "./GalleryItems/GalleryTram";
import Homepage from "./Homepage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

function App() {

    const [title, setTitle] = useState("Homepage");

    return (
        <div>
            {title === "Architecture" && <GalleryArchitect setTitle = {setTitle}/>}
            {title === "Ships" && <GalleryShips setTitle = {setTitle}/>}
            {title === "Army" && <GalleryArmy setTitle = {setTitle}/>}
            {title === "Avia" && <GalleryAvia setTitle = {setTitle}/>}
            {title === "Tractor" && <GalleryTractor setTitle = {setTitle}/>}
            {title === "Tram" && <GalleryTram setTitle = {setTitle}/>}
            {title === "Homepage" && <div className="Menu_Homepage"><AsideMenu setTitle = {setTitle}/><Homepage setTitle = {setTitle}/></div>}
            {title === "page2" && <div className="Menu_page2"><SecondPage title = {title} setTitle = {setTitle}/></div>}
            {title === "page3" && <div><ThirdPage title = {title} setTitle = {setTitle}/></div>}
            <Footer />
        </div>
    );
}

export default App;
