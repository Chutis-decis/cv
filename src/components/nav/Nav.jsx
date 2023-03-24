import React from "react";
import './Nav.css'
import { BsHouseFill } from "react-icons/bs";
import { GoTasklist } from "react-icons/go";
import { MdComputer } from "react-icons/md";
import computer from "../../img/programacion.png";


const Nav = () => {
    return(
        <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid parrafoNav">
          <a className="navbar-brand " href="/">
            <img src={computer} alt="" width={35} height={35} className="d-inline-block align-text-top circulo"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav bor mx-auto">
              <li className="nav-item">
                <a className="nav-link " href="/">Home <BsHouseFill/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Projects <GoTasklist/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Work <MdComputer/></a>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
    )
}

export default Nav;