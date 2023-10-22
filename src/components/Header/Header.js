import React from "react";
import '../../global.css';
import  './Header.css';
import {Link} from "react-router-dom";
import Logo from "../../images/logo.svg";

class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to={"/"} classID={"anchor-logo"}>
                    <img src={Logo} className={'space-logo'} alt={"Logo" }/>
                    <span> </span>
                    <h1>Космічна пригода</h1>
                </Link>
                <span className={'head'}></span>
                <Link to={"/news"} className={"nav-link"}>Новини</Link>
                <Link to={"/articles"} className={"nav-link"}>Статті</Link>
                <Link to={"/gallery"} className={"nav-link"}>Медіа</Link>
                <Link to={"/maps"} className={"nav-link"}>Карти</Link>
            </header>

        );
    }
}

export default Header;