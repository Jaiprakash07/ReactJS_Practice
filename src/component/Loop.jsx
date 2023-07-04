import React from 'react';

let i, save = []
function Loop() {
    let m = save;
    const click = () => {
        for (i = 1; i <= 10; i++) {
            save.push(i)
            // console.log(save)
        }
        // console.log(save[2])
        // console.log(m[3])
    }
    return (
        <>
            <h2>Loop,{m[1]}</h2>
            <button onClick={click}>Num</button>
        </>
    )
}

export { Loop };