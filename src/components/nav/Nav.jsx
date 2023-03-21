import React from "react";
import './Nav.css'
import { RxAccessibility} from "react-icons/rx";
import { BsFlower1 } from "react-icons/bs";
import { GiAnt } from "react-icons/gi";
import face from "../../img/portafolio-removebg-preview.png";


const Nav = () => {
    return(
        <nav className="navbar navbar-expand-sm navbar-dark ">
        <div className="container-fluid parrafoNav">
          <a className="navbar-brand" href="/">
            <img src={face} alt="" width={45} height={55} className="d-inline-block align-text-top circulo"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav bor">
              <li className="nav-item">
                <a className="nav-link " href="/">Link <RxAccessibility/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link <BsFlower1/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link <GiAnt/></a>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
    )
}

export default Nav;