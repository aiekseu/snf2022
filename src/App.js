import TestPage from "./pages/testPage";
import { HashRouter, Route, Routes} from "react-router-dom";
import ResultPage from "./pages/resultPage";
import StartTest from "./pages/startTestPage";
import FinalPage from "./pages/finalTest";

const App = () => {

    return (
        <HashRouter>
            <Routes>
                <Route path="/game" element={<StartTest/>}/>
                <Route path="/game/:num" element={<TestPage/>}/>
                <Route path="/game_final" element={<FinalPage/>}/>
                <Route path="/game_result" element={<ResultPage/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
