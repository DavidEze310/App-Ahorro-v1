import React,{ useState, useEffect} from 'react';
import {database} from '../Firebase';
import '../Componentes/Style/Gastos.css';
import Atras from '../Componentes/Botones/Atras'
import FormularioGast from '../Componentes/Formularios/FormularioGast';
import { toast } from 'react-toastify';
import {ToastContainer} from 'react-toastify';


export default function Gastos () {

    const [gastos, setgastos] = useState([]);
    const [currentIdg, setcurrentIdg] = useState("");

    const AgregaroEditarGas = async (ObjetoGas) =>{
        try {
            if(currentIdg === ''){
                await database.collection('gastos').doc().set(ObjetoGas);
                toast('Datos Guardados',{
                    type:'success'
                });
            }else{
                await database.collection('gastos').doc(currentIdg).update(ObjetoGas);
                toast('Datos Actualizados', {
                    type:'default'
                });
                setcurrentIdg('');
            }
        } catch (error) {
            console.error(error); 
        }
    };

    const Borrargas = async (id) => {
        if(window.confirm('Seguro?')){
            await database.collection('gastos').doc(id).delete();
            toast('Datos Borrados', {
                type:'error',
                autoClose: 2000
            })
        }
    };
    const obtengastos = async () => {
        database.collection('gastos').onSnapshot((querySnapshot) => {
            const documentosgas = [];
            querySnapshot.forEach((doc) => {
                documentosgas.push({...doc.data(), id:doc.id});
            });
            setgastos(documentosgas);
        })
    };
    useEffect(() => {
        obtengastos();
    }, []);

        return(
            <div className="Body-gas">
                <Atras/>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-4 text-center">
                            <FormularioGast {...{AgregaroEditarGas, currentIdg, gastos}} />
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                {gastos.map(perder =>(
                                    <div className="col-md-4 text-center" key={perder.id}>
                                    <div className="card mt-4">
                                        <div className="card-header">
                                            <h4>{perder.Dia}</h4>
                                        </div>
                                        <div className="card-body">
                                            <p>${perder.Dinero}</p>
                                            <p>{perder.Compra}</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex justify-content-between">
                                                <button className="btn btn-outline-danger" onClick={() => Borrargas(perder.id)}>
                                                    <i className="fa fa-trash-o"></i>
                                                </button>
                                                <button className="btn btn-outline-info" onClick={() => setcurrentIdg(perder.id)}>
                                                    <i className="material-icons">create</i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        )
    
}