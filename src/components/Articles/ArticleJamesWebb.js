import './article.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import webb_1 from "../../images/james-webb-1.png";
import webb_2 from "../../images/james-webb-2.png";
import webb_3 from "../../images/james-webb-3.png";
import CustomImage from "../Utils/customImage";

function ArticleJamesWebb() {

    document.title = "James Webb показав туманність у сузір'ї Ліри, схожу на бублик"

    return (
        <div id={'articlePage'}>
            <Header/>
            <article>
                <h1>James Webb показав туманність у сузір'ї Ліри, схожу на бублик</h1>
                <p>Космічний телескоп NASA/ESA/CSA James Webb зробив нову фотографію туманності Кільце у сузір'ї
                    Ліри.</p>
                <CustomImage
                    $imageSrc={webb_1}
                    $imageAlt={"Туманність у сузір'ї Ліри"}
                />
                <p>Ця туманність, відома як NGC 6720 та Мессьє 57, розташована приблизно за 2 200 світлових років від
                    Землі і є популярною ціллю для любителів космосу - космічний об’єкт у формі бублика видно навіть за
                    допомогою невеликих телескопів впродовж літа.</p>
                <CustomImage
                    $imageSrc={webb_2}
                    $imageAlt={'Фрагмент зображення туманності'}
                    $style={{height: "50vh", objectFit: "contain"}}
                />
                <p>Туманність Кільце — це сяючі залишки давно померлої зірки, класу астрономічних об’єктів, які
                    називаються «планетарними туманностями».</p>
                <CustomImage
                    $imageSrc={webb_3}
                    $imageAlt={"Туманність у сузір'ї Ліри"}
                    $style={{height: "50vh", objectFit: "contain"}}
                />
                <p>У серці об’єкта можна побачити білу пляму, що являє собою білого карлика - рештки того, що залишилося
                    від ядра цього вимерлого зоряного тіла.</p>
            </article>
            <Footer/>
        </div>
    );
}

export default ArticleJamesWebb;