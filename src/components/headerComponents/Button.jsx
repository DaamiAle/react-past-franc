import React from "react";
import { Routes, Route } from "react-router-dom";


const Button = ({texto}) => {

    const handleClick = () => {
        if(texto === "Inicio"){
            document.title = "Pasteleria Franccesca";
            window.location.href = "http://localhost:3000/";

        }else{
            document.title = "Pasteleria Franccesca - "+ texto;
            window.location.href = "http://localhost:3000/"+texto;
        }

    }
    return (
        <>
            <p type="button" onClick={handleClick}>{texto}</p>
        </>
    );
}

export default Button;