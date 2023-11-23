import React from "react";
import './Header.css';
import {Link} from "react-router-dom";
import Logo from "../../images/logo.svg";

class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to={'/'} id={'imgHome'} className={'navbar'}>
                    <img src={Logo} alt={'Logo'}/>
                </Link>
                <Link to={'/articles'} className={'navbar'}>Всі статті</Link>
                <Link to={'/media'} className={'navbar'}>Медіа</Link>
                <Link to={'/feedback'} className={'navbar'}>Зворотній зв'язок</Link>
            </header>

        );
    }
}

export default Header;