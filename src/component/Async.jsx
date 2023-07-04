import React from 'react';

//asynchronous js example using setTimeout,it work parallel to other function or anything
const Async = () => {
    // let a = 1;
    let asy = () => {
        console.log('1 - hello')
        setTimeout(() => {
            console.log('2 - i am on the middle of both of them with example of async js');
        }, 3000)
        console.log('3 - bye')
        // console.log(`hi, ${setTimeout(() => "this is the example of async js",3000)},bye`)
    }
    return (
        <>
            <div>
                <h2>Asynchronous js</h2>
                <button onClick={asy}>Asynchron click</button>
            </div>
        </>
    )
}

export { Async };