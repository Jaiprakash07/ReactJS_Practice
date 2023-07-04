import React from 'react';

function Promises3Chain() {

    let state;
    const chain = () => {
        let ch1 = new Promise(function (myResolve) {
            state = 1;
            myResolve(state);
        })

        ch1.then((state) => {
            console.log(state);
            return state;
        }).then((state) => {                    // promise chaining works on return value of ch.then(promise handler)or new promise to other handler with other usebility
            console.log(state + 1);
            return state + 1;
        }).then((state) => {
            console.log(state + 1)
        })
        // console.log(state)
    }
    return (
        <>
            {/* <h2>{state}</h2> */}
            <button onClick={chain}>Chain Promise</button>
        </>
    )
}

export { Promises3Chain }