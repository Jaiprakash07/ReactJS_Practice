import React, { useReducer } from 'react';

const initialState = [1, 2, 3, 2, 5];

const reducer = (state, action) => {
    switch (action.type) {
        case 'arrs': {
            return state.map((v) => {
                return v + 1;
            })
        }
        // throw Error('unknown action:' + action.type);
        default: {
            console.log('usereduce3')
        }
    }
}

function Usereduce3() {

    const [state, dispatch] = useReducer(reducer, initialState)

    function handy() {
        dispatch({ type: 'arrs' })
    }
    return (
        <>
            <div>
                <h2>useredu,{state[0]},{state[1]},{state[2]}</h2>
                <button onClick={() => { handy() }}>use</button>
            </div>
        </>
    )
}

export { Usereduce3 };