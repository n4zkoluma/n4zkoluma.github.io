import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import modalOpen from "../../components/Utils/modalOpen";
import "./Feedback.css";

function Feedback() {

    document.title = "Зворотній зв'язок"

    modalOpen();

    return (
        <div id={'FeedbackPage'}>
            <Header/>
            <form id={"feedback"}>
                <div>
                    <label>
                        <p>Як до Вас звертатись?</p>
                        <span/>
                        <input type={"text"} id={"name"} maxLength={32}/>
                    </label>
                </div>
                <div>
                    <label>
                        <p>Адреса електронної пошти:</p>
                        <span/>
                        <input type={"email"} id={"email"}/>
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
                        />
                    </label>
                </div>
                <label>
                    <input type={"submit"} id={"submit"}/>
                </label>
            </form>

            <dialog>
                <p>Ваш коментар надіслано!</p>
            </dialog>

            <Footer/>
        </div>
    );
}

export default Feedback;