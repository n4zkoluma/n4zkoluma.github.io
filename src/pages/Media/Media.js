import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Media.css';

const Media = () => {


    document.title = "Медіа"

    return (
        <div>
            <Header/>
            {/*<section className={"gallery"}>
                <img src={space_1} loading={'lazy'} alt="space 1"/>
                <img src={space_2} loading={'lazy'} alt="space 2"/>
                <img src={space_13} loading={'lazy'} alt="space 13"/>
                <img src={space_3} loading={'lazy'} alt="space 3"/>
                <img src={space_4} loading={'lazy'} alt="space 4"/>
                <img src={space_23} loading={'lazy'} alt="space 23"/>
                <img src={space_5} loading={'lazy'} alt="space 5"/>
                <img src={space_6} loading={'lazy'} alt="space 6"/>
                <img src={space_7} loading={'lazy'} alt="space 7"/>
                <img src={space_9} loading={'lazy'} alt="space 9"/>
                <img src={space_10} loading={'lazy'} alt="space 10"/>
                <img src={space_11} loading={'lazy'} alt="space 11"/>
                <img src={space_12} loading={'lazy'} alt="space 12"/>
                <img src={space_24} loading={'lazy'} alt="space 24"/>
                <img src={space_8} loading={'lazy'} alt="space 8"/>
                <img src={space_14} loading={'lazy'} alt="space 14"/>
                <img src={space_15} loading={'lazy'} alt="space 15"/>
                <img src={space_16} loading={'lazy'} alt="space 16"/>
                <img src={space_17} loading={'lazy'} alt="space 17"/>
                <img src={space_18} loading={'lazy'} alt="space 18"/>
                <img src={space_19} loading={'lazy'} alt="space 19"/>
                <img src={space_20} loading={'lazy'} alt="space 20"/>
                <img src={space_21} loading={'lazy'} alt="space 21"/>
                <img src={space_22} loading={'lazy'} alt="space 22"/>
            </section>*/}
            <Footer/>
        </div>
    );
}

export default Media;