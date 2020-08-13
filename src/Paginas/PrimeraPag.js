import React from 'react';
import '../Componentes/Style/PrimeraPag.css'
import Comenzar from '../Componentes/Botones/Comenzar'

export default function PrimeraPag (props){
    return(
        <div className="Alinear">
            <h1 className="display-4 font-weight-bold font-italic">Cansado de no saber ¿En qué gastas tu dinero?</h1>
            <h1 className="font-italic">seguí tus ganancias y gastos monetarios con nosotros</h1>
            <Comenzar/>
        </div>
    )
}