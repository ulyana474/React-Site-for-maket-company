import React, {useState} from "react";
import "./App.css";
import AsideMenu from "./AsideMenu";
import Footer from "./Footer"
import Homepage from "./Homepage";

function App() {

    const [title, setTitle] = useState("Homepage");

    return (
        <div>
            <div className="Menu_Homepage">
                <AsideMenu setTitle = {setTitle}/>
                <Homepage  title = {title} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
