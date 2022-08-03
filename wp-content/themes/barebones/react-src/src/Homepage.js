import React from "react";
import Header from "./Header";
import "./App.css";

function Homepage(props) {

    return <div className="Header_page">
                <Header />
                <div className="Page">{/* {props.title} */}
                    <div className="News_block">
                        <div className="News_item"></div>
                    </div>  
                    <div className="Catalog">Catalog</div>
                    <div className="Catalog_block">
                        <div className="Catalog_item item1"></div>    
                        <div className="Catalog_item item2"></div>  
                        <div className="Catalog_item item3"></div>  
                        <div className="Catalog_item item4"></div>  
                        <div className="Catalog_item item5"></div>  
                        <div className="Catalog_item item6"></div>
                    </div>              
                </div>
            </div>
}

export default Homepage;