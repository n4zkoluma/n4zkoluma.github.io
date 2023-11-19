import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import React from "react";
import NewsArticle from "../../components/Articles/NewsArticle/NewsArticle";
import './News.css';

import picture1 from "../../images/space_24.png";
import picture2 from "../../images/shark-in-space.png";
import picture3 from "../../images/space_25.png";
import picture4 from "../../images/space_26.png";

const News = () => {
    return (
        <div>
            <Header/>
            <NewsArticle
                pathToPic={picture1}
                $altText={""}
                $H1Text={"Вчені знайшли найстарішу чорну діру"} 
                $articleText={"Науковці виявили найстарішу чорну діру, яка утворилася вже через 470 млн років після Великого вибуху."}
                ANCHOR={"/articles/Black-Hole"}
            />
            <NewsArticle
                pathToPic={picture2}
                $altText={""}
                $H1Text={"Акули за час існування облетіли Чумацький Шлях два рази"} 
                $articleText={"За цей час вони майже не змінились і пережили чотири масових вимирання живих істот на Землі."}
                ANCHOR={"/articles/Space-Sharks"}
            />
            <NewsArticle
                pathToPic={picture3}
                $altText={""}
                $H1Text={"Тривалість року на планетах"}
                $articleText={"Планети Сонячної системи постійно рухаються по своїх орбітах і обертаються навколо своїх осей. " +
                    "Всі планети обертаються навколо Сонця. Але час, потрібний для одного оберту навколо нашої центральної зірки, різний, пише Astronomy. " +
                    "Деяким планетам для цього потрібні дні, а деяким століття."}
                ANCHOR={"/articles/Planets-Solar-Years"}
            />
            <NewsArticle
                pathToPic={picture4}
                $altText={""}
                $H1Text={"Земна атмосфера сприяє утворенню води на Місяці"} 
                $articleText={"Якийсь крутий текст якоїсь крутої новини"}
                ANCHOR={"/articles/Water-on-the-Moon"}
            />
            <Footer/>
        </div>
    );
}

export default News;