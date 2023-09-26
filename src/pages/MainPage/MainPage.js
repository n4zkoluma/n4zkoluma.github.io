import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import './MainPage.css';

import space_1 from "../../images/space.webp";
import space_2 from '../../images/space (12).png';
import space_3 from '../../images/space (1).png';

function MainPage() {
    return (
        <div>
            <Header/>
            <button id="toggle" type="button">☰</button>

            <article id="intro" className="index">
                <section className="image">
                    <img src={space_1} id="image-article-1" alt=""/>
                </section>
                <section className="text">
                    <h2>Космічна галузь: що це таке і чому вона важлива?</h2>
                    <p>Космічна галузь - це сфера діяльності, пов'язана з дослідженням і використанням космосу. До
                        космічної
                        галузі
                        відносяться такі напрямки, як:</p>
                    <ul>
                        <li><strong>Космічні дослідження</strong> - вивчення космосу за допомогою космічних апаратів,
                            таких як
                            супутники, космічні зонди, а також космічні кораблі.
                        </li>
                        <li><strong>Космічні технології</strong> - розробка і виробництво космічних апаратів і систем.
                        </li>
                        <li><strong>Космічний туризм</strong> - подорожі в космос для туристів.</li>
                    </ul>
                    <p>Космічна галузь є важливою частиною сучасної науки і техніки. Вона дозволяє нам дізнатися більше
                        про
                        Всесвіт,
                        а також розвивати нові технології, які мають застосування в інших сферах життєдіяльності
                        людини.</p>
                    <h2>Чому вивчення космосу важливе для дітей?</h2>
                    <p>Космічна галузь - це захоплююча і інноваційна галузь, яка може зацікавити дітей. Вона дозволяє
                        дітям
                        дізнатися більше про Всесвіт, а також про те, як працює наука і технологія.</p>
                    <h2>Ось кілька причин, чому такі знання важливі для дітей:</h2>
                    <ul>
                        <li><strong>Розвиває пізнавальні інтереси.</strong> Космічна галузь є джерелом нових знань і
                            відкриттів.
                            Вона може зацікавити дітей наукою і технологією, а також стимулювати їх до навчання і
                            дослідження.
                        </li>
                        <li><strong>Формує творче мислення.</strong> Космічна галузь вимагає творчого підходу до
                            вирішення
                            проблем.
                            Вона може допомогти дітям розвинути свій творчий потенціал.
                        </li>
                        <li><strong>Розвиває критичне мислення.</strong> Космічна галузь пов'язана з аналізом і оцінкою
                            інформації.
                            Вона може допомогти дітям розвинути навички критичного мислення.
                        </li>
                    </ul>
                    <p>Якщо ви хочете зацікавити свою дитину космосом, на нашому сайті представлені різні матеріали, які
                        допоможуть
                        дітям дізнатися більше про космос і космічну галузь.</p>
                </section>
            </article>
            <article className="index">
                <section className="text">
                    <h2>Космічна галузь: що це таке і чому вона важлива?</h2>
                    <p>Космічна галузь - це сфера діяльності, пов'язана з дослідженням і використанням космосу. До
                        космічної
                        галузі
                        відносяться такі напрямки, як:</p>
                    <ul>
                        <li><strong>Космічні дослідження</strong> - вивчення космосу за допомогою космічних апаратів,
                            таких як
                            супутники, космічні зонди, а також космічні кораблі.
                        </li>
                        <li><strong>Космічні технології</strong> - розробка і виробництво космічних апаратів і систем.
                        </li>
                        <li><strong>Космічний туризм</strong> - подорожі в космос для туристів.</li>
                    </ul>
                    <p>Космічна галузь є важливою частиною сучасної науки і техніки. Вона дозволяє нам дізнатися більше
                        про
                        Всесвіт,
                        а також розвивати нові технології, які мають застосування в інших сферах життєдіяльності
                        людини.</p>
                    <h2>Чому вивчення космосу важливе для дітей?</h2>
                    <p>Космічна галузь - це захоплююча і інноваційна галузь, яка може зацікавити дітей. Вона дозволяє
                        дітям
                        дізнатися більше про Всесвіт, а також про те, як працює наука і технологія.</p>
                    <h2>Ось кілька причин, чому такі знання важливі для дітей:</h2>
                    <ul>
                        <li><strong>Розвиває пізнавальні інтереси.</strong> Космічна галузь є джерелом нових знань і
                            відкриттів.
                            Вона може зацікавити дітей наукою і технологією, а також стимулювати їх до навчання і
                            дослідження.
                        </li>
                        <li><strong>Формує творче мислення.</strong> Космічна галузь вимагає творчого підходу до
                            вирішення
                            проблем.
                            Вона може допомогти дітям розвинути свій творчий потенціал.
                        </li>
                        <li><strong>Розвиває критичне мислення.</strong> Космічна галузь пов'язана з аналізом і оцінкою
                            інформації.
                            Вона може допомогти дітям розвинути навички критичного мислення.
                        </li>
                    </ul>
                    <p>Якщо ви хочете зацікавити свою дитину космосом, на нашому сайті представлені різні матеріали, які
                        допоможуть
                        дітям дізнатися більше про космос і космічну галузь.</p>
                </section>
                <section className="image">
                    <img src={space_2} id="image-article-2" alt=""/>
                </section>
            </article>
            <article className="index">
                <section className="text">
                    <h2>Космічна галузь: що це таке і чому вона важлива?</h2>
                    <p>Космічна галузь - це сфера діяльності, пов'язана з дослідженням і використанням космосу. До
                        космічної
                        галузі
                        відносяться такі напрямки, як:</p>
                    <ul>
                        <li><strong>Космічні дослідження</strong> - вивчення космосу за допомогою космічних апаратів,
                            таких як
                            супутники, космічні зонди, а також космічні кораблі.
                        </li>
                        <li><strong>Космічні технології</strong> - розробка і виробництво космічних апаратів і систем.
                        </li>
                        <li><strong>Космічний туризм</strong> - подорожі в космос для туристів.</li>
                    </ul>
                    <p>Космічна галузь є важливою частиною сучасної науки і техніки. Вона дозволяє нам дізнатися більше
                        про
                        Всесвіт,
                        а також розвивати нові технології, які мають застосування в інших сферах життєдіяльності
                        людини.</p>
                    <h2>Чому вивчення космосу важливе для дітей?</h2>
                    <p>Космічна галузь - це захоплююча і інноваційна галузь, яка може зацікавити дітей. Вона дозволяє
                        дітям
                        дізнатися більше про Всесвіт, а також про те, як працює наука і технологія.</p>
                </section>
                <section className="image">
                    <img src={space_3} id="image-article-3" alt=""/>
                </section>
                <section className="text">
                    <h2>Ось кілька причин, чому такі знання важливі для дітей:</h2>
                    <ul>
                        <li><strong>Розвиває пізнавальні інтереси.</strong> Космічна галузь є джерелом нових знань і
                            відкриттів.
                            Вона може зацікавити дітей наукою і технологією, а також стимулювати їх до навчання і
                            дослідження.
                        </li>
                        <li><strong>Формує творче мислення.</strong> Космічна галузь вимагає творчого підходу до
                            вирішення
                            проблем.
                            Вона може допомогти дітям розвинути свій творчий потенціал.
                        </li>
                        <li><strong>Розвиває критичне мислення.</strong> Космічна галузь пов'язана з аналізом і оцінкою
                            інформації.
                            Вона може допомогти дітям розвинути навички критичного мислення.
                        </li>
                    </ul>
                    <p>Якщо ви хочете зацікавити свою дитину космосом, на нашому сайті представлені різні матеріали, які
                        допоможуть
                        дітям дізнатися більше про космос і космічну галузь.</p>
                </section>
            </article>

            <Footer/>
        </div>
    );

}

export default MainPage;