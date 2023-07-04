import React, { useState } from 'react';

export function Form() {
    const [name, setName] = useState('');
    // console.log(name);

    const [lname, setlname] = useState('');

    function sub(event) {
        event.preventDefault();
        alert(`your name is ${name} ${lname}`)
    }
    return (
        <>
            <div>
                <form onSubmit={sub}>
                    <label>Name:-</label>
                    <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} />
                    <label>Lname</label>
                    <input type='text' value={lname} onChange={(e) => { setlname(e.target.value) }} />
                    <input type='submit' />
                </form>
            </div>
        </>
    )
}