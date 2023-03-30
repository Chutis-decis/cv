import React  from "react";
import '../nav/Nav.css'
import '../../App.css'
import './footer.css'


import pruebaOne from '../../img/Center/prueba1.jpg'
import pruebaTow from '../../img/Center/prueba2.jpg'
import pruebaThree from '../../img/Center/pruba3.jpg'

const Fotter = () => {
    return(
        <div className="container-md text-center">
            <div className="row">
                <div className="col-md-4 categoria">
                    <div className="card">
                        <div className="overflow-hidden">
                            <img className="card-img-top btn colorBtn1" src={pruebaOne} alt="Data Scientist" />
                            </div>
                        <div className="car-body text-center bg-primary text-white ´5">
                            hola
                        </div>
                    </div> 
                </div>
                <div className="col-md-4 categoria">
                    <div className="card">
                        <div className="overflow-hidden">
                            <img className="card-img-top btn colorBtn2" src={pruebaTow} alt="Frontnend"/>
                        </div>
                        <div className="car-body text-center bg-primary text-white 5">
                            hola
                        </div>
                    </div> 
                </div>
                <div className="col-md-4 categoria">
                    <div className="card">
                        <div className="overflow-hidden">
                            <img className="card-img-top btn colorBtn3" src={pruebaThree} alt="Bakend"/>
                        </div>
                        <div className="car-body text-center bg-primary text-white 5">
                            <h1>Soy </h1>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Fotter;