import React from "react";

const Carrito = () => {
    // traemos favicon de la carpeta public
    const favicon = process.env.PUBLIC_URL + "/favicon.ico";
    // un cuadro de texto con un boton de buscar incrustado en el mismo
    return (
        <div className="carrito">
            <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png" alt="carrito"/>
            <p id="itemsCarrito">0</p>
        </div>
    );
}

export default Carrito;