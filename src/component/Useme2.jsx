import React, { useState, useMemo } from 'react';

function Useme2() {

    const [vale, setVale] = useState(0);

    const lame = useMemo(() => {
        // let a = 1;
        // for (a; a < 10000; a++) {
        // console.log('hh')
        // }
    }
        , [])

    const dd = () => {
        setVale(() => vale + 1);
    }

    console.log(lame);
    document.title = `React App ${vale}`;
    return (
        <>
            <h2>hi, {vale}</h2>
            <button onClick={dd}>Click</button>
        </>
    )
}

export { Useme2 };