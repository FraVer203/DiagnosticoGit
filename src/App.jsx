import './App.css'
import Index from "./screen/welcome/Index.jsx";
import {Link, Route, Routes} from "react-router-dom";
import Other from "./other/Other.jsx";

function App() {
    return (
        <div>
            <h1>Bienvenido</h1>
            <Link to="/welcome">La vista de welcome</Link>
            <Routes>
                <Route path="/welcome" element={<Index/>}/>
            </Routes>
            <br />
            <Link to="/other">La Navegación entre componentes</Link>
            <Routes>
                <Route path="/other" element={<Other/>}/>
            </Routes>
        </div>
    );
}

export default App
