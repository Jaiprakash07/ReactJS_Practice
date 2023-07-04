import React, { useContext } from 'react';
import { Childcontex4 } from './Childcontex4';
import { Create } from "./Contexts";

function Childcontex3() {

    const {value2} = useContext(Create);
    // console.log(value2);

    let made = value2.map((item) => {
        return `${item}, `;
    })
    return (
        <>
        <div>
            <h2 style={{backgroundColor:'black', color:'white'}}>Child3 consume an array from parent comp,using useContext</h2>
            <h3>{made}</h3>
            <Childcontex4 />
        </div>
        </>
    )
}

export { Childcontex3 };