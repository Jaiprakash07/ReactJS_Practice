import React from 'react';

function Pro() {
    const datess = new Date().toTimeString();
    const add = datess[0] + datess[1] + datess[3] + datess[4];
    // console.log(add);
    if (add < 1200) {
        return <h1>Hello sir, <Morning /></h1>
    }
    else if (add >= 1200 && add < 1700) {
        return <h1>Hello sir, <Noon /></h1>
    }
    else if (add >= 1700 && add < 1900) {
        return <h1>Hello sir, <Evening /></h1>
    }
    else if (add >= 1900) {
        return <h1>Hello sir, <Night /></h1>
    }
}

export {Pro};

function Morning() {
    let order = {
        color: 'green',
        backgroundColor: 'white'
    }
    return <p style ={order}>Good Morning</p>
}

function Noon() {
    let order = {
        color: 'yellow',
        backgroundColor: 'black'
    }
    return <p style ={order}>Good Afternoon</p>
}

function Evening() {
    let order = {
        color: 'yellowish',
        backgroundColor: '#8d6262'
    }
    return <p style ={order}>Good Evening</p>
}

function Night() {
    let order = {
        color: 'black',
        backgroundColor: 'white'
    }
    return <p style ={order}>Good Night</p>
}