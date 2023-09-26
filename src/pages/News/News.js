import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import React from "react";
import NewsArticle from "../../components/NewsArticle/NewsArticle";
import './News.css';

import picture1 from "../../images/space (9).png";
import picture2 from "../../images/space (10).png";
import picture3 from "../../images/space (11).png";

const News = () => {
    return (
        <div>
            <Header/>
            <NewsArticle
                pathToPic={picture1}
                $altText={""}
                $H1Text={"Якийсь крутий заголовок крутої новини"} /*сюда б всунуть лангииии*/
                $articleText={"Якийсь крутий текст якоїсь крутої новини"}
                ANCHOR={""}
            />
            <NewsArticle
                pathToPic={picture2}
                $altText={""}
                $H1Text={"Якийсь крутий заголовок крутої новини"} /*сюда б всунуть лангииии*/
                $articleText={"Якийсь крутий текст якоїсь крутої новини"}
                ANCHOR={""}
            />
            <NewsArticle
                pathToPic={picture3}
                $altText={""}
                $H1Text={"Якийсь крутий заголовок крутої новини"} /*сюда б всунуть лангииии*/
                $articleText={"Якийсь крутий текст якоїсь крутої новини"}
                ANCHOR={""}
            />
            <Footer/>
        </div>
    );
}

export default News;