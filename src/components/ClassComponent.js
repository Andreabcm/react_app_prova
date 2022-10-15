import React, {Component} from 'react';

class ClassComponent extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <h1>Soc un component de classe</h1>
                <h1>Props variable: {this.props.propsFunctionar1}</h1>
                <h1>Props String: {this.props.propsFunctional2String}</h1>
                <h1>Props Number: {this.props.propsFunctionalNumber}</h1>
                <h1>Props Objecte: {this.props.propsFunctionalObject.nom}</h1>
            </>
        )
    }
}

export default ClassComponent;