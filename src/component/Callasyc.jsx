import React, { useState } from 'react';

function Synch() {
    const [value, setValue] = useState({});
    let a, b;
    const syn = () => {
        a = prompt('name:-');
        b = prompt('lname:-');
        setValue({ ...value, a, b });
    }
    return (
        <>
            <div>
                <h2>Synchronous js</h2>
                <h2>hi, i am {value.a} {value.b}</h2>
                <button onClick={syn}>synch click</button>
            </div>
        </>
    )
}

export { Synch };