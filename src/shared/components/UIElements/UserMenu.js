import React from "react";

import "./UserMenu.css";

const UserMenu = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="options d-flex justify-content-end w-100">
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              href="#"
            >
              ¡Hola, Juan!
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
            >
              <a className="dropdown-item" href="#">
                Mis Pendientes
              </a>
              <a className="dropdown-item" href="#">
                Reportes
              </a>
              <a className="dropdown-item" href="#">
                Cambiar contraseña
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                <span className="bs bs-power"></span> Salir
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
