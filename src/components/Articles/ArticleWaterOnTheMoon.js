import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './article.css';

import img1 from '../../images/earth-moon.png';

function ArticleWaterOnTheMoon() {

    document.title = "Земля сприяє утворенню води на Місяці"

    return (
        <div id={'articlePage'}>
            <Header/>
            <article>
                <h1>Земні електрони можуть утворювати воду на Місяці, - дослідження</h1>
                <p>Це нове відкриття може допомогти пояснити походження водяного льоду, раніше виявленого в районах
                    темної сторони Місяця.</p>
                <img src={img1} alt={"Вид на Землю з поверхні Місяця"}/>
                <div className={'textArea'}>
                    <p>Дослідження показало, що високоенергетичні електрони в плазмі Землі можуть сприяти утворенню води
                        на поверхні Місяця.</p>
                    <p>Результати були опубліковані групою дослідників під керівництвом вченого з Гавайського
                        університету у Маноа в журналі Nature Astronomy з використанням даних Chandrayaan-1 -
                        індійського місячного зонда, що працював з жовтня 2008 року по серпень 2009 року, передає
                        Newsweek.</p>
                    <p>Дані показали, що електрони Землі можуть сприяти процесам вивітрювання Місяця, йдеться в
                        дослідженні.</p>
                    <p>Земля оточена силовим полем, що називається магнітосферою, яке захищає її від руйнівного
                        випромінювання Сонця. Це силове поле виштовхується назовні та змінює свою форму під дією
                        сонячного вітру, який являє собою порив заряджених частинок. Це утворює довгий хвіст на нічній
                        стороні Землі. Хвіст складається з високоенергетичних електронів та іонів, джерелом яких є
                        сонячний вітер та наша планета.</p>
                    <p>Цей сонячний вітер потім досягає місячної поверхні та оточує її. Вчені вважають, що електрони,
                        принесені сюди вітром, є одним із перших способів утворення води на Місяці.</p>
                    <p>"Це являє собою природну лабораторію для вивчення процесів формування поверхневої води Місяця.
                        Коли Місяць знаходиться поза хвостом магнітосфери, його поверхня "бомбардується" сонячним
                        вітром. Всередині магнітосферного хвоста майже немає протонів сонячного вітру, і очікується, що
                        утворення води впаде майже до нуля", - говорить Шуай Лі, провідний автор дослідження та помічник
                        наукового співробітника Школи океанічних і земних наук Маноа (SOEST).</p>
                    <p>Розуміння того, скільки води знаходиться на місячній поверхні, допомагає астрономам зрозуміти, як
                        розвивався і формувався Місяць.</p>
                    <p>Вода також могла б стати цінним ресурсом для майбутніх космічних місій людей, оскільки вона могла
                        б підтримувати їх протягом тривалого періоду часу. У якийсь момент у майбутньому це може зробити
                        Місяць придатним для проживання людей.</p>
                    <p>Це нове відкриття може допомогти пояснити походження водяного льоду, раніше виявленого в районах
                        темної сторони Місяця.</p>
                    <p>"На мій подив, спостереження дистанційного зондування показали, що утворення води в хвості
                        магнітосфери Землі майже ідентичне часу, коли Місяць знаходився поза хвостом магнітосфери
                        Землі", - сказав Лі.</p>
                    <p>"Це вказує на те, що в магнітосферному хвості можуть відбуватися додаткові процеси формування або
                        нові джерела води, не пов'язані безпосередньо з імплантацією протонів сонячного вітру. Зокрема,
                        високоенергетичне випромінювання електронів має такий самий вплив, як протони сонячного вітру",
                        - додав він.</p>
                </div>
            </article>
            <Footer/>
        </div>
    );
}

export default ArticleWaterOnTheMoon;