import React from "react";
import PropTypes from 'prop-types';

function Cal() {
    //addition function
    function add(a,b) {
        return a + b;
    }

    //multiplication arrow function
    let mult = (a,b) => a * b;

    //divide arrow function with return value
    let div = (a,b) => {
        return a / b;
    }
    return (
        <>
        <p>Addition method of a and b is :- {add(4,5)} </p>
        <p>Subtraction component of a and b is :-  <Sub a ='3' b = '7' /> </p>
        <p>Multiplication method of a and b is :-  {mult(4,2)} </p>
        <p>Divide method of a and b is :- {div(20,5)} </p>
        </>
    )
}

export {Cal};


//child component for Subtraction  
function Sub(props) {
    return (props.a - props.b);
}

Sub.propTypes = {
    a: PropTypes.number,
    b: PropTypes.number
}




