import './App.css';
import 'normalize.css';
import {Routes, Route} from "react-router-dom";
import Palette from "./Pages/Palette";
import Home from "./Pages/Home"


function App() {
    return (
        <>
            <img src={require("./assets/ezgif-2-30aa04409b.gif")} alt=""/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={"/flatUI/#/palette/:nameId"} element={<Palette/>}/>
                <Route path="/flatUI/*" element={<Home/>}/>
            </Routes>
        </>
    );
}

export default App;
