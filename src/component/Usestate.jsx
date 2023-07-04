// import React from 'react';
import React, { useState } from 'react';            // useState hook 

function States(props) {
    let [num, setNum] = useState(50);
    // let x = parseInt(prompt('enter the num:-'));
    let count = () => setNum(num - 1)
    return (
        <>
            <h2>{props.title}-Component</h2>
            <h3 >{num}</h3>
            <button onClick={count}>Count</button>
            <p>Here, we use useState hook to count the number.</p>
        </>
    )
}


// updating or actual time through button
function States2() {
    let t = new Date().toLocaleTimeString();

    let [obj, newObj] = useState(t);

    let time = () => {
        t = new Date().toLocaleTimeString();
        return newObj(t)
    };

    setInterval(time,1000)
    return (
        <>
            <h2>{obj}</h2>
            {/* <button onClick={`setInterval = (${time},${100})`}>click for new data</button> */}
        </>
    )
}

export { States, States2 };