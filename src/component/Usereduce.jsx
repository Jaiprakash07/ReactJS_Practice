import React, { useReducer } from "react";

const initialState = 1;

const reducer = (pstate, action) => {
    if (action.type === 'Multiply-by-2') {
        return pstate * 2;
    }
    if (action.type === 'Multiply-by-3') {
        return pstate * 3;
    }
    if (action.type === 'Previous-state'){
        console.log(pstate);
        return () => pstate;
    }else{
        console.log("else", pstate, action.type)
    }
}

function Usereduce() {
    const [state, dispatch] = useReducer(reducer, initialState)

    function handled1() {
        dispatch({ type: 'Multiply-by-2' });
    }

    function handled2() {
        dispatch({ type: 'Multiply-by-3' })
    }

    function handled3() {
        dispatch({ type: 'Previous-state'})
    } 

    return (
        <>
            <div>
                <h2>Usereduce</h2>
                <h2>{state}</h2>
                <button onClick={() => { handled1() }}>Multiply by 2</button>
                <button onClick={() => { handled2() }}>Multiply by 3</button>
                <button onClick={() => { handled3() }}>Previous-State, {state}</button>
            </div>
        </>
    )
}

export { Usereduce };