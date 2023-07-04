import React from 'react';

function Promises() {
    let date = new Date().getSeconds();

    const prom = () => {
        let promise = new Promise(function (myResolve, myReject) {
            date = new Date().getSeconds();
            // console.log(date)
            if (date % 2 === 0) {
                myResolve('even');
            }
            else {
                myReject('odd');
            }
        });

        promise.then(
            function (value) { console.log('number is', date, ',', value, promise) },  //both are anonymous function
            function (error) { console.log('number is', date, ',', error, promise) }   
        )
        // console.log(typeof promise)
    }
    return (
        <>
            <h2>Js Promises</h2>
            <button onClick={prom}>Promises</button>
        </>
    )
}

export { Promises };