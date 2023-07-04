import React, { useState } from 'react';

function Fetch2() {
    const [content, setContent] = useState({});

    //first function
    const fect = async () => {
        // let data = {};
        let data = {                  // show only id not title,price or other thing,i.e, data declare above
            title: "clothes",
            price: 3000,
            description: "wearable clothes",
            image: "https://i.pravatar.cc",
            category: "textile",
        }
        try {
            const response = await fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                throw new Error('balle balle')
            }
            const result = await response.json();
            console.log(response)
            console.log('Success:-', result)
        }
        catch (error) {
            console.log('Error:-', error)
        }
    }

    //second function
    async function sub(e) {
        e.preventDefault();
        let title = document.querySelector('#title').value;
        let price = document.querySelector('#price').value;
        try {
            const dataa = {
                title: title,
                price: price
            }
            const init = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // headers: { 'Content-type': 'application/x-www-form-urlencoded' },
                body: JSON.stringify(dataa)
                // body: new FormData(document.querySelector('.myfile'))
            }
            const response = await fetch('https://fakestoreapi.com/products', init)
            const result = await response.json();
            console.log(result);

            let titles = document.querySelector('#title')
            let prices = document.querySelector('#price')
            titles.value = '';
            prices.value = '';
        }
        catch (erro) {
            console.log(erro)
        }
    }

    const Chan = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setContent((pre) => ({ ...pre, [name]: value }))
    }
    return (
        <>
            <h2>Fetch2 API</h2>
            <button onClick={fect}>POST</button>

            <div>
                <h2>Fetch2 API formdata</h2>
                <form onSubmit={sub} id='myfile'>
                    <input type='text' value={content.title} onChange={Chan} placeholder='title' id='title' />
                    <input type='text' value={content.price} onChange={Chan} placeholder='price' id='price' />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        </>
    )
}

export { Fetch2 };