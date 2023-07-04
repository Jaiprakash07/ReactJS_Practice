import React from 'react';

//mouseover event
export let Event = () => {
    function fire(e) {
        // console.log('onmouseoverevent')
        alert('Hi, You are using onmouseover event');
    }
    return (
        <>
            <h2>Event</h2>
            <p><span onMouseOver={fire}>onMouseover</span></p>
            {/* <button></button> */}
        </>
    )
}


//mouseout event
export function Event2() {
    let fire3 = () => {
        // console.log('hi');
        let l = document.querySelector('.out');
        l.innerHTML = 'hi';
    }

    let fire4 = () => {
        let m = document.querySelector('.out');
        m.innerText = '';
    }
    return (
        <>
            <p><span onMouseOut={fire3}>OnMouseout </span></p>
            <p><span className='out' onMouseOver={fire4}></span></p>
        </>
    )
}


//class component based event handle
export class Event3 extends React.Component {
    render() {
        let down = () => {
            let d = document.querySelector('.clas1')
            d.style.fontSize = '40px';
        }

        function up() {
            let u = document.querySelector('.clas2')
            u.style.backgroundColor = 'black';
            u.style.color = 'white';
        }

        // let check = document.querySelector('.clas2')
        // check.addEventListener('MouseUp', up)

        // function up() {
        //     check.style.backgroundColor = 'black';
        //     check.style.color = 'white';
        // }

        return (
            <>
                <div>
                    <h2>Class componet based Event handler </h2>
                    <p><span className='clas1' onMouseDown={down}>onMousedown</span></p>
                    <p><span className='clas2' onMouseUp={up}>onMouseUp</span></p>
                </div>
            </>
        )
    }
}
