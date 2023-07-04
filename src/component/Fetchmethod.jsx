import React, { useState } from 'react';

function FetchMethod() {
    const [dta,setDta] = useState();
    // let num = 0;
    async function coo(e) {
        e.preventDefault()
        let country = document.querySelector('#country')
        if (country.value === '') {
            alert('fill the country name')
        }
        else {
        const response = await fetch('https://api.covid19api.com/summary')
        const result = await response.json()
        // if (result.Countries[] instanceof result.Countries[].Country)
        console.log(result.Countries);
        // console.log(dta)
        }
    }

    let m;
    const chang = (e) => {
        m = e.target.value;
        setDta(() => m)
    }
    return (
        <>
        <h2>Covid API data</h2>
        {/* <button onClick={covid}>Current covid</button> */}
        <h3 id='countryname'>{dta}</h3>
        {/* <h3 id='cases'></h3> */}
        {/* <h3 id='recoverd'></h3> */}
        {/* <h3 id='death'></h3> */}
        <form onSubmit={coo}>
            <input type='text' name='country' value={dta} onChange={chang} placeholder='country' id='country'/><br/>
            <button type='submit'>covid data</button>
        </form>
        </>
    )
}

export { FetchMethod };