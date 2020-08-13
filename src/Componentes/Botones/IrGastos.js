import React from 'react';
import circulosImg from '../Imagenes/circulos.png';
import {Link} from 'react-router-dom';
import '../Style/Botones.css'

export default function IrGastos (props){
    return(
        <Link to="/Inicio/Gastos" className="btn btn-ligth">
            <div className="mx-auto Bordes Tamaño" style={{
                backgroundImage:`url(${circulosImg}),linear-gradient(to top, #b15010, #53b33b)`
            }}>
                <div className="card-body">
                    <h1 className="text-white Titulo">Gastos</h1>
                    <p className="text-white Parrafo">La derrota forma parte de la victoria. No dejes que este mal momento te haga bajar los brazos</p>
                </div>
            </div>
        </Link>
    )
}