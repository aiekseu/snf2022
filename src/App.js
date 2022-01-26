import MainPage from "./pages/mainPage";
import TestPage from "./pages/testPage";
import {HashRouter, Route, Routes} from "react-router-dom";
import ResultPage from "./pages/resultPage";

const App = () => {

    return (
        <HashRouter>
            <Routes>
                <Route exact path="" element={<MainPage/>}/>
                <Route path="/stream" element={<MainPage/>}/>
                <Route path="/test/:num" element={<TestPage/>}/>
                <Route path="/result" element={<ResultPage/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
