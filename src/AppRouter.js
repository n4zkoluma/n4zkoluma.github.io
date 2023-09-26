import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Gallery from "./pages/Gallery/Gallery";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path="/gallery" element={<Gallery />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;