import React from 'react';

function Fetch3() {
    const fet3 = async () => {
        try {
            const datas = {
                title: 'joystick',
                description: 'wooden based material',
                price: 20
            }
            const respone = await fetch('https://fakestoreapi.com/products/7', {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(datas)
            })
            const result = await respone.json();
            console.log(result);
        }
        catch(err) {
            console.log(err);
        }
    }
    return (
        <>
            <h2>Fetch3 API</h2>
            <button onClick={fet3}>PUT</button>
        </>
    )
}

export { Fetch3 };