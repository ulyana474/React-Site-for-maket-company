import React from "react";
import "./App.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {

    return <div className="Footer_block">
        <div className="Footer_text">
            <p className="Footer_name">ТЕХНОМАКЕТ <br/> МАКЕТЫ И МОДЕЛИ ТЕХНИКИ <br/><b className="Tel">+375 29 685-25-15</b> <br/><b className="Tel">+7 812 336-5024</b> <p className="Footer_c">© 2011-2019 «ТЕХНОМАКЕТ».</p></p>
            <div className="Footer_icons">
                <InstagramIcon className="Insta_icon"></InstagramIcon>
                <TwitterIcon className="Twitter_icon"></TwitterIcon>
                <FacebookIcon className="Facebook_icon"></FacebookIcon>
            </div>
        </div>
    </div>
}

export default Footer;