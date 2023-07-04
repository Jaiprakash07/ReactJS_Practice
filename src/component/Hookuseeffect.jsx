import React, { useEffect, useState } from 'react';

function Hookuseeffect() {
    const [num, setNum] = useState(1);
    const [value, setValue] = useState(1);

    const handleonnn = () => {
        setNum(num * 2);
    }

    const hand2 = () => {
        setValue(value + 2);
    }

    useEffect(() => {
        // console.log('jai');
    }, [num,value])

    // useEffect(() => {
    //     console.log('jai');
    // }, [value])

    return (
        <>
            <div>
                <h2>Useeffect hook</h2>
                {/* <h3>{num}</h3> */}
                <button onClick={handleonnn}>Click {num}</button>
                <button onClick={hand2}>Click {value}</button>
            </div>
        </>
    )
}

export { Hookuseeffect };