import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PrimeraPag from '../Paginas/PrimeraPag';
import Inicio from '../Paginas/Inicio';
import Gastos from '../Paginas/Gastos';
import Ganancias from '../Paginas/Ganancias';
import NotFound from '../Paginas/NotFound';

export default function Enlaces (){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={PrimeraPag} />
                <Route exact path="/Inicio" component={Inicio} />
                <Route exact path="/Inicio/Gastos" component={Gastos} />
                <Route exact path="/Inicio/Ganancias" component={Ganancias} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}