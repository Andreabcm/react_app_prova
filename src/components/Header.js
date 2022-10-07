import React, { Component } from 'react';
import logo from '../img/qx7jYSYm_400x400 (1).jpg';

class Header extends Component{

    render(){
        return(
            <h1><img src={ logo } height="50px"/> El teu portal de la montanya. </h1>
        )
    }
}

export default Header