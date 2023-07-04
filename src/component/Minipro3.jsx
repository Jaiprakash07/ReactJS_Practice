import React from 'react';
import './componentcss/Minipro3.css';

function Game() {

    return (
        <>
            <div className='gameBox'>
                <Minibox a='1' b='1' c='1' />
                <Minibox a='2' b='1' c='3' />
                <Minibox a='3' b='3' c='3' />
                {/* <button onClick={move}>Click!</button> */}
            </div>
        </>
    )
}


function Minibox(props) {
    if (props.a === props.b && props.b === props.c && props.c === props.a) {
        return (
            <>
                <div className='Minibox'>
                    <h2 className='aa'>{props.a}</h2>
                    <h2 className='aa'>{props.b}</h2>
                    <h2 className='aa'>{props.c}</h2>
                </div>
                <p className='col'>this is matched</p>
            </>
        )
    }
    else {
        return (
            <>
                <div className='Minibox'>
                    <h2 className='aa'>{props.a}</h2>
                    <h2 className='aa'>{props.b}</h2>
                    <h2 className='aa'>{props.c}</h2>
                </div>
                <p className='col'>this is unmatched</p>
            </>
        )
    }
}



export { Game }