import {BrowserRouter, Routes, Route} from "react-router-dom";
import Gallery from "./pages/Gallery/Gallery";
import Maps from "./pages/Maps/Maps";
import News from "./pages/News/News";
import Home from "./pages/Home/Home";
import ArticleBlackHole from "./components/Articles/ArticleBlackHole";
import ArticleWaterOnTheMoon from "./components/Articles/ArticleWaterOnTheMoon";
import ArticleSpaceSharks from "./components/Articles/ArticleSpaceSharks";
import ArticlePlanetsSolarYears from "./components/Articles/ArticlePlanetsSolarYears";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/gallery" element={<Gallery />}/>
                <Route path="/maps" element={<Maps />}/>
                <Route path="/news" element={<News />}/>
                <Route path={"/articles/Black-Hole"} element={<ArticleBlackHole />}/>
                <Route path={"/articles/Space-Sharks"} element={<ArticleSpaceSharks />}/>
                <Route path={"/articles/Planets-Solar-Years"} element={<ArticlePlanetsSolarYears />}/>
                <Route path={"/articles/Water-on-the-Moon"} element={<ArticleWaterOnTheMoon />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;