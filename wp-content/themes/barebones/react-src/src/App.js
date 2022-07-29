import React, {useState} from "react";
import "./App.css";
import AsideMenu from "./AsideMenu";
import Homepage from "./Homepage";

function App() {

    const [title, setTitle] = useState("Homepage");

    return (
        <div className="Menu_Homepage">
            <AsideMenu setTitle = {setTitle}/>
            <Homepage  title = {title} />
        </div>
    );
}

export default App;
