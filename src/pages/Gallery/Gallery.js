import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './Gallery.css';

import space_1 from '../../images/space (1).png';
import space_2 from '../../images/space (2).png';
import space_3 from '../../images/space (3).png';
import space_4 from '../../images/space (4).png';
import space_5 from '../../images/space (5).png';
import space_6 from '../../images/space (6).png';
import space_7 from '../../images/space (7).png';
import space_8 from '../../images/space (8).png';
import space_9 from '../../images/space (9).png';
import space_10 from '../../images/space (10).png';
import space_11 from '../../images/space (11).png';
import space_12 from '../../images/space (12).png';
import space_13 from '../../images/space (13).png';
import space_14 from '../../images/space (14).png';
import space_15 from '../../images/space (15).png';
import space_16 from '../../images/space (16).png';
import space_17 from '../../images/space (17).png';
import space_18 from '../../images/space (18).png';
import space_19 from '../../images/space (19).png';
import space_20 from '../../images/space (20).png';
import space_21 from '../../images/space (21).png';
import space_22 from '../../images/space (22).png';
import space_23 from '../../images/space (23).png';
import space_24 from '../../images/space (24).png';

const Gallery = () => {
    return (
        <div>
            <Header/>
            <section className={"gallery"}>
                <img src={space_1}  loading={'lazy'} alt="space 1"/>
                <img src={space_2}  loading={'lazy'} alt="space 2"/>
                <img src={space_13} loading={'lazy'} alt="space 13"/>
                <img src={space_3}  loading={'lazy'} alt="space 3"/>
                <img src={space_4}  loading={'lazy'} alt="space 4"/>
                <img src={space_23} loading={'lazy'} alt="space 23"/>
                <img src={space_5}  loading={'lazy'} alt="space 5"/>
                <img src={space_6}  loading={'lazy'} alt="space 6"/>
                <img src={space_7}  loading={'lazy'} alt="space 7"/>
                <img src={space_9}  loading={'lazy'} alt="space 9"/>
                <img src={space_10} loading={'lazy'} alt="space 10"/>
                <img src={space_11} loading={'lazy'} alt="space 11"/>
                <img src={space_12} loading={'lazy'} alt="space 12"/>
                <img src={space_24} loading={'lazy'} alt="space 24"/>
                <img src={space_8}  loading={'lazy'} alt="space 8"/>
                <img src={space_14} loading={'lazy'} alt="space 14"/>
                <img src={space_15} loading={'lazy'} alt="space 15"/>
                <img src={space_16} loading={'lazy'} alt="space 16"/>
                <img src={space_17} loading={'lazy'} alt="space 17"/>
                <img src={space_18} loading={'lazy'} alt="space 18"/>
                <img src={space_19} loading={'lazy'} alt="space 19"/>
                <img src={space_20} loading={'lazy'} alt="space 20"/>
                <img src={space_21} loading={'lazy'} alt="space 21"/>
                <img src={space_22} loading={'lazy'} alt="space 22"/>
            </section>
            <Footer/>
        </div>
    );
}

export default Gallery;