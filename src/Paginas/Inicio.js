import React from 'react';
import Bienvenida from '../Componentes/Bienvenida';
import IrGanancias from '../Componentes/Botones/IrGanancias';
import IrGastos from '../Componentes/Botones/IrGastos';
import 'react-toastify/dist/ReactToastify.css';

export default function Inicio (props){
    return(
        <div>
            <Bienvenida usuario="David"/>
            <div className="text-center">
                <IrGanancias/>
                <IrGastos/>
            </div>
        </div>
    )
}