import React from "react";
import { Jai, Car } from './Jai';
import { Boot } from './Props';
import * as queue from './State'; // can write, of multiple component
import { Dates } from './Date';
import { Jsxattr } from './jsxattribute';
import { Inlinecss } from './Cssinjs';
import { Allfil } from './ALLfILEs';
import { useNavigate } from "react-router-dom";

function Home() {
    const navvv = useNavigate();
    const contact = () => {
        navvv('/contact')
    }
    return (
        <>
            <h2 >Home</h2>
            <button onClick={() => contact()}>Go to Contact Page</button>
            <div className="App">
                <Jai name='jayy' />
                <Car />
                <Boot />
                <queue.State />
                <queue.State2 />
                <Dates />
                <Jsxattr />
                <Inlinecss />
                <Allfil />
            </div>
        </>
    )
}

export { Home };