import React, { useState } from 'react';

function Promises2() {
    const [a, setA] = useState(1);
    function prom2() {
        let promise2 = new Promise((myResolve, myReject) => {
            if (a % 2 === 0) {
                setA(() => a + 1)
                    (myResolve('even'))
            }
            else {
                setA(() => a + 1)
                    (myReject('odd'))
            }
        })

        promise2.then(                                                // use for both resolved and rejected result
            (value) => { console.log(a, `is an ${value}`, promise2) }, // resolve arrow function
            // (error) => { console.log(a, `is an ${error}`, promise2) }
        )

        promise2.catch(                                               //use only for rejected result
            //     (value) => { console.log(a, `is an ${value}`, promise2) }, //doesn't work for resolve
            (error) => { console.log(a, `is an ${error}`, promise2) }      // work for reject
        )

    }
    return (
        <>
            <h2>Promises2</h2>
            <button onClick={prom2}>Promises2</button><br /><br />
        </>
    )
}

export { Promises2 };