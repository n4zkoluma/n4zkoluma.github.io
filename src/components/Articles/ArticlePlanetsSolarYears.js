import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './article.css';

import img from '../../images/planets.png';

function ArticlePlanetsSolarYears() {

    document.title = "Скільки триває рік на планетах?"

    return (
        <div id={'articlePage'}>
            <Header/>
            <article>
                <h1>Астрономи розповіли, скільки триває рік на кожній планеті Сонячної системи</h1>
                <p>Меркурій, найближча до Сонця планета, здійснює повний оберт за 88 днів. Найдальша від Сонця планета,
                    Нептун, здійснює один оберт навколо Сонця за 165 років.</p>
                <img src={img} alt={'Планети'}/>
                <div className={'textArea'}>
                    <p>Найкоротший рік у Сонячній системі за Меркурієм. Він триває 88 земних днів. Найдовший - у Нептуна
                        -
                        165 земних років.</p>
                    <p>Планети Сонячної системи постійно рухаються по своїх орбітах і обертаються навколо своїх осей.
                        Всі
                        планети обертаються навколо Сонця. Але час, потрібний для одного оберту навколо нашої
                        центральної
                        зірки, різний, пише Astronomy. Деяким планетам для цього потрібні дні, а деяким століття.</p>
                    <ul>
                        <li>Меркурій - 88 днів;</li>
                        <li>Венера - 225 днів;</li>
                        <li>Земля - 365 днів;</li>
                        <li>Марс - 687 днів;</li>
                        <li>Юпітер - 4331 день або 12 земних років.</li>
                        <li>Сатурн - 10747 днів або 29,4 року.</li>
                        <li>Уран - 30 589 днів або 84 роки.</li>
                        <li>Нептун - 59 800 днів або 165 років.</li>
                    </ul>
                    <p>Роки на інших планетах вимірюються тропічним роком Землі, який триває близько 365 сонячних днів;
                        один
                        сонячний день - це час, за який наша планета обертається повністю навколо своєї осі, що
                        вимірюється
                        положенням сонця над даною точкою. Рік вимірюється тим, скільки часу потрібно планеті на оберт
                        навколо Сонця, а один повний оберт так і називається обертом.</p>
                </div>
            </article>
            <Footer/>
        </div>
    );
}

export default ArticlePlanetsSolarYears;