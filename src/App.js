import MainPage from "./pages/mainPage";
import TestPage from "./pages/testPage";
import CountdownPage from "./pages/countdownPage";
import {HashRouter, Route, Routes} from "react-router-dom";

const App = () => {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<CountdownPage />} />
                <Route path="/stream" element={<MainPage />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
