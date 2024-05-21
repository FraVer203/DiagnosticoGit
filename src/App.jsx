import './App.css'
import {Route, Routes} from "react-router-dom";
import Inicio from "./screen/welcome/Inicio.jsx";
import Task from "./screen/task/Task.jsx";
import Profile from "./screen/profile/App.jsx";
import Layout from "./screen/Layout.jsx";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="/home" element={<Inicio/>}/>
                <Route path="/task" element={<Task/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    );
}

export default App
