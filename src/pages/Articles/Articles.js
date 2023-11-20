import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import React from "react";
import NewsArticle from "../../components/Articles/NewsArticle/NewsArticle";
import './Articles.css';

import picture1 from "../../images/space_24.png";
import picture2 from "../../images/shark-in-space.png";
import picture3 from "../../images/space_25.png";
import picture4 from "../../images/space_26.png";

const Articles = () => {

    document.title = "Всі Статті"

    return (
        <div>
            <Header/>
            <NewsArticle
                pathToPic={picture1}
                $altText={""}
                $H1Text={"Вчені знайшли найстарішу чорну діру"}
                $articleText={"Науковці виявили найстарішу чорну діру, яка утворилася вже через 470 млн років після Великого вибуху."}
                ANCHOR={"/articles/BlackHole"}
            />
            <NewsArticle
                pathToPic={picture2}
                $altText={""}
                $H1Text={"Акули за час існування облетіли Чумацький Шлях два рази"}
                $articleText={"За цей час вони майже не змінились і пережили чотири масових вимирання живих істот на Землі."}
                ANCHOR={"/articles/SpaceSharks"}
            />
            <NewsArticle
                pathToPic={picture4}
                $altText={""}
                $H1Text={"Тривалість року на планетах"}
                $articleText={"Планети Сонячної системи постійно рухаються по своїх орбітах і обертаються навколо своїх осей. " +
                    "Всі планети обертаються навколо Сонця. Але час, потрібний для одного оберту навколо нашої центральної зірки, різний, пише Astronomy. " +
                    "Деяким планетам для цього потрібні дні, а деяким століття."}
                ANCHOR={"/articles/PlanetsSolarYears"}
            />
            <NewsArticle
                pathToPic={picture3}
                $altText={""}
                $H1Text={"Земні електрони можуть утворювати воду на Місяці, - дослідження"}
                $articleText={"Дослідження показало, що високоенергетичні електрони в плазмі Землі можуть сприяти утворенню води на поверхні Місяця. "}
                ANCHOR={"/articles/WaterOnTheMoon"}

                imgStyle={{objectPosition: 'center'}}
            />
            <Footer/>
        </div>
    );
}

export default Articles;