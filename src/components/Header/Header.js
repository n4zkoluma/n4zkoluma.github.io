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
                <search>
                    <form action={"http://www.google.com/search"} method={"get"}>>
                        <input type={'search'} name={'q'} placeholder={'Пошук..'}/>
                    </form>
                </search>
                <Link to={'/news'}>Новини</Link>
                <Link to={'/'}>Медіа</Link>
            </header>

        );
    }
}

export default Header;