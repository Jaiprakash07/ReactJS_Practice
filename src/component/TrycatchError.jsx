import React from 'react';

function Trycatch() {
    // (
        function trys() {
        try {
            throw new SyntaxError('404')                            // throw makes manmade error with the help of try
            // throw 'errors';
            // console.log(rahul)
            // josh;
        }
        catch (error) {                                            // catch acheive the error 
            // console.log('balle balle,it"s a  error', error); 
            console.log(error.name)
            console.log(error.message)
            // console.log(error.stack)
            // console.log(error)
            // raj;
        }
        finally {                                               //finally must return whatever we pass inside in it.if error comese or not
            console.log('hyy')
        }
        // console.log('hyy')
    }
    //  )()
    return (
        <>
            <h2>Error Handling with try catch statement</h2>
            <h3>{() => trys}</h3> 
        </>
    )
}

export { Trycatch };