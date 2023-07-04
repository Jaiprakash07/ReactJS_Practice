import React from "react";

//list component
function List() {
    let cars = ['ford', 'mustang', 'civic', 'fiesta']
    let list = cars.map((value, index) => <li key={index}>{index} : {value}</li>); // not correct way to provide key
    return (
        <>
            <div>
                <ul>{list}</ul>
            </div>
        </>
    )
}

export { List };