import React, {useEffect, useState} from 'react';
import {database} from '../../Firebase';

export default function FormularioGan (props){
    const ValoreaGan = {
        Dia:'Lunes',
        Dinero:'',
        Trabajo:'',
        Tiempo:''
    };
    const [values, setValues] = useState (ValoreaGan);
    const CambiadorGan = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    };
    const EnviarGan = e => {
        e.preventDefault();
        props.AgregaroEditarGan(values);
        setValues({...ValoreaGan})
    };
    const ObtenerGan = async (id) => {
        const doc = await database.collection('ganancias').doc(id).get();
        setValues({...doc.data()});
    };
    useEffect(() => {
        if(props.currentId === ''){
            setValues({...ValoreaGan})
        } else{
            ObtenerGan(props.currentId);
        }
    }, [props.currentId]);
        return(
            <div className="card">
                <form className="card-body" onSubmit={EnviarGan}>
                    <div className="form-group">
                        <select name="Dia" className="form-control" onChange={CambiadorGan} value={values.Dia}>
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
                        <input type="text" name="Dinero" className="form-control" value={values.Dinero} onChange={CambiadorGan} placeholder="Cuanto ganaste hoy?"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="Trabajo" className="form-control" value={values.Trabajo} onChange={CambiadorGan} placeholder="Que trabajo ejerciste?"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="Tiempo" className="form-control" value={values.Tiempo} onChange={CambiadorGan} placeholder="Cuanto tiempo?"/>
                    </div>
                    <button type="submit" className="btn btn-outline-success">
                        {props.currentId === ''? 'Guardar' : 'Actuarizar'}
                    </button>
                </form>
            </div>
        )
}