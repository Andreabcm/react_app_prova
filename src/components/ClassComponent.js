import React, {Component} from 'react';

class ClassComponent extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <h1>Soc un component de classe</h1>
                <h1>Props variable: {this.props.propsClass1}</h1>
                <h1>Props String: {this.props.propsClass2String}</h1>
                <h1>Props Number: {this.props.propsClass3Number}</h1>
                <h1>Props Objecte: {this.props.propsClass4Object.nom}</h1>
            </>
        )
    }
}

export default ClassComponent;