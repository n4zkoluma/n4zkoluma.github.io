import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Gallery from "./pages/Gallery/Gallery";
import Maps from "./pages/Maps/Maps";
import News from "./pages/News/News";
import Articles from "./pages/Articles/Articles";
import Home from "./pages/Home/Home";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/gallery" element={<Gallery />}/>
                <Route path="/maps" element={<Maps />}/>
                <Route path="/news" element={<News />}/>
                <Route path="/articles" element={<Articles />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;