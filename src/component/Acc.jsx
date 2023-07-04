import React from "react";
import  './componentcss/CssAcc.css';

function Acc(props) {

    const toogle = (e) => {
        if(e.target.nextSibling.style.display === 'none') {
            e.target.nextSibling.style.display = 'block';
        }
        else if(e.target.nextSibling.style.display === 'block') {
            e.target.nextSibling.style.display = 'none';
        }
    }
    return (
        <>
            <div className="accor">
                {/* <h2>Accordion</h2> */}
                <h4 onClick={toogle}>{props.question}</h4>
                <p style={{ display: 'none' }}>{props.answer}</p>
            </div>
        </>
    )
}

export { Acc };