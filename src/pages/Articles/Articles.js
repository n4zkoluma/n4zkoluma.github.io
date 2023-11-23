import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import React from "react";
import NewsArticle from "../../components/Articles/NewsArticle/NewsArticle";
import './Articles.css';

import black_hole from "../../images/black-hole.png";
import shark_in_space from "../../images/shark-in-space.png";
import earth_moon from "../../images/earth-moon.png";
import planets from "../../images/planets.png";
import starlink_sat from "../../images/starlink-sat.png";
import juice_station from "../../images/juice-zond.png";
import moon from "../../images/moon.png";
import chandrayaan from "../../images/chandrayaan-3.png";
import webb from "../../images/james-webb-1.png";


function Articles() {

    document.title = "Всі статті"

    return (
        <div>
            <Header/>
            <NewsArticle
                $pathToPic={starlink_sat}
                $altText={'Спутник Starlink'}
                $H1Text={'SpaceX вивела на орбіту ще 22 інтернет-супутники Starlink'}
                $articleText={'Про це повідомляється на сторінці компанії у соцмережі Х.'}
                $anchor={'/articles/NewSpaceXSats'}
                $imgStyle={{}}
            />
            <NewsArticle
                $pathToPic={black_hole}
                $altText={""}
                $H1Text={"Вчені знайшли найстарішу чорну діру"}
                $articleText={"Науковці виявили найстарішу чорну діру, яка утворилася вже через 470 млн років після Великого вибуху."}
                $anchor={"/articles/BlackHole"}
            />
            <NewsArticle
                $pathToPic={chandrayaan}
                $altText={""}
                $H1Text={"В Індії показали першу світлину Місяця після посадки місії"}
                $articleText={"Індійська організація космічних досліджень і розробок (ISRO) показала перше фото Місяця, яке було зроблене після успішної посадки місії Chandrayaan-3 на супутник Землі."}
                $anchor={"/articles/IndiaNoTheMoon"}
            />
            <NewsArticle
                $pathToPic={earth_moon}
                $altText={""}
                $H1Text={"Земні електрони можуть утворювати воду на Місяці, - дослідження"}
                $articleText={"Дослідження показало, що високоенергетичні електрони в плазмі Землі можуть сприяти утворенню води на поверхні Місяця. "}
                $anchor={"/articles/WaterOnTheMoon"}
            />
            <NewsArticle
                $pathToPic={juice_station}
                $altText={""}
                $H1Text={"АКС JUICE здійснила один із найбільших маневрів на шляху до Юпітера"}
                $articleText={"Автоматична космічна станція JUICE від Європейського космічного агентства (ESA) здійснила один із найбільших і найважливіших маневрів у своїй восьмирічній подорожі до планети Юпітер."}
                $anchor={"/articles/StationJUICE"}
            />
            <NewsArticle
                $pathToPic={webb}
                $altText={""}
                $H1Text={"James Webb показав туманність у сузір'ї Ліри, схожу на бублик"}
                $articleText={"Космічний телескоп NASA/ESA/CSA James Webb зробив нову фотографію туманності Кільце у сузір'ї Ліри."}
                $anchor={"/articles/JamesWebb"}
            />
            <NewsArticle
                $pathToPic={shark_in_space}
                $altText={"Акула в космосі"}
                $H1Text={"Акули за час існування облетіли Чумацький Шлях два рази"}
                $articleText={"За цей час вони майже не змінились і пережили чотири масових вимирання живих істот на Землі."}
                $anchor={"/articles/SpaceSharks"}
                $imgStyle={{objectPosition: "left !important"}}
            />
            <NewsArticle
                $pathToPic={planets}
                $altText={" "}
                $H1Text={"Тривалість року на планетах"}
                $articleText={"Планети Сонячної системи постійно рухаються по своїх орбітах і обертаються навколо своїх осей. " +
                    "Деяким планетам для цього потрібні дні, а деяким століття."}
                $anchor={"/articles/PlanetsSolarYears"}
            />
            <NewsArticle
                $pathToPic={moon}
                $altText={""}
                $H1Text={"Японія вдруге спробує запустити посадковий модуль на Місяць"}
                $articleText={"Японська компанія Mitsubishi Heavy Industries повідомила, що відкладений старт ракети-носія H2A із посадковим модулем Японського космічного агентства на Місяць, призначено на четвер, 7 вересня."}
                $anchor={"/articles/JapanOnTheMoon"}
            />
            <Footer/>
        </div>
    );
}

export default Articles;