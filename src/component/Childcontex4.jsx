import React,{ useContext } from 'react';
import { Childcontex5 } from './Childcontex5';
import { Create2 } from './Contexts';

function Childcontex4() {

    const {value1,value2} = useContext(Create2);
    // const [codes, setCodes] = value1;

    // console.log("demno", value2);
    // const {handd()} = value2;            
    // console.log(codes);

    // const handd = () => {
    //     setCodes(codes + 2);
    // }

    return (
        <>
        <div>
            <h2>Child 4</h2>
            <h2>{value1}</h2>
            <button onClick={()=>value2()}>Clicked</button>
            <Childcontex5 />
        </div>
        </>
    )
}

export { Childcontex4 };