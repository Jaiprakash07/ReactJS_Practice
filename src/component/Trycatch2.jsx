import React from 'react';

function Trycatch2() {
    let a = 1;
    const cover = () => {
    try {
        if(a % 10 === 0) {
            // console.log(a);
            throw new Error(a);
            // a = a + 1;
        }
        else {
            console.log(a);
            // a = a + 1; 
        }
    }
    catch(err) {
        // console.log(err.name)
        // console.log(err.message)
        console.log(err.stack)
    }
    finally {
        a = a + 1;
    }
}
    return (
        <>
        <button onClick={cover}>try/catch</button>
        </>
    )
}

export { Trycatch2 }