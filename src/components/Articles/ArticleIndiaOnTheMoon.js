import './article.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CustomImage from "../Utils/customImage";

import chandrayaan from "../../images/chandrayaan-3.png";
import irso from "../../images/irso.png";

function ArticleIndiaOnTheMoon() {

    document.title = "В Індії показали першу світлину Місяця після посадки місії"


    return (
        <div id={'articlePage'}>
            <Header/>
            <article>
                <h1>В Індії показали першу світлину Місяця після посадки місії</h1>
                <CustomImage
                    $imageSrc={chandrayaan}
                    $imageAlt={'Посадковий модуль Chandrayaan-3'}
                    $style={{height: "60vh", objectPosition: "bottom"}}
                />
                <p>Індійська організація космічних досліджень і розробок (ISRO) показала перше фото Місяця, яке було
                    зроблене після успішної посадки місії Chandrayaan-3 на супутник Землі.</p>
                <CustomImage
                    $imageSrc={irso}
                    $imageAlt={'Перше зображення, отримане з посадкового модуля'}
                />
                <p>«Місія Chandrayaan-3: Зображення, що було зроблене після приземлення»,- заявили в організації.</p>
                <p>Зазначається, що на самій світлині показано частину місця посадки Chandrayaan-3.</p>
                <p>«Також видно ногу посадкового модуля та тінь, що її супроводжує. Chandrayaan-3 вибрав відносно рівний
                    район на поверхні Місяця» - додали в ISRO.</p>
                <p>Місія приземлилася біля південного полюса Місяця і, вивчатиме своє оточення протягом приблизно одного
                    місячного дня (приблизно 14 земних днів).</p>
            </article>
            <Footer/>
        </div>
    );
}

export default ArticleIndiaOnTheMoon;