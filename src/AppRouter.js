import {BrowserRouter, Routes, Route} from "react-router-dom";
import Media from "./pages/Media/Media";
import Feedback from "./pages/Feedback/Feedback";
import Articles from "./pages/Articles/Articles";
import Home from "./pages/Home/Home";
import ArticleBlackHole from "./components/Articles/ArticleBlackHole";
import ArticleWaterOnTheMoon from "./components/Articles/ArticleWaterOnTheMoon";
import ArticleSpaceSharks from "./components/Articles/ArticleSpaceSharks";
import ArticlePlanetsSolarYears from "./components/Articles/ArticlePlanetsSolarYears";
import ArticleNewSpaceXSats from "./components/Articles/ArticleNewSpaceXSats";
import ArticleZondJUICE from "./components/Articles/ArticleZondJUICE";
import ArticleJapanOnTheMoon from "./components/Articles/ArticleJapanOnTheMoon";
import ArticleIndiaOnTheMoon from "./components/Articles/ArticleIndiaOnTheMoon";
import ArticleJamesWebb from "./components/Articles/ArticleJamesWebb";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/media" element={<Media />}/>
                <Route path="/feedback" element={<Feedback />}/>
                <Route path="/articles" element={<Articles />}/>

                <Route path={"/articles/BlackHole"} element={<ArticleBlackHole />}/>
                <Route path={"/articles/SpaceSharks"} element={<ArticleSpaceSharks />}/>
                <Route path={"/articles/PlanetsSolarYears"} element={<ArticlePlanetsSolarYears />}/>
                <Route path={"/articles/WaterOnTheMoon"} element={<ArticleWaterOnTheMoon />}/>
                <Route path={"/articles/NewSpaceXSats"} element={<ArticleNewSpaceXSats />}/>
                <Route path={"/articles/ZondJUICE"} element={<ArticleZondJUICE />}/>
                <Route path={"/articles/JapanOnTheMoon"} element={<ArticleJapanOnTheMoon />}/>
                <Route path={"/articles/IndiaNoTheMoon"} element={<ArticleIndiaOnTheMoon />}/>
                <Route path={"/articles/JamesWebb"} element={<ArticleJamesWebb />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;