import React from "react";

//if-else conditional statement
function Conditional() {
    let age = 60;
    if (age < 18) {
        return <p>You are {age},Unable to drive, Too young</p>
    }
    else if (age >= 18 && age <= 60) {
        return <p>You are {age},Able to drive, adult, Young, Man</p>
    }
    else {
        return <p>You are {age},Unable to drive,Too old</p>
    }
}


//ternary operator
function Conditional2() {
    let ages = 45;
    return (
        <>
            <h2>{(ages < 18) ? `you are ${ages} ,not eligible for vote ` : `you are ${ages}, eligible for vote`}</h2>
        </>
    )
}

//&& operator
function Conditional3() {
    let movie = ['armgeddon', 'hellboy', 'slither', 'chainsaw']
    let mov = movie.map((mvalue) => <li>{mvalue}</li>);
    return (
        <>
            {movie.length > 0 && <div><h4>'Using && operator btw condition and statement'</h4>
                <p>{mov}</p>
                </div>}
        </>
    )
}

export { Conditional, Conditional2, Conditional3 };