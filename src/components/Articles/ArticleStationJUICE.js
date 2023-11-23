import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./article.css";
import CustomImage from "../Utils/customImage";
import juice from "../../images/juice-zond.png";
import juice_2 from "../../images/juice-zond-2.png";

function ArticleStationJUICE() {

    document.title = "Космічна станція JUICE здійснила один із найбільших маневрів на шляху до Юпітера"

    return (
        <div id={'articlePage'}>
            <Header/>
            <article>
                <h1>Космічна станція JUICE здійснла один із найбільших маневрів на шляху до Юпітера️</h1>
                <CustomImage
                    $imageSrc={juice}
                    $imageAlt={"Зонд на фоні Землі"}
                />
                <h6 style={{fontFamily: "'Raleway SemiBold', sans-serif", fontWeight: "normal"}}>JUpiter ICy moons Explorer — автоматична міжпланетна станція Європейського космічного агентства для
                    вивчення системи Юпітера, головним чином — супутників Ганімеда, Європи і Каллісто на предмет
                    наявності у цих місяців підповерхневих океанів рідкої води.
                </h6>
                <p>Станція JUICE від Європейського космічного агентства (ESA) здійснила один із найбільших і
                    найважливіших маневрів у своїй восьмирічній подорожі до планети Юпітер.</p>
                <CustomImage
                    $imageSrc={juice_2}
                    $imageAlt={"Описуваний маневр"}
                    $style={{height: "60vh", objectFit: "contain"}}
                />
                <p>Використовуючи свій головний двигун, JUICE змінила свою орбіту навколо Сонця, щоб вийти на правильну
                    траєкторію.</p>
                <p>Маневр тривав 43 хвилини. Загалом було спалено майже 10% усього запасу палива космічного корабля.</p>
                <p>Його мета - провести детальні спостереження за гігантською газовою планетою та її трьома великими
                    супутниками з океаном – Ганімедом, Каллісто та Європою.</p>
            </article>
            <Footer/>
        </div>
    );
}

export default ArticleStationJUICE;
