import React, { useContext } from 'react';
import  { Create3 } from './Contexts';

function Childcontex5() {
    const [...value] = useContext(Create3);
    // console.log(value[1].car);
    return (
        <>
        <div>
            <h2>child-5</h2>
            <h2>{value[0][3]}</h2>
            <h2>hiii,{value[1].car}-{value[1].model}</h2>
        </div>
        </>
    )
}

export { Childcontex5 };  