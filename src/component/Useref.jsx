import React, { useRef } from 'react';

function Useref() {
    let reference = useRef('jai')

    function handlesub(e) {
        e.preventDefault();
        console.log(reference.current.value);
        reference.current.style.fontSize = '24px';          // use for single element target for styling or getting their value
        // reference.current.style.textAlign = 'center';
    }

    // reference.current.style.textAlign = 'center';
    return (
        <>
            <div>
                <h2>Useref hook</h2>
                <form onSubmit={handlesub}>
                    <input type='text' name='fname' ref={reference} />
                    {/* <input type='text' name='lname' ref={reference.lname} /> */}
                    <input type='submit' value='submit' />
                </form>
            </div>
        </>
    )
}

export { Useref };