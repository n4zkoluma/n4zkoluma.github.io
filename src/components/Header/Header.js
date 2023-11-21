import React from "react";
import './Header.css';
import {Link} from "react-router-dom";
import Logo from "../../images/logo.svg";

class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to={'/'} className={'imgHome'}>
                    <img src={Logo} alt={'Logo'}/>
                </Link>
                <Link to={'/articles'}>Всі статті</Link>
                <Link to={'/media'}>Медіа</Link>
                <Link to={'/feedback'}>Зворотній зв'язок</Link>
            </header>

        );
    }
}

export default Header;