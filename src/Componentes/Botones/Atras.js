import React from 'react';
import {Link} from 'react-router-dom';

export default function BotonAtras (props){
    return(
        <Link to='/Inicio' className="btn btn-outline-dark float-left">
            <i className="fa fa-angle-double-left"></i>
        </Link>
    )
}