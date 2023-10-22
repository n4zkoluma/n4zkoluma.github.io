import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import './Home.css';
import '../../global.css';

function Home() {
    return (
        <div className={'Home'}>
            <Header/>
            <div className={'bgGif'}/>
            <Footer/>
        </div>
    );
}

export default Home;