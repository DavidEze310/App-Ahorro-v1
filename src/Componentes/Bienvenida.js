import React from 'react';
import './Style/Bienvenida.css'

export default function Bienvenida (props){
    return(
        <div className="container">
            <div className="Mensaje">
                <h1>Bienvenido {props.usuario}!</h1>
                <p>Como estubo tu dia hoy?</p>
            </div>
        </div>
    )
}