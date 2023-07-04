import React from 'react';

function Fetch4() {
    async function del() {
        const init = {
            method: 'DELETE'
        }
        const response = await fetch('https://fakestoreapi.com/products/6', init)
        const result = await response.json();
        console.log(result);
    }
    return (
        <>
        <h2>Fetch API Delete method</h2>
        <button onClick={del}>Delete</button>
        </>
    )
}

export { Fetch4 };