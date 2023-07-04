import React from 'react';

const Callback = () => {
    //1st way
    // const string = (name,callback) => {
    //     callback(name);
    // }

    // function call(name) {
    //     console.log(' hi '+ name);
    // }

    //2nd way
    function string(name, callback) {
        callback(name);
    }
    return (
        <>
            <div>
                {/* <h2 onClick={() => string('jai',call)}>Click on Callback</h2> */}
                <h3 onClick={() => string('jai', (name) => console.log(' hi ' + name))}>Click on Callback</h3>
            </div>
        </>
    )
}

export { Callback };