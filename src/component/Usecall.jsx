import React, {useCallback, useState } from 'react';
import Useecall2 from './Usecall2';

// const Made = createContext();

function Useecall1() {

    const [num, setNum] = useState(1);
    const [val, setVal] = useState(0);

    function com1() {
        setNum(() => num * 2)
    }

    function com2() {
        setVal(() => val + 1)
    }

    const learn = useCallback(() => {
        // console.log('hi');
    }, []);

    learn();
    return (
        <>
        <div>
            {/* <Made.Provider value={{val1: [val,setVal], val2: com2}}> */}
            <Useecall2  learn= {learn}/>
            {/* </Made.Provider> */}
            <h2>Usecallback hook {num}</h2>
            <button onClick={() => { com1() }}>Call1 the 2's table</button>
            <h2>Usecallback hook dependency {val}</h2>
            <button onClick={() => { com2() }}>Call2 for counting</button>
        </div>
        </>
    )
}

export { Useecall1 };