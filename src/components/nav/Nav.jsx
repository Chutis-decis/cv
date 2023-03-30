import React from "react";
import './Nav.css'
import computer from "../../img/programacion.png";


const Nav = () => {
    return(
        <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid parrafoNav">
          <a className="navbar-brand " href="/">
            <img src={computer} alt="" width={35} height={35} className="d-inline-block align-text-top circulo"/>
          </a>
        </div>
      </nav> 
    )
}

export default Nav;