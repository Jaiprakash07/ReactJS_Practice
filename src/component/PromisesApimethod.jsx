import React from 'react';

const Promisesapi = () => {

    function api() {
        // const first = document.querySelector('.first')
        // const second = document.querySelector('.second')
        // const third = document.querySelector('.third')

        let p1 = new Promise((myResolve, myReject) => {
            setTimeout(() => { myResolve('value 1') }, 1000)
            // setTimeout(() => { myReject(new Error('error1')) }, 1000)
        })

        let p2 = new Promise((myResolve, myReject) => {
            // setTimeout(() => { myResolve('value 2') }, 1000)
            setTimeout(() => { myReject(new Error('error2')) }, 1000)
        })

        let p3 = new Promise((myResolve, myReject) => {
            setTimeout(() => { myResolve('value 3') }, 1000)
            // setTimeout(() => {myReject(new Error('error3'))},1000)
        })


        // p1.then((value) => {
        //     first.innerHTML = value;
        // })

        // p2.then((value) => {
        //     second.innerHTML = value;
        // })

        // p3.then((value) => {
        //     third.innerHTML = value;
        // })

        //Promise api method used when want single output of all promises data that can take several times.

        // let p = Promise.all([p1, p2, p3])               // return an array of all fulfill promise and a single promise rejected doesn't show
        let p = Promise.allSettled([p1, p2, p3])        // return an array of object of all fulfilled and reject both promise
        // let p = Promise.any([p1, p2, p3])               //  return first fulfilled promise and doesn't show after that promise
        // let p = Promise.race([p1, p2, p3])              //  return first fulfill or reject promise which comes first 
        // let p = Promise.resolve([p1, p2, p3])           // return an array of all promise with state 
        // let p = Promise.reject([p1, p2, p3]);           // return an array of promise with reject promise with reason
        p.then(value => {
            console.log(value);
            // for(let x of value) {
            // first.innerHTML = `${x.status}, ${x.value}`;
            // }
        })

    }
    return (
        <>
            <h2>Promises Api, 6 static method</h2>
            <h3>1 - Promise.allSettled method</h3>
            {/* <h4 className='first'>{null}</h4> */}
            <h3>2 - Promise.any method</h3>
            {/* <h4 className='second'>{null}</h4> */}
            <h3>3 - Promise race method</h3>
            {/* <h4 className='third'>{null}</h4> */}
            <button onClick={api}>Click me!promise api</button>
        </>
    )
}

export { Promisesapi };