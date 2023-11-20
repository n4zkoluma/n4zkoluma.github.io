import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Media.css';

function Media() {

    document.title = "Медіа"

    return (
        <div className={'mediaPage'}>
            <Header/>
            <div>
                123
            </div>
            <Footer/>
        </div>
    );
}

export default Media;