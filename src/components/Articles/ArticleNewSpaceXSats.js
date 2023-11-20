import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './article.css';

import starslink from "../../images/starlink-sat.png";

function ArticleNewSpaceXSats() {

    document.title = "SpaceX вивела на орбіту ще 22 інтернет-супутники Starlink"

    return (
        <div id={'articlePage'}>
            <Header/>
            <article>
                <h1>SpaceX вивела на орбіту ще 22 інтернет-супутники Starlink</h1>
                <img src={starslink} alt={"Супутник Starlink"}/>
                <p>Американська компанія SpaceX у понеділок, 20 листопада, запустила на орбіту ще 22 інтернет-супутники Starlink.</p>
                <p>Про це повідомляється на сторінці компанії у соцмережі Х, передає Укрінформ.</p>
                <p>Запуск ракети-носія Falcon 9 був з каліфорнійської космічної бази Ванденбер. Після цього перший ступінь Falcon 9 повернувся на Землю, приземлившись на безпілотному кораблі Of Course I Still Love You у Тихому океані.</p>
                <p>Пізніше компанія підтвердила розгортання супутників на орбіті.</p>
                <p>На даний момент на низькій навколоземній орбіті працює понад 5000 супутників Starlink.</p>
            </article>
            <Footer/>
        </div>
    );
}

export default ArticleNewSpaceXSats;