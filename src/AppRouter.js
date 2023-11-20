import {BrowserRouter, Routes, Route} from "react-router-dom";
import Media from "./pages/Media/Media";
import Maps from "./pages/Maps/Maps";
import Articles from "./pages/Articles/Articles";
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
                <Route path="/media" element={<Media />}/>
                <Route path="/maps" element={<Maps />}/>

                <Route path="/articles" element={<Articles />}/>
                <Route path={"/articles/BlackHole"} element={<ArticleBlackHole />}/>
                <Route path={"/articles/SpaceSharks"} element={<ArticleSpaceSharks />}/>
                <Route path={"/articles/PlanetsSolarYears"} element={<ArticlePlanetsSolarYears />}/>
                <Route path={"/articles/WaterOnTheMoon"} element={<ArticleWaterOnTheMoon />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;