import MainPage from "./pages/mainPage";
import TestPage from "./pages/testPage";
import CountdownPage from "./pages/countdownPage";
import {HashRouter, Route, Routes} from "react-router-dom";

const App = () => {

    return (
        <HashRouter >
            <Routes>
                <Route exact path="" element={<MainPage/>}/>
                <Route path="/stream" element={<MainPage/>}/>
                <Route path="/test/:num" element={<TestPage/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
