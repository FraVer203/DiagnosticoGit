import './App.css'
import Index from "./screen/welcome/Index.jsx";
import {Link, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <h1>Bienvenido</h1>
            <Link to="/welcome">La vista de welcome</Link>
            <Routes>
                <Route path="/welcome" element={<Index/>}/>
            </Routes>
        </div>
    );
}

export default App
