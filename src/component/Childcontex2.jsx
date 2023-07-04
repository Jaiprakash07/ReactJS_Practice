import React, {useContext } from 'react';
import {Create} from './Contexts';
import { Childcontex3 } from './Childcontex3';

function Childcontex2() {
    const {value1}= useContext(Create);
    
    return (
        <>
        <div>
            <h2>Child component2 consume,{value1.fname} and {value1.code} number by useContext hook</h2>  
            <Childcontex3 /> 
        </div>  
        </>
    )
}

// these component get value through props-drilling from parent comp.

// function Childcontex2(props) {
//     return (
//         <>
//            <h2>child comp2,{props.name} </h2>
//            <button onClick={props.change}>Context</button>
//         </>
//     )
// }

export { Childcontex2 };