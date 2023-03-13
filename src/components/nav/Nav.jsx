import React from "react";
import './Nav.css'
import { RxAccessibility} from "react-icons/rx";
import { BsFlower1 } from "react-icons/bs";


const Nav = () => {
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid parrafoNav">
          <a className="navbar-brand" href="/">L
          <img src="" alt="" />
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
                <a className="nav-link" href="/">Link</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
    )
}

export default Nav;