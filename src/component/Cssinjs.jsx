import React from 'react';

export function Inlinecss() {
    //internal css
    const internal = {
        width: '500px',
        backgroundColor: 'rgba(2,12,4)',
        color: 'white',
        margin: 'auto',
        marginBottom: '50px'
    }

    return (
        <>
        {/* inline css */}
        <h2 style = {{backgroundColor: 'rgba(42,42,54)', color: 'white'}}>Inline Css</h2> 
        <p style = {internal} >React makes inline and internal css as a object with curly braces.</p>
        </>
    );
}