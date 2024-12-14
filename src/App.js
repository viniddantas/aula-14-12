import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Hotel from './pages/Hotel'
import Login from './pages/Login'
import Cruzeiro from './pages/Cruzeiro'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Reserva" element={<Hotel/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Cruzeiro" element={<Cruzeiro/>}/>
            </Routes>
        </Router>
    );
}

