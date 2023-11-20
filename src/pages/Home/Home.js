import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import './Home.css';
import FeaturedNewsSection from "../../components/Articles/FeaturedNews/FeaturedNewsSection";

function Home() {

    document.title = "Головна"

    return (
        <div className={'Home'}>
            <Header/>
            <FeaturedNewsSection/>
            <Footer/>
        </div>
    );
}

export default Home;