import React from 'react';

function Asyncawait2() {

    async function async2() {
        async function p1() {
            setTimeout(() => {
                console.log('hi')
            }, 3000)
        }

        async function p2() {
            setTimeout(() => {
            console.log('i am john wick')
            }, 5000);
        }

        let a = await p1;
    
        // console.log('a')

        let b = await p2;
        a()
        b()
        // console.log(a());
    }
    return (
        <>
            <h2>Async/Await2 js</h2>
            <button onClick={() => async2()}>click for 2 async function</button>
        </>
    )
}

export { Asyncawait2 };