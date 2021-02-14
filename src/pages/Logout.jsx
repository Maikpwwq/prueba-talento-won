import React from 'react';
import '../css/logout.css';

const Logout = () => (
    <div className="logout-container">
        <div className="logout-grupo">
            <div className="logout-grupo_emogi"></div>
            <div className="logout-grupo_titulo">
                <span className="logout-grupo_titulo_texto">Sesión cerrada</span>
            </div>
            <div className="logout-grupo_mensaje">
                <span className="logout-grupo_mensaje_texto">Te extrañamos vuelve pronto</span>
            </div>
        </div>        
    </div>
);

export default Logout;