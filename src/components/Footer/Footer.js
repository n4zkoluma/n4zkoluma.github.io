import React from "react";
import './Footer.css';

class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div>
                    Для зворотнього зв'язку:<br/>
                    <a href={"mailto:nvkolomiiets@gmail.com"}>nvkolomiiets@gmail.com</a>
                </div>
                <span style={{minWidth: '2vw'}}/>
            </footer>
        );
    }
}

export default Footer;