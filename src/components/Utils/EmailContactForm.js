import React, {useRef} from "react";
import emailjs from "@emailjs/browser";

import "../../pages/Feedback/Feedback.css";

const EmailContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('n4zkoluma.github.io', 'n4zkoluma.github.io', form.current, 'i9KZc_cVVQspDVlRw').then()
    };

    return (

        <form id={"feedback"} ref={form} onSubmit={sendEmail}>
            <div>
                <label>
                    <p>Як до Вас звертатись?</p>
                    <span/>
                    <input type={"text"} id={"name"} maxLength={32} name={"from_name"}/>
                </label>
            </div>
            <div>
                <label>
                    <p>Адреса електронної пошти:</p>
                    <span/>
                    <input type={"email"} id={"email"} name={"reply_to"}/>
                </label>
            </div>
            <div>
                <label>
                    <p>Опишіть проблему:</p>
                    <span/>
                    <textarea
                        id={"feedback"}
                        maxLength={500}
                        style={{height: "8vw", textAnchor: "start"}}
                        name={"message"}
                    />
                </label>
            </div>
            <label>
                <input type={"submit"} id={"submit"}/>
            </label>
        </form>

    );
}
export default EmailContactForm;