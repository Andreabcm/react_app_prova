import React from 'react';

const functionalComponent = (props) => {
    return (
        <>
            <h1>Soc un component funcional</h1>
            <h1>Props Variable: {props.propsFunctional1}</h1>
            <h1>Props Strings: {props.propsFunctional2String}</h1>
            <h1>Props Number: {props.propsFunctional3Number}</h1>
            <h1>Props Objecte: {props.propFunctional4Object}</h1>
        </>
    )
}

export default functionalComponent;