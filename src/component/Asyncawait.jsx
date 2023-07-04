import React from 'react';

function Asyncawait() {

    function Aawait() {
        async function aa() {
            let promise = new Promise(function (myResolve, MyReject) {
                setTimeout(() => {myResolve('i am 1st')}, 3000)
            })

            let promise2 = new Promise(function(myResolve,myReject) {
                setTimeout(() => {myResolve('i am 2nd')}, 7000)
            })

            // promise.then(value => {
            //     alert(value);
            // })

            // promise2.then(value => {
            //     alert(value);
            // })

            //await hold the promises until it fulfilled then return whole output of both them.it makes asynch action into synch action
            console.log('i am waiting for 1st promise');
            let p1 = await promise;

            console.log('i am fulfilled of 1st promise')
            console.log('i am waiting for 2nd promise');
            
            let p2 = await promise2;
            console.log('i am fulfilled of 2nd promise')
            return [p1, p2];

        }
        // console.log('hi');
        let z = aa();
        z.then(value => {
            console.log(value);
        })
        console.log(z)
    }
    return (
        <>
            <h2>Async/Await js</h2>
            <button onClick={() => Aawait()}>click!</button>
        </>
    )
}

export { Asyncawait };