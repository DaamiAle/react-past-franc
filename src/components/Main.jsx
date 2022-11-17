import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./mainPages/Inicio";
import Panaderia from "./mainPages/Panaderia";
import Chocolateria from "./mainPages/Chocolateria";
import Pasteleria from "./mainPages/Pasteleria";
import Contacto from "./mainPages/Contacto";
import BuildingPage from "./mainPages/BuildingPage";

const Main = () => {
    const key = window.location.pathname;
    return (
        <>
            <Routes key={key}>
                <Route path="/" element={<Inicio />} />
                <Route path="/Panaderia" element={<Panaderia />} />
                <Route path="/Chocolateria" element={<Chocolateria />} />
                <Route path="/Pasteleria" element={<Pasteleria />} />
                <Route path="/Contacto" element={<Contacto />} />
                <Route path="*" element={<BuildingPage />} />
            </Routes>
        </>
    );
};

export default Main;