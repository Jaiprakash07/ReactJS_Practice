import React from 'react';
import { Childcontex2 } from './Childcontex2';

function Childcontex1() {
    return (
        <>
        <div>
            <h2>Child component1</h2>
            <Childcontex2 />
        </div>
        </>
    )
}

// these component get value through props-drilling from parent comp.

// function Childcontex1(props) {
//     return (
//         <>
//         <div>
//             <Childcontex2 name={props.name} change={props.new}/>
//             <h2>child comp1, {props.name}</h2>
//         </div>
//         </>
//     )
// }

export {Childcontex1};  