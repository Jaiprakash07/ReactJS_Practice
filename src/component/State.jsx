import React, { useState } from "react";
import "./componentcss/State.css";


export function State() {
    const [text, setText] = useState('');     // using useState

    //function for uppercase
    function shoot2(e) {
        let newText = text.toUpperCase();
        console.log(newText);
        setText(newText);
    }

    //function for lowercase
    function shoot3(e) {
        let newText = text.toLowerCase();
        console.log(newText);
        setText(newText);
    }

    const [mode, setMode] = useState('dark');

    //function for dark/light mode
    let a = {};
    function shoot4() {
        if (mode === 'dark') {
            setMode('light');
            // this.style.backgroundColor = 'yellow'
            console.log('gggg');
        }
        else {
            setMode('dark');
            a = {
                backgroundColor: 'red',
                fontSize: '30px',
                color: 'gray'
            }
            console.log('fff')
        }
    }


    function shoot1(e) {
        console.log('hy');
        setText(e.target.value);
    }

    return (
        <>
            <div className="mode">
                <div className="state">
                    <textarea className={`${a}`} style={a} mode={mode} value={text} onChange={shoot1}></textarea>
                </div>
                <button className='bt me-2' onClick={shoot2}>Button for uppercase!</button>
                <button className='bt me-2' onClick={shoot3}>lowercase</button>
                <button className='bt me-2' style={a} onClick={shoot4}>dark/light mode</button>
            </div>
        </>
    )
}


//function Component 
export function State2() {
    function Oobject(name, lname) {                 // constructor function
        this.name = name;
        this.lname = lname;
    }
    let objs1 = new Oobject('Ryan', 'Coogler');        //creating object
    // console.log(objs1);

    const On = () => {
        return 'Hello Duniya';
    }
    return (   
        <>
            <div> 
                <h2 className="On"> {On()} </h2> 
                <h2 className="On"> {objs1.name + ' ' + objs1.lname} </h2>     
            </div>
            <div>
                <h3>{(() => 'callback funtion')()}</h3>
            </div>
        </>
    )
}

