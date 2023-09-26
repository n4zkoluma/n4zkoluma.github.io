import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Articles.css';
import IndMoonExpl from '../../images/IndianMoonExplorer.webp';


const ARTICLE_1 = () => {

    return (
        <div>
            <article>
                <section>
                    <img src={IndMoonExpl} alt={'Індійський космічний зонд'}/>
                </section>
                <section className={'text'}>
                    <h2>Індія здійснила успішну посадку на Місяць.</h2>
                    <p>Індія успішно здійснила посадку місії на Місяць. Уточнюється, що країна посадила місію
                        Chandrayaan-3.
                        <br/>
                        Про це повідомляє Індійська організація космічних досліджень і розробок, ISRO.</p>
                    <p>«Chandrayaan-3 здійснила успішну м'яку посадку на Місяць!» – заявили в ISRO.</p>

                    <p>За даними Space.com, Індія стала четвертою країною після СРСР, США та Китаю, яка здійснила
                        посадку місії на Місяць.</p>
                </section>
            </article>
        </div>
    );
}

const Articles = () => {
    return (
        <div>
            <Header/>
            <ARTICLE_1/>
            <Footer/>
        </div>
    );
}

export default Articles;