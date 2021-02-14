import React from "react";
// import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import "../css/menu.css";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu-container">
        <div className="menu-column">
          <div className="menu-logo">
            <div className="menu-logo_imagen"></div>
            <div className="menu-ocultar"></div>
          </div>
          <div className="menu-listado">
            <div className="menu-listado_oficina">
              <NavLink to="/oficina" className="menu-group">
                <div className="logo-oficina"></div>
                <span className="menu-listado_texto">Oficina</span>
              </NavLink>
            </div>
            <div className="menu-listado_catalogo">
              <NavLink to="/catalogo" className="menu-group">
                <div className="logo-catalogo"></div>
                <span className="menu-listado_texto">Catálogo</span>
              </NavLink>
            </div>
            <div className="menu-listado_bonos">
              <NavLink to="/catalogo" className="menu-group">
                <div className="logo-bonos"></div>
                <span className="menu-listado_texto">Bonos</span>
              </NavLink>
            </div>
            <div className="menu-listado_red">
              <NavLink to="/catalogo" className="menu-group">
                <div className="logo-red"></div>
                <span className="menu-listado_texto">Red</span>
              </NavLink>
            </div>
            <div className="menu-listado_invitar">
              <NavLink to="/catalogo" className="menu-group">
                <div className="logo-invitar"></div>
                <span className="menu-listado_texto">Invitar</span>
              </NavLink>
            </div>
            <div className="menu-listado_wonedero">
              <NavLink to="/catalogo" className="menu-group">
                <div className="logo-wonedero"></div>
                <span className="menu-listado_texto">Wonedero</span>
              </NavLink>
            </div>
            <div className="menu-listado_notificaciones">
              <NavLink to="/catalogo" className="menu-group">
                <div className="logo-notificaciones"></div>
                <span className="menu-listado_texto">Notificaciones</span>
              </NavLink>
            </div>
            <div className="menu-listado_recursos">
              <NavLink to="/catalogo" className="menu-group">
                <div className="logo-recursos"></div>
                <span className="menu-listado_texto">Recursos</span>
              </NavLink>
            </div>
            <div className="menu-listado_legal">
              <NavLink to="/catalogo" className="menu-group">
                <div className="logo-legal"></div>
                <span className="menu-listado_texto">Legal</span>
              </NavLink>
            </div>
            <div className="menu-listado_cuentanos">
              <NavLink to="/catalogo" className="menu-group">
                <div className="logo-cuentanos"></div>
                <span className="menu-listado_texto">Cuéntanos</span>
              </NavLink>
            </div>
            <div className="menu-listado_historial">
              <NavLink to="/catalogo" className="menu-group">
                <div className="logo-historial"></div>
                <span className="menu-listado_texto">Historial</span>
              </NavLink>
            </div>
            <div className="menu-listado_cerrar_sesion">
              <NavLink to="/logout" className="menu-group">
                <div className="logo-cerrar_sesion"></div>
                <span className="menu-listado_texto">Cerrar sesión</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
