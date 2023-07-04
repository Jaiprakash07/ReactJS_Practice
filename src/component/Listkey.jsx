import React from 'react';

function Key(props) {
    let item = props.item;
    return ( <li>{item}</li>);
}

function Data() {
    let collection = ['jai', 'vivek', 'ayush', 'anil', 'aman']
    let keys = collection.map((value,index) => <Key key={value + index} item={value} />)
    return (
        <>
        <div>
            <ol>{keys}</ol>
        </div>
        </>
    )
}

export {Data};