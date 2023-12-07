import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React from "react";
import EmailContactForm from "../../components/Utils/EmailContactForm";
import "./Feedback.css";


function Feedback() {

    document.title = "Зворотній зв'язок"

    return (
        <div id={'FeedbackPage'}>
            <Header/>
            <EmailContactForm/>
            <Footer/>
        </div>
    );
}

export default Feedback;