import React, {useEffect, useState} from 'react';
import {database} from '../../Firebase';

export default function FormularioGas (props){
    const ValoresGas = {
        Dia:'Lunes',
        Dinero:'',
        Compra:''
    };
    const[valuesgas, setValuesgas] = useState (ValoresGas);
    const CambiadorGas = e => {
        const {name, value} = e.target;
        setValuesgas({...valuesgas,[name]: value})
    };
    const Enviargas = e => {
        e.preventDefault();
        props.AgregaroEditarGas(valuesgas);
        setValuesgas({...ValoresGas})
    };
    const ObtenerGas = async (id) => {
        const doc = await database.collection('gastos').doc(id).get();
        setValuesgas({...doc.data()});
    };
    useEffect(() => {
        if(props.currentIdg === ''){
            setValuesgas({...ValoresGas})
        }else{
            ObtenerGas(props.currentIdg);
        }
    }, [props.currentIdg])
        return(
            <div className="card">
                <form className="card-body" onSubmit={Enviargas}>
                    <div className="form-group">
                        <select name="Dia" className="form-control" value={valuesgas.Dia} onChange={CambiadorGas}>
                            <option>Lunes</option>
                            <option>Martes</option>
                            <option>Miercoles</option>
                            <option>Jueves</option>
                            <option>Viernes</option>
                            <option>Sabado</option>
                            <option>Domingo</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" name="Dinero" className="form-control" value={valuesgas.Dinero} onChange={CambiadorGas} placeholder="Cuanto gastaste hoy?"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="Compra" className="form-control" value={valuesgas.Compra} onChange={CambiadorGas} placeholder="Que compraste?"/>
                    </div>
                    <button type="submit" className="btn btn-outline-success">
                        {props.currentIdg === ''? 'Guardar' : 'Actuarizar'}
                    </button>
                </form>
            </div>
        )
}