import React from "react";

export function Rase() {
    function p(n) {
        for (let i = 1; i <= n; i++) {
            if (i % 15 === 0) {
                // console.log('fizzBuzz')
                // return <li>'fizzBuzz'</li>;
            }
            else if (i % 3 === 0) {
                // console.log('fizz')
                // return <li>'fizz'</li>;
            }
            else if (i % 5 === 0) {
                // console.log('Buzz')
                // return <li>'Buzz'</li>;
            }
            else {
                // console.log(i)
                // return <li>{i}</li>;
            }
        }
    }

    // console.log(p(15));
    return (
        <>
            <div>
                <h2>hyy {p(15)}</h2>
                {/* <ul>{p(15)}</ul> */}
            </div>
        </>
    )
}