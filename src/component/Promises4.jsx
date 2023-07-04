import React from 'react';

function Promises4Multiplehandler() {

    const multihandler = () => {
        const handler1 = document.querySelector('.handler1');
        const handler2 = document.querySelector('.handler2');
        let promises4 = new Promise((myResolve, myReject) => {
            myResolve();
            myReject();
        })

        promises4.then(() => {
            handler1.innerHTML = 'i am resolved on my first stage.'
        }).catch(() => {
            handler1.innerHTML = 'i am reject on my another first stage.'
        })

        promises4.then(() => {                                                //can use handler multiple time for single promise to show different result.
            handler2.innerHTML = 'i am resolved on my second stage.'          // both can use .then and .catch, multiple times
        })

        promises4.catch(() => {
            handler2.innerHTML = 'i am reject on my another second stage.'
        })
    }
    return (
        <>
            <h2>Multiple handler in single promise</h2>
            <h4 className='handler1'>{null}</h4>
            <h4 className='handler2'>{null}</h4>
            <button onClick={() => multihandler()}>Multiple handler</button>
        </>
    )
}

export { Promises4Multiplehandler };