import React, { Component } from 'react';
import logo from '../img/qx7jYSYm_400x400 (1).jpg';
import Salutacio from './Salutacio.js';

class Header extends Component{

    render(){
        var usuari = "Andrea";
        return(
            <h1><img src={logo} height="50px"/> El teu portal de la montanya. <Salutacio nick={usuari}/></h1>
        )
    }
}

export default Header