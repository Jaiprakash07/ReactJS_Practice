import React, { useState } from 'react';

function Increase() {
    const [value, setValue] = useState(0);

    const handleInc = () => {
        setValue(value + 1);
    }

    const handleDec = () => {
        if (value === 0) {
            alert('Sorry,Zero is reached');
        }
        else {
            setValue(value - 1);
        }
    }

    return (
        <>
            <div>
                <h2>Increment and Decrement</h2>
                <h2>{value}</h2>
                <button onClick={handleInc}>Increment</button>
                <button onClick={handleDec}>Decrement</button>
            </div>
        </>
    )
}

export { Increase };