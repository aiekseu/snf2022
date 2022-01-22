import MainPage from "./pages/mainPage";
import TestPage from "./pages/testPage";
import CountdownPage from "./pages/countdownPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact path="" element={<CountdownPage/>}/>
                <Route path="/stream" element={<MainPage/>}/>
                <Route path="/test/:num" element={<TestPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
