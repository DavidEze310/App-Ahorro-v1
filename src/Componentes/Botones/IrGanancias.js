import React from 'react';
import circulosImg from '../Imagenes/circulos.png';
import {Link} from 'react-router-dom';
import '../Style/Botones.css'

export default function IrGanancias (props){
    return(
        <Link to="/Inicio/Ganancias" className="btn btn-ligth">
            <div className="mx-auto Bordes Tamaño" style={{
                backgroundImage:`url(${circulosImg}),linear-gradient(to top, #10b1a9, #53b33b)`
            }}>
                <div className="card-body">
                    <h1 className="text-white Titulo">Ganancias</h1>
                    <p className="text-white Parrafo">Cada centavo cuenta. No olvides que el ahorro es la mejor manera de manejar tu dinero</p>
                </div>
            </div>
        </Link>
    )
}
