import React, { useReducer } from 'react';

const initialState = {
    id: 1101,
    name: 'jai',
    mname: 'prakash',
    lname: 'nagar',
    age: 23
}


const reducer = (state, action) => {
    if (action.type === 'obje') {
        // console.log(state.name);
        return {
            ...state, name: 'bharat',
            mname: 'singh',
            lname: 'gour',
            age: 22,
            id: 1102
        }
    }
}

function Usereduce2() {
    const [state, dispatch] = useReducer(reducer, initialState)

    function clicks() {
        dispatch({ type: 'obje' });
    }

    return (
        <>
            <div>
                <h2>Print object by usereduce</h2>
                <h3>hi, {state.name} {state.mname} {state.lname} ,{state.age} year's old</h3>
                {/* <h3>{state.name} {state.mname} {state.lname},{state.age} year old</h3> */}
                <button onClick={() => { clicks() }}>Clicks</button>
            </div>
        </>
    )
}

export { Usereduce2 }