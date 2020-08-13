import React,{ useState, useEffect} from 'react';
import {database} from '../Firebase';
import '../Componentes/Style/Ganancias.css';
import Atras from '../Componentes/Botones/Atras'
import FormularioGan from '../Componentes/Formularios/FormularioGan';
import { toast } from 'react-toastify';
import {ToastContainer} from 'react-toastify';



export default function Ganancias () {

    const [ganancias, setganancias] = useState([]);
    const [currentId, setcurrentId] = useState("");

    const AgregaroEditarGan = async (ObjetoGan) =>{
        try {
            if(currentId === ''){
                await database.collection('ganancias').doc().set(ObjetoGan);
                toast('Datos Guardados',{
                    type:'success'
                });
            }else{
                await database.collection('ganancias').doc(currentId).update(ObjetoGan);
                toast('Datos Actualizados', {
                    type:'default'
                });
                setcurrentId('');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const Borrar = async (id) => {
        if(window.confirm('Seguro?')){
            await database.collection('ganancias').doc(id).delete();
            toast('Datos Borrados', {
                type:'error',
                autoClose: 2000,
            })
        }
    };
    const obtenganancias = async () => {
        database.collection('ganancias').onSnapshot((querySnapshot) => {
            const documentos = [];
            querySnapshot.forEach((doc) => {
                documentos.push({...doc.data(), id:doc.id});
            });
            setganancias(documentos);
        })
    };
    useEffect(() => {
        obtenganancias();
    }, []);

        return(
            <div className="Body">
                <Atras/>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-4 text-center">
                            <FormularioGan {...{AgregaroEditarGan, currentId, ganancias}} />
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                {ganancias.map(ganar =>(
                            <div className="col-md-4 text-center" key={ganar.id}>
                                <div className="card mt-4">
                                    <div className="card-header">
                                        <h4>{ganar.Dia}</h4>
                                    </div>
                                    <div className="card-body">
                                        <p>${ganar.Dinero}</p>
                                        <p>{ganar.Trabajo}</p>
                                        <p>{ganar.Tiempo}hs</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex justify-content-between">
                                            <button className="btn btn-outline-danger" onClick={() => Borrar (ganar.id)}>
                                                <i className="fa fa-trash-o"></i>
                                            </button>
                                            <button className="btn btn-outline-info" onClick={() => setcurrentId(ganar.id)}>
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
