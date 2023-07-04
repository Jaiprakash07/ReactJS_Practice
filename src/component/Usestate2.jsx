import React, { useState } from 'react';

function Stathook() {
    let [neww, setneww] = useState({
        key: '1',
        name: 'john',
        lname: 'miller',
        age: 42
    });

    let changeValue = () => {
        setneww((pre) => {return { ...pre,
            name: 'ryan',
            lname: 'madison',}
            // [age]: 45
        });
    
    }

    return (
        <>
        <h2 className="bg-body-black">UseState Hook</h2>
        <p>{neww.name} {neww.lname} is {neww.age} year old</p>
        {/* <p>{neww}</p> */}
        <button className="btn-Primary" onClick={changeValue}>Click</button>   
        </>
    )
}

export {Stathook};