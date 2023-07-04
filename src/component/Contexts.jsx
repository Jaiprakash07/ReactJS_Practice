import React, { createContext, useState } from 'react';
import { Childcontex1 } from './Childcontex1';
// import { Childcontex3 } from './Childcontex3';

const Create = createContext();
const Create2 = createContext();
const Create3 = createContext();
//gives data through context api
function Con() {

    const names = {
        code: '07',
        fname: 'jai',
    }

    const check = ['mustang', 'ford', 'evoque', 'jimmy', 'civic']

    const [codes, setCodes] = useState(10);

    const handd = () => {
        setCodes(codes + 2);
    }

    const arr = ['class', 'object', 'function', 'array']

    const obj = {
        car: 'fiesta',
        model: 2022,
    }

    return (
        <>
            <div>
                {/* data send in the form of objec */}
                <Create.Provider value={{ value1: names, value2: check }}>
                    <Create2.Provider value={{ value1: [codes, setCodes], value2: handd }}>
                        <Create3.Provider value={[arr, obj]}>
                            <h2>Main parent Component,{codes}</h2>
                            <h3>{obj.car}-{obj.model}</h3>
                            <Childcontex1 />
                        </Create3.Provider>
                    </Create2.Provider>
                </Create.Provider>
            </div>
        </>
    )
}

//parent component 

// function Con() {

//     // const names = 'jai';
//     const [names,setName] = useState('jay walker');

//     const hands = () => {
//         setName('jessie');
//     }
//     return (
//         <>
//            <div>
//             <h2>Main parent Comp,{names}</h2>
//             <Childcontex1 name={names} new={hands}/>
//            </div>
//         </>
//     )
// }

export { Con, Create, Create2, Create3 };