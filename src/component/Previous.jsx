import React, { useState } from 'react';

let arrr = [];
function Previous() {

    const [num, setNum] = useState(1);
    // let [arrr] = useState([]);
   
    let [l,setl] = useState([]);
    //  console.log(arrr);
    function isolate() {
        setNum(() => num * 2);
        arrr.push(num * 2);
        // arrr.push(num);
        // console.log(arrr);
    }
        
    let isolate2 = (e) => {
        l = arrr;
        // console.log(l)
        // console.log(arrr);
        let length = l.length;
        return setl(l[length - 2]);
    };

    return (
        <>
            <div>
                <h3>Previous state</h3>
                <button onClick={isolate}>current value-{num}</button>
                <button onClick={isolate2}>previous value-{l}</button>
            </div>
        </>
    )
}

export { Previous }; 