// import React from 'react';
import useCount from './Usecount';
import useJoin from './Usejoin';

function Custom() {
    const [value, Catchs, Catchs2] = useCount();
    const [empty, join1] = useJoin();
    return (
        <>
            <div>
                <h2>Custom hook</h2>
                <h2>useCount - {value}</h2>
                <button onClick={Catchs}>Customhook for add</button>
                <button onClick={Catchs2}>Customhook for minus</button>
                <h2>useJoin hook ,{empty}</h2>
                <button onClick={join1}>join</button>
            </div>
        </>
    )
}

export { Custom };