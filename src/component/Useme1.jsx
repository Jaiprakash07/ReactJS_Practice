import React, { useMemo, useState } from 'react';

function Useme1() {

    const [star, setStar] = useState(0);
    const [star2, setStar2] = useState(0);

    const demo1 = () => {
        setStar(() => star + 1)
    }

    function demo2() {
        setStar2(() => star2 + 2);
    }

    const isEven = useMemo(() => {
        // let i = 0;
        // for(i; i <= 1000; i++) {
        //     console.log('loop');
        // }
        if(star%2 === 0) {
            // console.log('even');
            return 'even';
        }
        else {
            // console.log('odd');
            return 'odd';
        }
    },[star])

    return (
        <>
        <div>
            <h2>Usememo hook</h2>
            <button onClick={demo1}>addition by 1,{star}</button>
            <span>{isEven}</span>
            <button onClick={demo2}>addition by 2,{star2}</button>
        </div>
        </>
    )
}

export { Useme1 };