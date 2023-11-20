import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import './article.css';

function ArticleJapanOnTheMoon() {

    document.title = "Японія вдруге спробує запустити посадковий модуль на Місяць"

    return(
        <div id={'articlePage'}>
            <Header/>
            <h1>🦈☝️</h1>
            <Footer/>
        </div>
    );
}

export default ArticleJapanOnTheMoon;