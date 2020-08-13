import React from 'react';
import {Link} from 'react-router-dom';

export default function Comenzar (props){
    return(
        <Link to='/Inicio' className="btn btn-outline-dark btn-lg">
            <i className="fa fa-usd"></i>
        </Link>
    )
}