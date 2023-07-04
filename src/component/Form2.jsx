import React, { useState } from 'react';
import './componentcss/Form2.css';

function Form2() {
    const [data, setData] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((preValues) => ({ ...preValues, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`I am ${data.username}${data.lname},${data.age} years old. learn ${data.tech} tech`);
    }

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <label>Name</label>
                <input type='text' name='username' autoComplete='off' value={data.username} onChange={handleChange} />
                <label>Lname</label>
                <input type='text' name='lname' autocomplete='off' value={data.lname} onChange={handleChange} />
                <label>Age</label>
                <input type='number' name='age' value={data.age} onChange={handleChange} />
                <label>Tech</label>
                <select name='tech' value={data.tech} onChange={handleChange}>
                    <option value='mern'>MERN</option>
                    <option value='mean'>MEAN</option>
                    <option value='ml'>ML</option>
                    <option value='python'>Python</option>
                </select>
                <input type='submit' />
            </form>
        </>
    )
}

export { Form2 };