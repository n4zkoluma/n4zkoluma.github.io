import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CustomImage from "../../components/Utils/customImage";

import './Media.css';

import black_hole from "../../images/black-hole.png";
import chandr from "../../images/chandrayaan-3.png";
import earth from "../../images/earth-moon.png";
import irso from "../../images/irso.png";
import webb_1 from "../../images/james-webb-1.png";
import webb_2 from "../../images/james-webb-2.png";
import juice_1 from "../../images/juice-zond.png";
import juice_2 from "../../images/juice-zond-2.png";
import moon from "../../images/moon.png";
import planets from "../../images/planets.png";
import shark from "../../images/shark-in-space.png";
import starlink from "../../images/starlink-sat.png";

function Media() {

    document.title = "Медіа"

    return (
        <div className={'mediaPage'}>
            <Header/>
            <section id={"gallery"}>
                <div className={"imageCell"}>
                    <CustomImage
                        $imageSrc={black_hole}
                        $imageAlt={"Зображення чорної діри"}
                    />
                    <figcaption>
                        <h3>Зображення чорної діри</h3>
                    </figcaption>
                </div>
                <div className={"imageCell"}>
                    <CustomImage
                        $imageSrc={chandr}
                        $imageAlt={"Посадковий модуль Chandrayaan-3"}
                    />
                    <figcaption>
                        <h3>Посадковий модуль Chandrayaan-3</h3>
                    </figcaption>
                </div>
                <div className={"imageCell"}>
                    <CustomImage
                        $imageSrc={earth}
                        $imageAlt={"Вид на Землю з Місяця"}
                    />
                    <figcaption>
                        <h3>Вид на Землю з Місяця</h3>
                    </figcaption>
                </div>
                <div className={"imageCell"}>
                    <CustomImage
                        $imageSrc={irso}
                        $imageAlt={"Перше зображення, отримане з посадкового модуля Chandrayaan-3"}
                    />
                    <figcaption>
                        <h3>Перше зображення, отримане з посадкового модуля Chandrayaan-3</h3>
                    </figcaption>
                </div>
                <div className={"imageCell"}>
                    <CustomImage
                        $imageSrc={webb_1}
                        $imageAlt={"Повне зображення туманності, зробленого телескопом James Webb"}
                    />
                    <figcaption>
                        <h3>Повне зображення туманності, зробленого телескопом James Webb</h3>
                    </figcaption>
                </div>
                <div className={"imageCell"}>
                    <CustomImage
                        $imageSrc={webb_2}
                        $imageAlt={"Фрагмент зображення, зробленого телескопом James Webb"}
                    />
                    <figcaption>
                        <h3>Фрагмент зображення, отриманого телескопом James Webb</h3>
                    </figcaption>
                </div>
                <div className={"imageCell"}>
                    <CustomImage
                        $imageSrc={juice_1}
                        $imageAlt={"Станція JUICE"}
                    />
                    <figcaption>
                        <h3>Станція JUICE</h3>
                    </figcaption>
                </div>
                <div className={"imageCell"}>
                    <CustomImage
                        $imageSrc={juice_2}
                        $imageAlt={"Траекторія маневру станції JUICE"}
                    />
                    <figcaption>
                        <h3>Траекторія маневру станції JUICE</h3>
                    </figcaption>
                </div>
                <div className={"imageCell"}>
                    <CustomImage
                        $imageSrc={moon}
                        $imageAlt={"Місяць"}
                    />
                    <figcaption>
                        <h3>Фото місяця</h3>
                    </figcaption>
                </div>
                <div className={"imageCell"}>
                    <CustomImage
                        $imageSrc={planets}
                        $imageAlt={"Планети"}
                    />
                    <figcaption>
                        <h3>Планети</h3>
                    </figcaption>
                </div>
                <div className={"imageCell"}>
                    <CustomImage
                        $imageSrc={shark}
                        $imageAlt={"Акула в космосі"}
                    />
                    <figcaption>
                        <h3>Акула в космосі</h3>
                    </figcaption>
                </div>
                <div className={"imageCell"}>
                    <CustomImage
                        $imageSrc={starlink}
                        $imageAlt={"Спутник Starlink"}
                    />
                    <figcaption>
                        <h3>Спутник Starlink</h3>
                    </figcaption>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Media;